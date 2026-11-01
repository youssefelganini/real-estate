import { useState } from 'react'
import { FaSearch, FaChevronDown } from 'react-icons/fa'

// fields: [{type:'search',key,label} | {type:'select',key,label,options:[{value,label}]} | {type:'range',label,keys:[minKey,maxKey]}]
export default function FilterBar({ fields, onSearch }) {
  const [v, setV] = useState({})
  const [open, setOpen] = useState(false)
  const set = (k, val) => setV((p) => ({ ...p, [k]: val }))
  const cell = 'relative min-w-[150px] flex-1'
  const txt = 'w-full bg-transparent px-4 py-4 text-[#8a6a6a] outline-none'

  return (
    <div className="mx-auto max-w-7xl px-5">
      <div className="flex flex-wrap items-stretch divide-x divide-[#6B0F1A]/30 rounded-md border border-[#6B0F1A]/40 bg-white">
        {fields.map((f) => {
          if (f.type === 'search')
            return (
              <label key={f.key} className="flex min-w-[200px] flex-[2] items-center pr-4">
                <input
                  className={txt}
                  placeholder={f.label}
                  value={v[f.key] ?? ''}
                  onChange={(e) => set(f.key, e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && onSearch(v)}
                />
                <FaSearch className="text-gray-400" />
              </label>
            )
          if (f.type === 'range')
            return (
              <div key={f.label} className={cell}>
                <button type="button" onClick={() => setOpen(!open)} className={`${txt} flex items-center justify-between`}>
                  {f.label} <FaChevronDown className="text-xs" />
                </button>
                {open && (
                  <div className="absolute right-0 z-10 mt-1 flex gap-2 rounded border bg-white p-3 shadow-lg">
                    {f.keys.map((k, i) => (
                      <input
                        key={k}
                        type="number"
                        min="0"
                        placeholder={i ? 'Max' : 'Min'}
                        value={v[k] ?? ''}
                        onChange={(e) => set(k, e.target.value)}
                        className="w-28 rounded border px-2 py-1 text-sm"
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          return (
            <div key={f.key} className={cell}>
              <select
                value={v[f.key] ?? ''}
                onChange={(e) => set(f.key, e.target.value)}
                className={`${txt} cursor-pointer appearance-none pr-9`}
              >
                <option value="">{f.label}</option>
                {f.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400" />
            </div>
          )
        })}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={() => onSearch(v)}
          className="w-full max-w-md rounded bg-gradient-to-r from-[#5a0b14] to-[#8a1c25] py-3 font-semibold text-white"
        >
          Search
        </button>
      </div>
    </div>
  )
}
