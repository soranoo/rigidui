import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { FileUploader, FileWithPreview } from './file-uploader';

const FileUploaderDemo = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPreview[]>([]);

  const handleFilesReady = (files: FileWithPreview[]) => {
    setUploadedFiles(files);
    toast.success(`All ${files.length} files uploaded successfully!`);
  };

  const handleProcessFiles = () => {
    toast.success(`Processing ${uploadedFiles.length} files...`);
    setTimeout(() => {
      toast.success("Files processed successfully!");
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold">File Uploader</h2>
          <p className="text-muted-foreground">Upload files with drag and drop support</p>
        </div>

        <FileUploader onFilesReady={handleFilesReady} />

        {uploadedFiles.length > 0 && (
          <div className="flex justify-end">
            <Button onClick={handleProcessFiles}>
              Process {uploadedFiles.length} Files
            </Button>
          </div>
        )}
      </div>

      <div className="mt-10 pt-6 border-t space-y-6">
        <div>
          <h2 className="text-xl font-bold">Restricted File Uploader</h2>
          <p className="text-muted-foreground">Images only (max 3 files, 2MB each)</p>
        </div>

        <FileUploader
          accept={['image/*']}
          maxFiles={3}
          maxSize={2 * 1024 * 1024}
        />
      </div>
    </div>
  );
};

export default FileUploaderDemo;