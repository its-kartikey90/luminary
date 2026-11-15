import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../utils/cn'
import { CheckCircle, AlertCircle, AlertTriangle, Info, X } from 'lucide-react'

const alertVariants = cva('relative flex gap-3 rounded-xl border p-4 text-sm', {
  variants: {
    variant: {
      info:    'bg-blue-50 border-blue-200 text-blue-800',
      success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      warning: 'bg-amber-50 border-amber-200 text-amber-800',
      danger:  'bg-red-50 border-red-200 text-red-800',
    },
  },
  defaultVariants: { variant: 'info' },
})

const icons = {
  info:    Info,
  success: CheckCircle,
  warning: AlertTriangle,
  danger:  AlertCircle,
}

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  title?: string
  onClose?: () => void
}

export const Alert = ({ className, variant = 'info', title, children, onClose, ...props }: AlertProps) => {
  const Icon = icons[variant!]
  return (
    <div role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
      <Icon size={18} className="shrink-0 mt-0.5" />
      <div className="flex-1">
        {title && <p className="font-semibold mb-0.5">{title}</p>}
        {children && <div className="opacity-90">{children}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Dismiss" className="shrink-0 opacity-60 hover:opacity-100 transition-opacity">
          <X size={16} />
        </button>
      )}
    </div>
  )
}
