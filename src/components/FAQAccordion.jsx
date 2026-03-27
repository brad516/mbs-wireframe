import { useState } from 'react'

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center py-5 text-left group"
          >
            <span className="font-serif font-bold text-navy text-[15px] pr-4 group-hover:text-red transition">
              {item.question}
            </span>
            <span className="text-navy/40 text-xl shrink-0">{open === i ? '\u2212' : '+'}</span>
          </button>
          {open === i && (
            <div className="pb-5 text-sm text-gray-500 leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
