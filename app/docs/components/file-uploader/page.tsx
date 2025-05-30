import React from 'react'
import { FileUploader } from '@/registry/new-york/file-uploader/file-uploader'
import ComponentDocTemplate from '../../_components/ComponentDocTemplate'

export default function FileUploaderPage() {
  const propsData = [
    {
      name: 'onFilesReady',
      type: '(files: File[]) => void',
      defaultValue: 'undefined',
      description: 'Callback function called when files are ready or changed',
    },
    {
      name: 'maxFiles',
      type: 'number',
      defaultValue: '10',
      description: 'Maximum number of files that can be uploaded',
    },
    {
      name: 'maxSize',
      type: 'number',
      defaultValue: '10 * 1024 * 1024 (10MB)',
      description: 'Maximum file size in bytes',
    },
    {
      name: 'accept',
      type: 'string[]',
      defaultValue: "['image/*', 'application/pdf', 'text/*']",
      description: 'Array of accepted file types (e.g., ["image/*", "application/pdf"])',
    },
    {
      name: 'className',
      type: 'string',
      defaultValue: "undefined",
      description: 'Additional class names for styling',
    },
  ]

  const features = [
    {
      icon: (
        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "Drag & Drop Support",
      description: "Users can drag and drop files directly onto the upload area for seamless file selection."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "File Validation",
      description: "Automatically validates file types, sizes, and counts with customizable restrictions."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Upload Progress",
      description: "Real-time progress indicators show upload status with visual feedback for each file."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Image Previews",
      description: "Automatically generates preview thumbnails for uploaded image files."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Multiple Files",
      description: "Support for uploading multiple files simultaneously with individual progress tracking."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "File Management",
      description: "Easy file removal with automatic cleanup of preview URLs."
    }
  ]

  const bestPractices = [
    {
      type: 'do' as const,
      items: [
        'Set appropriate file size limits based on your server capabilities',
        'Validate file types on both client and server side',
        'Provide clear feedback about upload progress and errors',
        'Handle upload failures gracefully with retry options',
        'Use proper MIME type validation for security',
        'Implement proper error handling for network issues',
      ]
    },
    {
      type: 'dont' as const,
      items: [
        'Allow unlimited file sizes without proper validation',
        'Trust client-side validation alone for security',
        'Block the UI during file uploads without progress indication',
        'Store sensitive files without proper access controls',
        'Ignore memory cleanup for preview URLs',
        'Forget to handle edge cases like duplicate file names',
      ]
    }
  ]

  const usageCode = `import { FileUploader } from "@/components/ui/file-uploader"

export default function MyComponent() {
  const handleFilesReady = (files) => {
    console.log('Files ready:', files)
    // Handle the uploaded files

    // Example: Create FormData to send to server
    const formData = new FormData()
    files.forEach((file, index) => {
      formData.append(\`file-\${index}\`, file)
    })

    // Send to server
    // fetch('/api/upload', { method: 'POST', body: formData })
  }

  return (
    <FileUploader
      maxFiles={5}
      maxSize={1024 * 1024 * 5} // 5MB
      accept={['image/*', 'application/pdf']}
      onFilesReady={handleFilesReady}
      className="w-full max-w-lg"
    />
  )
}`

  const additionalSections = (
    <section className="space-y-8">
      <div className="flex items-center space-x-3">
        <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <h2 id="advanced-usage" className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white">Advanced Usage</h2>
      </div>
      <p className="md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
        Here are some advanced usage patterns for the File Uploader component.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white dark:bg-background rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Single Image Uploader</h3>
            <div className="space-y-4">
              <FileUploader
                maxFiles={1}
                accept={['image/*']}
                maxSize={1024 * 1024 * 2}
                className="border-dashed border-2 border-primary/30"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400">Single image uploader (max 2MB)</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-background rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Document Uploader</h3>
            <div className="space-y-4">
              <FileUploader
                maxFiles={3}
                accept={['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']}
                maxSize={1024 * 1024 * 10}
                className="border-dashed border-2 border-amber-300/30"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400">Documents only (PDF, DOC, DOCX - max 10MB)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pb-4 bg-white dark:bg-background rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Implementation Example</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            This example shows how to implement the FileUploader with a server upload function:
          </p>
          <pre className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg overflow-x-auto text-sm">
            {`import { FileUploader } from "@/components/ui/file-uploader"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function UploadForm() {
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)

  const handleFilesReady = (selectedFiles) => {
    setFiles(selectedFiles)
    setUploadComplete(false)
  }

  const handleUpload = async () => {
    if (files.length === 0) return

    setUploading(true)

    try {
      const formData = new FormData()
      files.forEach((file, index) => {
        formData.append(\`file-\${index}\`, file)
      })

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        setUploadComplete(true)
      } else {
        console.error('Upload failed')
      }
    } catch (error) {
      console.error('Error uploading files:', error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-6">
      <FileUploader
        maxFiles={5}
        maxSize={1024 * 1024 * 5}
        accept={['image/*', 'application/pdf']}
        onFilesReady={handleFilesReady}
      />

      {files.length > 0 && (
        <Button
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload to Server'}
        </Button>
      )}

      {uploadComplete && (
        <p className="text-green-500">Files uploaded successfully!</p>
      )}
    </div>
  )`}
          </pre>
        </div>
      </div>
    </section>
  )

  return (
    <ComponentDocTemplate
      title="File Uploader"
      description="A comprehensive file upload component with drag & drop support, progress tracking, and file validation."
      previewComponent={
        <div className="w-full max-w-xl mx-auto">
          <FileUploader
            maxFiles={3}
            accept={['image/*', 'application/pdf']}
            maxSize={1024 * 1024 * 5}
            className="w-full"
          />
        </div>
      }
      githubPath="registry/new-york/file-uploader/file-uploader.tsx"
      usageCode={usageCode}
      usageDescription="The File Uploader component provides a complete file upload interface with drag & drop, progress tracking, and validation. It handles file selection, validation, and preview generation."
      propsData={propsData}
      features={features}
      bestPractices={bestPractices}
      componentName="file-uploader"
      additionalSections={additionalSections}
    />
  )
}