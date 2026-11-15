import React from 'react'
import { cn } from '../utils/cn'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const sizes = { xs: 'h-6 w-6 text-xs', sm: 'h-8 w-8 text-sm', md: 'h-10 w-10 text-sm', lg: 'h-12 w-12 text-base', xl: 'h-16 w-16 text-lg' }

export const Avatar = ({ src, alt, fallback, size = 'md', className, ...props }: AvatarProps) => (
  <div className={cn('relative inline-flex shrink-0 overflow-hidden rounded-full bg-indigo-100', sizes[size], className)} {...props}>
    {src ? (
      <img src={src} alt={alt || fallback || 'Avatar'} className="h-full w-full object-cover" />
    ) : (
      <span className="flex h-full w-full items-center justify-center font-semibold text-indigo-700 uppercase">
        {fallback?.slice(0, 2) || '?'}
      </span>
    )}
  </div>
)
