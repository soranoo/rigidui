"use client"

import React, { useState, useRef, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, File, CheckCircle2, AlertCircle, Trash2, Image } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export interface FileWithPreview {
  file: File;
  preview?: string;
  id: string;
  name: string;
  type: string;
  size: number;
  uploadProgress: number;
  status: 'uploading' | 'success' | 'error';
}

export interface FileUploaderProps {
  maxFiles?: number;
  accept?: string[];
  onFilesReady?: (files: FileWithPreview[]) => void;
  onFileRemove?: (file: FileWithPreview) => void;
  className?: string;
  disabled?: boolean;
}

const getFileIcon = (fileItem: FileWithPreview) => {
  if (fileItem.type && fileItem.type.startsWith('image/')) {
    return <Image className="w-5 h-5" />;
  }
  return <File className="w-5 h-5" />;
};

export const FileUploader = ({
  maxFiles = 1,
  accept,
  onFilesReady,
  onFileRemove,
  className,
  disabled = false
}: FileUploaderProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadIntervalsRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const acceptedTypes = accept?.join(',');

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const simulateUpload = useCallback((fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5;

      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        uploadIntervalsRef.current.delete(fileId);

        setFiles(prevFiles => {
          const newFiles = prevFiles.map(fileItem =>
            fileItem.id === fileId ?
              { ...fileItem, uploadProgress: 100, status: 'success' as const } :
              fileItem
          );

          if (newFiles.every(fileItem => fileItem.status === 'success')) {
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
          prevFiles.map(fileItem =>
            fileItem.id === fileId ?
              { ...fileItem, uploadProgress: Math.min(progress, 100) } :
              fileItem
          )
        );
      }
    }, 200 + Math.random() * 300);

    uploadIntervalsRef.current.set(fileId, interval);
    return interval;
  }, [files, onFilesReady]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (disabled || !e.dataTransfer.files) return;

    handleFiles(e.dataTransfer.files);
  }, [disabled]);

  const validateFiles = useCallback((fileList: File[]): { valid: File[], errors: { file: File, message: string }[] } => {
    const valid: File[] = [];
    const errors: { file: File, message: string }[] = [];

    if (files.length + fileList.length > maxFiles) {
      const allowedCount = Math.max(0, maxFiles - files.length);
      const message = `Maximum ${maxFiles} file${maxFiles === 1 ? '' : 's'} allowed`;

      fileList.slice(allowedCount).forEach(file => {
        errors.push({ file, message });
      });
      fileList = fileList.slice(0, allowedCount);
    }

    for (const file of fileList) {
      if (accept && accept.length > 0) {
        const fileType = file.type || '';
        const fileName = file.name ? file.name.toLowerCase() : '';
        const fileExtension = fileName.split('.').pop();

        const isAccepted = accept.some(type => {
          if (type.endsWith('/*')) {
            const category = type.split('/')[0];
            return fileType.startsWith(`${category}/`);
          }
          if (type.includes('/')) {
            return type === fileType;
          }
          if (type.startsWith('.')) {
            return type === `.${fileExtension}`;
          }
          return false;
        });

        if (!isAccepted) {
          errors.push({
            file,
            message: `File type not accepted. Allowed: ${accept.join(', ')}`
          });
          continue;
        }
      }

      const isDuplicate = files.some(existingFile =>
        existingFile.name === file.name && existingFile.size === file.size
      );

      if (isDuplicate) {
        errors.push({
          file,
          message: 'File already exists'
        });
        continue;
      }

      valid.push(file);
    }

    return { valid, errors };
  }, [files, maxFiles, accept]);

  const handleFiles = useCallback((fileList: FileList) => {
    const fileArray = Array.from(fileList);
    const { valid, errors: validationErrors } = validateFiles(fileArray);

    if (validationErrors.length > 0) {
      validationErrors.forEach(({ file, message }) => {
        toast.error(`${file.name || 'Unknown file'}: ${message}`);
      });
    }

    if (valid.length === 0) return;

    const newFiles = valid.map(file => {
      const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      let preview = undefined;

      if (file.type && file.type.startsWith('image/')) {
        try {
          preview = URL.createObjectURL(file);
        } catch (error) {
          console.warn('Failed to create preview for', file.name, error);
        }
      }

      return {
        file,
        preview,
        id,
        name: file.name || 'Unknown file',
        type: file.type || 'application/octet-stream',
        size: file.size || 0,
        uploadProgress: 0,
        status: 'uploading' as const
      };
    });

    setFiles(prevFiles => [...prevFiles, ...newFiles]);

    newFiles.forEach(fileItem => {
      setTimeout(() => simulateUpload(fileItem.id), Math.random() * 1000);
    });
  }, [validateFiles, simulateUpload]);

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && !disabled) {
      handleFiles(e.target.files);
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [handleFiles, disabled]);

  const handleButtonClick = useCallback(() => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  }, [disabled]);

  const removeFile = useCallback((id: string) => {
    setFiles(prevFiles => {
      const fileToRemove = prevFiles.find(fileItem => fileItem.id === id);
      if (fileToRemove) {
        if (fileToRemove.preview) {
          URL.revokeObjectURL(fileToRemove.preview);
        }

        const interval = uploadIntervalsRef.current.get(id);
        if (interval) {
          clearInterval(interval);
          uploadIntervalsRef.current.delete(id);
        }

        onFileRemove?.(fileToRemove);
      }

      return prevFiles.filter(fileItem => fileItem.id !== id);
    });
  }, [onFileRemove]);

  React.useEffect(() => {
    return () => {
      uploadIntervalsRef.current.forEach(interval => clearInterval(interval));
      uploadIntervalsRef.current.clear();

      files.forEach(fileItem => {
        if (fileItem.preview) {
          URL.revokeObjectURL(fileItem.preview);
        }
      });
    };
  }, []);

  React.useEffect(() => {
    return () => {
      files.forEach(fileItem => {
        if (fileItem.preview) {
          URL.revokeObjectURL(fileItem.preview);
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
          disabled && "opacity-50 cursor-not-allowed",
          !disabled && isDragging && "border-primary bg-primary/5",
          !disabled && !isDragging && "border-gray-300 dark:border-gray-700 hover:border-primary"
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
          disabled={disabled}
        />

        <Upload className="w-8 h-8 text-primary mb-4" />
        <h3 className="text-lg font-semibold mb-2">
          {isDragging ? 'Drop files here' : 'Drag & Drop your files here'}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">or</p>

        <Button
          onClick={handleButtonClick}
          disabled={disabled || files.length >= maxFiles}
          variant={isDragging ? "default" : "outline"}
        >
          Browse Files
        </Button>

        <p className="mt-4 text-sm text-gray-500">
          {accept ? `Accepted types: ${accept.join(', ')}` : 'All file types supported'}
          {maxFiles !== Infinity && ` (Max ${maxFiles} file${maxFiles === 1 ? '' : 's'})`}
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">
            Files ({files.length}{maxFiles !== Infinity ? `/${maxFiles}` : ''})
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {files.map((fileItem) => (
              <Card key={fileItem.id} className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 mr-3 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      {getFileIcon(fileItem)}
                    </div>
                    <div className="overflow-hidden">
                      <p className="font-medium max-w-[150px]" title={fileItem.name}>
                        {fileItem.name.slice(0, 15)}...
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFile(fileItem.id)}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                    disabled={disabled}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {fileItem.preview && (
                  <div className="mb-3 relative aspect-video w-full overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
                    <img
                      src={fileItem.preview}
                      alt={fileItem.name}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        console.warn('Failed to load preview for', fileItem.name);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                <div className="relative pt-1">
                  <div className="h-2 mb-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-300 ease-out",
                        fileItem.status === 'uploading' ? "bg-blue-500" :
                          fileItem.status === 'success' ? "bg-green-500" :
                            "bg-red-500"
                      )}
                      style={{ width: `${fileItem.uploadProgress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">
                      {Math.round(fileItem.uploadProgress)}%
                    </span>
                    <span>
                      {fileItem.status === 'uploading' && (
                        <span className="flex items-center text-blue-500">
                          Uploading...
                        </span>
                      )}
                      {fileItem.status === 'success' && (
                        <span className="flex items-center text-green-500">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Complete
                        </span>
                      )}
                      {fileItem.status === 'error' && (
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