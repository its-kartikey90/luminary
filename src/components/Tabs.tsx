import React, { createContext, useContext, useState } from 'react'
import { cn } from '../utils/cn'

type TabsCtx = { active: string; setActive: (v: string) => void }
const Ctx = createContext<TabsCtx>({ active: '', setActive: () => {} })

export const Tabs = ({ defaultValue, children, className }: { defaultValue: string; children: React.ReactNode; className?: string }) => {
  const [active, setActive] = useState(defaultValue)
  return <Ctx.Provider value={{ active, setActive }}><div className={cn('w-full', className)}>{children}</div></Ctx.Provider>
}

export const TabsList = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div role="tablist" className={cn('flex rounded-lg bg-gray-100 p-1 gap-1', className)}>{children}</div>
)

export const TabsTrigger = ({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) => {
  const { active, setActive } = useContext(Ctx)
  const isActive = active === value
  return (
    <button role="tab" aria-selected={isActive} onClick={() => setActive(value)}
      className={cn('flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
        isActive ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900', className)}>
      {children}
    </button>
  )
}

export const TabsContent = ({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) => {
  const { active } = useContext(Ctx)
  if (active !== value) return null
  return <div role="tabpanel" className={cn('mt-4', className)}>{children}</div>
}
