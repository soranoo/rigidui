'use client'
import React, { useState} from 'react'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showHeader?: boolean
  showCopyButton?: boolean
}

export function CodeBlock({
  code,
  language = 'tsx',
  filename,
  showHeader = true,
  showCopyButton = true
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative overflow-hidden bg-[#1e1e1e] text-[#d4d4d4] rounded-md">
      {showHeader && filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#252526] text-xs text-gray-400 border-b border-[#333]">
          <span>{filename}</span>
          <div className="text-gray-500">{language}</div>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
          <code className={`language-${language}`}>{code}</code>
        </pre>
        {showCopyButton && (
          <button
            onClick={handleCopy}
            aria-label="Copy code"
            className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-800/80 text-gray-400 hover:bg-gray-700 hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        )}
      </div>
    </div>
  )
}
