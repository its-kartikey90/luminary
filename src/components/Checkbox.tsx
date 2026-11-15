import React from 'react'
import { cn } from '../utils/cn'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkId = id || label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <label htmlFor={checkId} className={cn('inline-flex items-center gap-2 cursor-pointer', className)}>
        <input ref={ref} id={checkId} type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1" {...props} />
        {label && <span className="text-sm text-gray-700">{label}</span>}
      </label>
    )
  }
)
Checkbox.displayName = 'Checkbox'
