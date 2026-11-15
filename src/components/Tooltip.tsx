import React, { useState } from 'react'
import { cn } from '../utils/cn'

export interface TooltipProps {
  content: string
  children: React.ReactElement
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

const placements = {
  top:    'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left:   'right-full top-1/2 -translate-y-1/2 mr-2',
  right:  'left-full top-1/2 -translate-y-1/2 ml-2',
}

export const Tooltip = ({ content, children, placement = 'top' }: TooltipProps) => {
  const [visible, setVisible] = useState(false)
  return (
    <div className="relative inline-flex"
      onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)} onBlur={() => setVisible(false)}>
      {children}
      {visible && (
        <div role="tooltip"
          className={cn('absolute z-50 whitespace-nowrap rounded-lg bg-gray-900 px-2.5 py-1.5 text-xs text-white shadow-lg pointer-events-none', placements[placement])}>
          {content}
        </div>
      )}
    </div>
  )
}
