"use client"

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Folder, FolderOpen, FileText, X, Copy, Check, ChevronsUp, Search } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { cn } from '@/lib/utils'

type FileType = {
  id: string
  name: string
  type: 'file'
  language?: string
  content: string
  icon?: React.ReactNode
}

type FolderType = {
  id: string
  name: string
  type: 'folder'
  children: (FileType | FolderType)[]
  expanded?: boolean
  icon?: React.ReactNode
  expandedIcon?: React.ReactNode
}

type FileSystemItemType = FileType | FolderType

interface FileExplorerProps {
  initialData?: FolderType
  className?: string
  cardClassName?: string
  title?: string
  showTitle?: boolean
  height?: string
  fileContentHeight?: string
  defaultFileIcon?: React.ReactNode
  defaultFolderIcon?: React.ReactNode
  defaultFolderOpenIcon?: React.ReactNode
}

const defaultFileSystemData: FolderType = {
  id: 'root',
  name: 'project-root',
  type: 'folder',
  expanded: true,
  children: [
    {
      id: 'src',
      name: 'src',
      type: 'folder',
      expanded: true,
      children: [
        {
          id: 'components',
          name: 'components',
          type: 'folder',
          children: [
            {
              id: 'Button.tsx',
              name: 'Button.tsx',
              type: 'file',
              language: 'tsx',
              content: `import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
}) => {
  return (
    <button
      className={\`button \${variant} \${size}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};`
            },
            {
              id: 'Card.tsx',
              name: 'Card.tsx',
              type: 'file',
              language: 'tsx',
              content: `import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};`
            }
          ]
        },
        {
          id: 'pages',
          name: 'pages',
          type: 'folder',
          children: [
            {
              id: 'index.tsx',
              name: 'index.tsx',
              type: 'file',
              language: 'tsx',
              content: `import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export default function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to My App</h1>
      <Card title="Getting Started">
        <p>This is a simple example of using our components.</p>
        <Button>Click Me</Button>
      </Card>
    </div>
  );
}`
            }
          ]
        }
      ]
    }
  ]
}

const FileTreeItem = ({
  item,
  level = 0,
  onToggleExpand,
  onSelectFile,
  selectedFileId,
  defaultFileIcon,
  defaultFolderIcon,
  defaultFolderOpenIcon
}: {
  item: FileSystemItemType
  level?: number
  onToggleExpand: (id: string) => void
  onSelectFile: (file: FileType) => void
  selectedFileId: string | null
  defaultFileIcon: React.ReactNode
  defaultFolderIcon: React.ReactNode
  defaultFolderOpenIcon: React.ReactNode
}) => {
  const indent = level * 16

  if (item.type === 'folder') {
    const folderIcon = item.expanded
      ? (item.expandedIcon || defaultFolderOpenIcon)
      : (item.icon || defaultFolderIcon);

    return (
      <>
        <div
          className={cn(
            "flex items-center py-1 mb-1 px-2 rounded-md cursor-pointer hover:bg-accent/50 transition-colors",
            { "bg-accent/30": item.expanded }
          )}
          style={{ paddingLeft: `${indent}px` }}
          onClick={() => onToggleExpand(item.id)}
        >
          {item.expanded ?
            <ChevronDown className="h-4 w-4 mr-1 text-muted-foreground" /> :
            <ChevronRight className="h-4 w-4 mr-1 text-muted-foreground" />
          }
          <span className="mr-1">
            {folderIcon}
          </span>
          <span className="text-sm">{item.name}</span>
        </div>

        {item.expanded && item.children.map((child) => (
          <FileTreeItem
            key={child.id}
            item={child}
            level={level + 1}
            onToggleExpand={onToggleExpand}
            onSelectFile={onSelectFile}
            selectedFileId={selectedFileId}
            defaultFileIcon={defaultFileIcon}
            defaultFolderIcon={defaultFolderIcon}
            defaultFolderOpenIcon={defaultFolderOpenIcon}
          />
        ))}
      </>
    )
  } else {
    const fileIcon = item.icon || defaultFileIcon;

    return (
      <div
        className={cn(
          "flex items-center py-1 px-2 rounded-md cursor-pointer hover:bg-accent/50 transition-colors",
          { "bg-primary/10 text-primary": selectedFileId === item.id }
        )}
        style={{ paddingLeft: `${indent + 20}px` }}
        onClick={() => onSelectFile(item as FileType)}
      >
        <span className="mr-2">{fileIcon}</span>
        <span className="text-sm">{item.name}</span>
      </div>
    )
  }
}

