import React from 'react'
import { cn } from '../utils/cn'

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, label, id, ...props }, ref) => {
    const toggleId = id || label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <label htmlFor={toggleId} className={cn('inline-flex items-center gap-3 cursor-pointer', className)}>
        <div className="relative">
          <input ref={ref} id={toggleId} type="checkbox" className="sr-only peer" {...props} />
          <div className="w-11 h-6 rounded-full bg-gray-200 peer-checked:bg-indigo-600 transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:after:translate-x-5" />
        </div>
        {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
      </label>
    )
  }
)
Toggle.displayName = 'Toggle'
