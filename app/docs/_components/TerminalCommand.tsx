"use client"
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TerminalCommandProps {
  packageManager?: string;
  command?: string;
  component?: string;
  className?: string;
}

const TerminalCommand = ({
  packageManager = 'npm',
  command = 'shadcn@latest add',
  component = 'button',
  className,
}: TerminalCommandProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <div className={cn('relative rounded-md bg-slate-950 p-4 overflow-x-auto', className)}>
      <div className="flex items-center space-x-1 text-sm font-mono text-slate-200">
        <span className="text-cyan-400">{packageManager}</span>
        <span>{command}</span>
        <span className="text-amber-300">{component}</span>
      </div>
      <button
        className="absolute right-4 top-4 text-slate-400 hover:text-slate-200"
        onClick={() => {
          navigator.clipboard.writeText(`${packageManager} ${command} ${component}`);
          setCopied(true);
        }}
        aria-label="Copy to clipboard"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1-2-2h9a2 2 0 0 1-2 2v1"></path>
        </svg>
      </button>
      {copied && (
        <div className="absolute bottom-2 right-4 text-xs font-medium text-green-400 bg-slate-900 px-2 py-1 rounded">
          Copied!
        </div>
      )}
    </div>
  );
};

export default TerminalCommand;