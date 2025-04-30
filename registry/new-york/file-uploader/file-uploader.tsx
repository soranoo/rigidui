import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, File, CheckCircle2, AlertCircle, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export interface FileWithPreview extends File {
  preview?: string;
  id: string;
  uploadProgress: number;
  status: 'uploading' | 'success' | 'error';
}

export interface FileUploaderProps {
  maxFiles?: number;
  maxSize?: number;
  accept?: string[];
  onFilesReady?: (files: FileWithPreview[]) => void;
  className?: string;
}

export const FileUploader = ({
  maxFiles = Infinity,
  maxSize = 1024 * 1024 * 10,
  accept,
  onFilesReady,
  className
}: FileUploaderProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const acceptedTypes = accept?.join(',');

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const simulateUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        setFiles(prevFiles => {
          const newFiles = prevFiles.map(file =>
            file.id === fileId ?
              { ...file, uploadProgress: 100, status: 'success' as const } :
              file
          );

          if (newFiles.every(file => file.status === 'success')) {
            onFilesReady?.(newFiles);
          }

          return newFiles;
        });

        const fileName = files.find(f => f.id === fileId)?.name;
        if (fileName) {
          toast.success(`${fileName} uploaded successfully`);
        }
      } else {
        setFiles(prevFiles =>
          prevFiles.map(file =>
            file.id === fileId ?
              { ...file, uploadProgress: progress } :
              file
          )
        );
      }
    }, 200);

    return interval;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const validateFiles = (fileList: File[]): { valid: File[], errors: {file: File, message: string}[] } => {
    const valid: File[] = [];
    const errors: {file: File, message: string}[] = [];

    if (files.length + fileList.length > maxFiles) {
      const message = `Maximum ${maxFiles} file${maxFiles === 1 ? '' : 's'} allowed`;
      fileList.slice(maxFiles - files.length).forEach(file => {
        errors.push({ file, message });
      });
      fileList = fileList.slice(0, maxFiles - files.length);
    }

    for (const file of fileList) {
      if (file.size > maxSize) {
        errors.push({
          file,
          message: `File size exceeds maximum of ${Math.round(maxSize / 1024 / 1024)}MB`
        });
        continue;
      }

      if (accept && accept.length > 0) {
        const fileType = file.type;
        const isAccepted = accept.some(type => {
          if (type.endsWith('/*')) {
            const category = type.split('/')[0];
            return fileType.startsWith(`${category}/`);
          }
          return type === fileType;
        });

        if (!isAccepted) {
          errors.push({
            file,
            message: `File type not accepted. Allowed: ${accept.join(', ')}`
          });
          continue;
        }
      }

      valid.push(file);
    }

    return { valid, errors };
  };

  const handleFiles = (fileList: FileList) => {
    const fileArray = Array.from(fileList);
    const { valid, errors: validationErrors } = validateFiles(fileArray);

    if (validationErrors.length > 0) {
      validationErrors.forEach(({ file, message }) => {
        toast.error(`${file.name}: ${message}`);
      });
    }

    if (valid.length === 0) return;

    const newFiles = valid.map(file => {
      const id = Math.random().toString(36).substr(2, 9);
      let preview = undefined;

      if (file.type.startsWith('image/')) {
        preview = URL.createObjectURL(file);
      }

      return {
        ...file,
        preview,
        id,
        uploadProgress: 0,
        status: 'uploading' as const
      };
    });

    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);

    newFiles.forEach(file => simulateUpload(file.id));
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (id: string) => {
    setFiles(prevFiles => {
      const fileToRemove = prevFiles.find(file => file.id === id);
      if (fileToRemove?.preview) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prevFiles.filter(file => file.id !== id);
    });
  };

  React.useEffect(() => {
    return () => {
      files.forEach(file => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [files]);

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-8 transition-colors",
          "flex flex-col items-center justify-center text-center",
          isDragging ?
            "border-primary bg-primary/5" :
            "border-gray-300 dark:border-gray-700 hover:border-primary"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple={maxFiles !== 1}
          accept={acceptedTypes}
          onChange={handleFileInputChange}
          className="hidden"
        />

        <Upload className="w-8 h-8 text-primary mb-4" />
        <h3 className="text-lg font-semibold mb-2">Drag & Drop your files here</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">or</p>

        <Button
          onClick={handleButtonClick}
          disabled={files.length >= maxFiles}
        >
          Browse Files
        </Button>

        <p className="mt-4 text-sm text-gray-500">
          {accept ? `Accepted types: ${accept.join(', ')}` : 'All file types supported'}
          {maxFiles < Infinity && ` (Max ${maxFiles} file${maxFiles === 1 ? '' : 's'})`}
          {maxSize && ` up to ${Math.round(maxSize / 1024 / 1024)}MB each`}
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Files ({files.length})</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {files.map((file) => (
              <Card key={file.id} className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 mr-3 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <File className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="font-medium truncate max-w-[130px]" title={file.name}>
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFile(file.id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {file.preview && (
                  <div className="mb-3 relative aspect-video w-full overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
                    <img
                      src={file.preview}
                      alt={file.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}

                <div className="relative pt-1">
                  <div className="h-2 mb-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all",
                        file.status === 'uploading' ? "bg-blue-500" :
                        file.status === 'success' ? "bg-green-500" :
                        "bg-red-500"
                      )}
                      style={{ width: `${file.uploadProgress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">{file.uploadProgress}%</span>
                    <span>
                      {file.status === 'uploading' && (
                        <span className="flex items-center text-blue-500">
                          Uploading...
                        </span>
                      )}
                      {file.status === 'success' && (
                        <span className="flex items-center text-green-500">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Complete
                        </span>
                      )}
                      {file.status === 'error' && (
                        <span className="flex items-center text-red-500">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Failed
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};