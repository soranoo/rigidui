"use client"

import * as React from "react"
import { useState, useMemo, useEffect } from 'react'
import { cn } from "@/lib/utils"

const defaultColorCombinations = [
  { start: 'hsl(220, 15%, 8%)', middle: 'hsl(200, 12%, 18%)', end: 'hsl(240, 10%, 12%)' },
  { start: 'hsl(35, 25%, 15%)', middle: 'hsl(30, 20%, 25%)', end: 'hsl(25, 15%, 10%)' },
  { start: 'hsl(210, 20%, 12%)', middle: 'hsl(200, 15%, 22%)', end: 'hsl(215, 18%, 8%)' },
  { start: 'hsl(150, 30%, 8%)', middle: 'hsl(140, 25%, 15%)', end: 'hsl(160, 20%, 6%)' },
  { start: 'hsl(230, 35%, 6%)', middle: 'hsl(220, 30%, 12%)', end: 'hsl(240, 25%, 4%)' },
  { start: 'hsl(20, 40%, 12%)', middle: 'hsl(15, 35%, 18%)', end: 'hsl(10, 30%, 8%)' },
  { start: 'hsl(280, 25%, 10%)', middle: 'hsl(270, 20%, 16%)', end: 'hsl(290, 15%, 6%)' },
  { start: 'hsl(0, 0%, 8%)', middle: 'hsl(0, 0%, 18%)', end: 'hsl(0, 0%, 4%)' },
]

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  blurIntensity?: string;
  width?: number | string;
  height?: number | string;
  fallbackComponent?: React.ReactNode;
  onLoad?: () => void;
  onError?: (error: Event) => void;
  loading?: "lazy" | "eager";
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  customColors?: { start: string; middle?: string; end: string }[];
}

export function ImageLoader({
  src,
  alt,
  className,
  blurIntensity = "blur(50px)",
  width = 400,
  height = 300,
  fallbackComponent,
  onLoad,
  onError,
  loading = "lazy",
  objectFit = "cover",
  customColors
}: ImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsLoaded(false)
    setHasError(false)
  }, [src])

  const svgPattern = useMemo(() => {
    const colorCombinations = customColors && customColors.length > 0 ? customColors : defaultColorCombinations
    const selectedColors = colorCombinations[Math.floor(Math.random() * colorCombinations.length)]
    const randomSeed = Math.floor(Math.random() * 1000)

    const uniqueId = Math.random().toString(36).substr(2, 9)
    const gradientId = `ffflux-gradient-${uniqueId}`
    const filterId = `ffflux-filter-${uniqueId}`

    const gradientStops = selectedColors.middle
      ? `
        <stop stop-color="${selectedColors.start}" stop-opacity="1" offset="0%"></stop>
        <stop stop-color="${selectedColors.middle}" stop-opacity="1" offset="50%"></stop>
        <stop stop-color="${selectedColors.end}" stop-opacity="1" offset="100%"></stop>
      `
      : `
        <stop stop-color="${selectedColors.start}" stop-opacity="1" offset="0%"></stop>
        <stop stop-color="${selectedColors.end}" stop-opacity="1" offset="100%"></stop>
      `

    return `
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient gradientTransform="rotate(150, 0.5, 0.5)" x1="50%" y1="0%" x2="50%" y2="100%" id="${gradientId}">
            ${gradientStops}
          </linearGradient>
          <filter id="${filterId}" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.005 0.003" numOctaves="2" seed="${randomSeed}" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
            <feGaussianBlur stdDeviation="20 0" x="0%" y="0%" width="100%" height="100%" in="turbulence" edgeMode="duplicate" result="blur"></feGaussianBlur>
            <feBlend mode="color-dodge" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="blur" result="blend"></feBlend>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#${gradientId})" filter="url(#${filterId})"></rect>
      </svg>
    `
  }, [customColors])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setHasError(true)
    setIsLoaded(true)
    onError?.(event.nativeEvent)
  }

  const handleImageRef = (img: HTMLImageElement | null) => {
    if (img && img.complete && img.naturalHeight !== 0) {
      setIsLoaded(true)
    }
  }

  const containerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg", className)}
      style={containerStyle}
    >
      {!hasError && (
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            isLoaded ? 'opacity-0' : 'opacity-100'
          )}
          style={{ filter: blurIntensity }}
        >
          <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: svgPattern }}
          />
        </div>
      )}

      {!hasError && (
        <img
          ref={handleImageRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-500",
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          style={{ objectFit }}
          loading={loading}
        />
      )}

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
          {fallbackComponent ? (
            fallbackComponent
          ) : (
            <div className="text-center text-muted-foreground">
              <svg
                className="mx-auto h-12 w-12 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm">Failed to load image</p>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}