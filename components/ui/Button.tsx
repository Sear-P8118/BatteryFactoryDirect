'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-red-600 hover:bg-red-700 text-white border border-red-600 hover:border-red-700',
  secondary: 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 hover:border-zinc-600',
  outline: 'bg-transparent hover:bg-zinc-900 text-zinc-100 border border-zinc-600 hover:border-zinc-400',
  ghost: 'bg-transparent hover:bg-zinc-900/50 text-zinc-400 hover:text-zinc-100 border border-transparent',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center font-semibold tracking-wide rounded-lg transition-all duration-200',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-40 cursor-not-allowed pointer-events-none',
    className
  )

  const motion_props = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15 },
  }

  if (href) {
    return (
      <motion.div {...motion_props} className="inline-block">
        <Link href={href} className={base}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button {...motion_props} type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </motion.button>
  )
}
