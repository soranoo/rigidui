import React from 'react'
import { FileExplorer } from '@/registry/new-york/file-explorer/file-explorer'
import ComponentDocTemplate from '../../_components/ComponentDocTemplate'

export default function FileExplorerPage() {
  const propsData = [
    {
      name: 'initialData',
      type: 'FolderType',
      defaultValue: 'defaultFileSystemData',
      description: 'The initial file system data structure to display',
    },
    {
      name: 'className',
      type: 'string',
      defaultValue: "''",
      description: 'Additional class names for the container',
    },
    {
      name: 'cardClassName',
      type: 'string',
      defaultValue: "''",
      description: 'Additional class names for the card components',
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: "'File Explorer'",
      description: 'Title displayed above the file explorer',
    },
    {
      name: 'showTitle',
      type: 'boolean',
      defaultValue: 'true',
      description: 'Whether to show the title or not',
    },
    {
      name: 'height',
      type: 'string',
      defaultValue: "'calc(100vh-200px)'",
      description: 'Height of the file explorer component',
    },
    {
      name: 'fileContentHeight',
      type: 'string',
      defaultValue: "'100%'",
      description: 'Height of the file content display area',
    },
    {
      name: 'defaultFileIcon',
      type: 'React.ReactNode',
      defaultValue: '<FileText className="h-4 w-4 text-muted-foreground" />',
      description: 'Default icon to use for all files without a custom icon',
    },
    {
      name: 'defaultFolderIcon',
      type: 'React.ReactNode',
      defaultValue: '<Folder className="h-4 w-4 text-yellow-500" />',
      description: 'Default icon to use for closed folders without a custom icon',
    },
    {
      name: 'defaultFolderOpenIcon',
      type: 'React.ReactNode',
      defaultValue: '<FolderOpen className="h-4 w-4 text-yellow-500" />',
      description: 'Default icon to use for open folders without a custom icon',
    },
  ]

  const features = [
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      title: "Tree Structure",
      description: "Navigate through a hierarchical file system with expandable folders and files."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "File Search",
      description: "Quickly find files by name with an integrated search functionality."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Copy Content",
      description: "Easily copy file contents to clipboard with a single click."
    },
    {
      icon: (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      title: "Syntax Highlighting",
      description: "View file contents with language-specific syntax highlighting for better readability."
    }
  ]

  const bestPractices = [
    {
      type: 'do' as const,
      items: [
        'Provide meaningful file and folder names',
        'Limit the number of files for better performance',
        'Include a variety of file types to showcase syntax highlighting',
        'Customize the height to fit your UI requirements',
      ]
    },
    {
      type: 'dont' as const,
      items: [
        'Use extremely large files that might slow down rendering',
        'Include sensitive information in the file contents',
        'Nest folders too deeply, making navigation difficult',
        'Forget to handle errors for file operations',
      ]
    }
  ]

  const usageCode = `import { FileExplorer } from "@/components/ui/file-explorer"
import { FileCode, FolderClosed, FolderOpen, ImageIcon, FileText } from "lucide-react"

// Define your file system structure with custom icons
const myFileSystem = {
  id: 'root',
  name: 'my-project',
  type: 'folder',
  expanded: true,
  icon: <FolderClosed className="h-4 w-4 text-blue-500" />,
  expandedIcon: <FolderOpen className="h-4 w-4 text-blue-500" />,
  children: [
    {
      id: 'file1',
      name: 'example.ts',
      type: 'file',
      language: 'typescript',
      content: 'console.log("Hello world!");',
      icon: <FileCode className="h-4 w-4 text-green-500" />
    },
    {
      id: 'images',
      name: 'images',
      type: 'folder',
      icon: <FolderClosed className="h-4 w-4 text-purple-500" />,
      expandedIcon: <FolderOpen className="h-4 w-4 text-purple-500" />,
      children: [
        {
          id: 'logo.png',
          name: 'logo.png',
          type: 'file',
          content: '// Binary content not shown',
          icon: <ImageIcon className="h-4 w-4 text-orange-500" />
        }
      ]
    }
    // Add more files and folders
  ]
}

export default function MyComponent() {
  return (
    <FileExplorer
      initialData={myFileSystem}
      height="500px"
      showTitle={false}
      // You can also customize default icons used for files without custom icons
      defaultFileIcon={<FileText className="h-4 w-4 text-gray-500" />}
      defaultFolderIcon={<FolderClosed className="h-4 w-4 text-amber-500" />}
      defaultFolderOpenIcon={<FolderOpen className="h-4 w-4 text-amber-500" />}
    />
  )
}`

  const previewFileSystem = {
    id: 'root',
    name: 'my-project',
    type: 'folder' as const,
    expanded: true,
    icon: <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>,
    expandedIcon: <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
    </svg>,
    children: [
      {
        id: 'src',
        name: 'src',
        type: 'folder' as const,
        children: [
          {
            id: 'file1',
            name: 'example.ts',
            type: 'file' as const,
            language: 'typescript',
            content: 'console.log("Hello world!");',
            icon: <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          },
          {
            id: 'images',
            name: 'images',
            type: 'folder' as const,
            icon: <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>,
            expandedIcon: <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
            </svg>,
            children: [
              {
                id: 'logo.png',
                name: 'logo.png',
                type: 'file' as const,
                content: '// Binary content not shown',
                icon: <svg className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            ]
          }
        ]
      }
    ]

  }


  return (
    <ComponentDocTemplate
      title="File Explorer"
      description="A customizable file explorer component for navigating and viewing file systems."
      previewComponent={
        <FileExplorer
          initialData={previewFileSystem}
          showTitle={true}
          height="400px"
          className="w-full"
        />
      }
      githubPath="registry/new-york/file-explorer/file-explorer.tsx"
      usageCode={usageCode}
      usageDescription="The File Explorer component provides an interface for browsing and viewing a hierarchical file system structure."
      propsData={propsData}
      features={features}
      bestPractices={bestPractices}
      componentName="https://rigidui.vercel.app/registry/file-explorer"
    />
  )
}