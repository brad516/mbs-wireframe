export default function Tag({ children, light }) {
  return (
    <span className={`inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.18em] uppercase mb-3 before:h-px before:w-6 before:bg-current before:opacity-60 ${light ? 'text-gold-light' : 'text-gold'}`}>
      {children}
    </span>
  )
}
