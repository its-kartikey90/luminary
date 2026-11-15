import React from 'react'
import { cn } from '../utils/cn'

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  label?: string
  showValue?: boolean
  color?: string
}

export const Progress = ({ value, max = 100, label, showValue, color = 'bg-indigo-600', className, ...props }: ProgressProps) => {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div className={cn('w-full', className)} {...props}>
      {(label || showValue) && (
        <div className="flex justify-between mb-1.5">
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          {showValue && <span className="text-sm text-gray-500">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden" role="progressbar"
        aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <div className={cn('h-full rounded-full transition-all duration-300', color)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
