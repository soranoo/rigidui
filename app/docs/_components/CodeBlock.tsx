'use client'
import React, { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

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
      <div className="relative">
        <SyntaxHighlighter
          language={language || 'text'}
          style={atomOneDark}
          customStyle={{
            margin: 0,
            padding: '1rem',
            height: 'auto',
            borderRadius: 0,
            fontSize: '0.9rem',
            backgroundColor: '#030712',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
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
  )
}