export function FileExplorer({
  initialData = defaultFileSystemData,
  className = "",
  cardClassName = "",
  title = "File Explorer",
  showTitle = true,
  height = "calc(100vh-200px)",
  fileContentHeight = "100%",
  defaultFileIcon = <FileText className="h-4 w-4 text-muted-foreground" />,
  defaultFolderIcon = <Folder className="h-4 w-4 text-yellow-500" />,
  defaultFolderOpenIcon = <FolderOpen className="h-4 w-4 text-yellow-500" />
}: FileExplorerProps) {
  const [fileSystem, setFileSystem] = useState<FolderType>(initialData)
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [copied, setCopied] = useState(false)

  const handleToggleExpand = (id: string) => {
    const toggleFolder = (items: FileSystemItemType[]): FileSystemItemType[] => {
      return items.map(item => {
        if (item.id === id && item.type === 'folder') {
          return { ...item, expanded: !(item as FolderType).expanded }
        }
        if (item.type === 'folder') {
          return { ...item, children: toggleFolder((item as FolderType).children) }
        }
        return item
      })
    }

    setFileSystem(prevState => ({
      ...prevState,
      children: toggleFolder(prevState.children)
    }))
  }

  const handleSelectFile = (file: FileType) => {
    setSelectedFile(file)
  }

  const handleCopyContent = async () => {
    if (selectedFile) {
      await navigator.clipboard.writeText(selectedFile.content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const filterFileSystem = (items: FileSystemItemType[], query: string): FileSystemItemType[] => {
    if (!query) return items

    return items.reduce<FileSystemItemType[]>((filtered, item) => {
      if (item.type === 'file') {
        if (item.name.toLowerCase().includes(query.toLowerCase())) {
          filtered.push(item)
        }
      } else {
        const filteredChildren = filterFileSystem((item as FolderType).children, query)
        if (filteredChildren.length > 0 || item.name.toLowerCase().includes(query.toLowerCase())) {
          filtered.push({
            ...item,
            children: filteredChildren,
            expanded: true
          } as FolderType)
        }
      }
      return filtered
    }, [])
  }

  const filteredFileSystem = searchQuery
    ? { ...fileSystem, children: filterFileSystem(fileSystem.children, searchQuery) }
    : fileSystem

  return (
    <div className={cn("container p-0", className)}>
      {showTitle && <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1>}

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        <Card className={cn("lg:col-span-2 p-4 overflow-auto", cardClassName)} style={{ height }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Files</h2>
            <Button variant="ghost" size="icon" onClick={() => setFileSystem(initialData)}>
              <ChevronsUp className="h-4 w-4" />
            </Button>
          </div>

          <div className="mb-4 relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1.5 h-6 w-6"
                onClick={() => setSearchQuery('')}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="file-tree">
            {filteredFileSystem.children.map((item) => (
              <FileTreeItem
                key={item.id}
                item={item}
                onToggleExpand={handleToggleExpand}
                onSelectFile={handleSelectFile}
                selectedFileId={selectedFile?.id || null}
                defaultFileIcon={defaultFileIcon}
                defaultFolderIcon={defaultFolderIcon}
                defaultFolderOpenIcon={defaultFolderOpenIcon}
              />
            ))}
            {filteredFileSystem.children.length === 0 && (
              <div className="py-4 text-center text-muted-foreground text-sm">
                No files match your search
              </div>
            )}
          </div>
        </Card>

        <Card className={cn("lg:col-span-4 overflow-hidden flex flex-col", cardClassName)} style={{ height }}>
          {selectedFile ? (
            <>
              <div className="flex items-center justify-between border-b p-4">
                <div className="flex items-center">
                  <span className="mr-2">{selectedFile.icon || defaultFileIcon}</span>
                  <span className="font-medium">{selectedFile.name}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopyContent}
                  className="h-8 w-8"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>

              <div className="flex-grow overflow-auto p-0">
                <SyntaxHighlighter
                  language={selectedFile.language || 'text'}
                  style={atomOneDark}
                  customStyle={{
                    margin: 0,
                    padding: '1rem',
                    height: fileContentHeight,
                    borderRadius: 0,
                    fontSize: '0.9rem',
                    backgroundColor: 'hsl(var(--background))',
                  }}
                  // showLineNumbers={true}
                >
                  {selectedFile.content}
                </SyntaxHighlighter>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <FileText className="h-16 w-16 mb-4 text-muted-foreground/50" />
              <h3 className="text-xl font-medium mb-2">No File Selected</h3>
              <p className="text-muted-foreground">
                Select a file from the sidebar to view its contents
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}