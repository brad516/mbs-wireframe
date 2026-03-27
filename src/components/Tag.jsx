export default function Tag({ children, light }) {
  return (
    <span className={`inline-block text-[11px] font-bold tracking-[0.18em] uppercase mb-3 ${light ? 'text-gold-light' : 'text-gold'}`}>
      {children}
    </span>
  )
}
