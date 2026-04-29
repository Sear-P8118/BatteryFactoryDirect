import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ eyebrow, title, subtitle, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {eyebrow && (
        <p className="text-red-500 text-xs font-semibold tracking-widest uppercase mb-3">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-zinc-50">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg text-zinc-400 max-w-2xl leading-relaxed',
            centered && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
