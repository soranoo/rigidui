import React from 'react'
import { FileUploader } from '@/registry/new-york/file-uploader/file-uploader'
import ComponentDocTemplate from '../../_components/ComponentDocTemplate'

export default function FileUploaderPage() {
  const propsData = [
    {
      name: 'maxFiles',
      type: 'number',
      defaultValue: 'Infinity',
      description: 'Maximum number of files that can be uploaded',
    },
    {
      name: 'maxSize',
      type: 'number',
      defaultValue: '1024 * 1024 * 10',
      description: 'Maximum file size in bytes (default: 10MB)',
    },
    {
      name: 'accept',
      type: 'string[]',
      defaultValue: 'undefined',
      description: 'Array of accepted file types (e.g., ["image/*", "application/pdf"])',
    },
    {
      name: 'onFilesReady',
      type: '(files: FileWithPreview[]) => void',
      defaultValue: 'undefined',
      description: 'Callback function called when all files are successfully uploaded',
    },
    {
      name: 'className',
      type: 'string',
      defaultValue: "''",
      description: 'Additional class names for styling',
    },
  ]

  const features = [
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "Drag & Drop Support",
      description: "Users can drag and drop files directly onto the upload area for seamless file selection."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "File Validation",
      description: "Automatically validates file types, sizes, and counts with customizable restrictions."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Upload Progress",
      description: "Real-time progress indicators show upload status with visual feedback for each file."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Image Previews",
      description: "Automatically generates preview thumbnails for uploaded image files."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Multiple Files",
      description: "Support for uploading multiple files simultaneously with individual progress tracking."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "File Management",
      description: "Easy file removal with confirmation and automatic cleanup of preview URLs."
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
  }

  return (
    <FileUploader
      maxFiles={5}
      maxSize={1024 * 1024 * 5} // 5MB
      accept={['image/*', 'application/pdf']}
      onFilesReady={handleFilesReady}
    />
  )
}`

  const additionalSections = (
    <section className="space-y-8">
      <div className="flex items-center space-x-3">
        <svg className="h-7 w-7 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <h2 id="advanced-usage" className="md:text-3xl text-2xl font-bold text-gray-900 dark:text-white">Advanced Usage</h2>
      </div>
      <p className="md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
        Here are some advanced usage patterns for the File Uploader component.
      </p>

      <div className="mt-8 pb-4 bg-white dark:bg-background rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="p-8">
          <h3 className="text-lg font-semibold mb-4">Multiple Configurations</h3>
          <div className="space-y-4">
            <FileUploader
              maxFiles={1}
              accept={['image/*']}
              maxSize={1024 * 1024 * 2}
              className="border-dashed border-2 border-blue-300"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">Single image uploader (max 2MB)</p>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <ComponentDocTemplate
      title="File Uploader"
      description="A comprehensive file upload component with drag & drop support, progress tracking, and file validation."
      previewComponent={
        <FileUploader
          maxFiles={3}
          accept={['image/*', 'application/pdf']}
          maxSize={1024 * 1024 * 5}
          className="w-full max-w-lg"
        />
      }
      githubPath="registry/new-york/file-uploader/file-uploader.tsx"
      usageCode={usageCode}
      usageDescription="The File Uploader component provides a complete file upload interface with drag & drop, progress tracking, and validation."
      propsData={propsData}
      features={features}
      bestPractices={bestPractices}
      componentName="https://rigidui.vercel.app/registry/file-uploader"
      additionalSections={additionalSections}
    />
  )
}