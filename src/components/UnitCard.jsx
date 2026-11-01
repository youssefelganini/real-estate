import { Link } from 'react-router-dom'
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa'
import { pick, imgUrl, egp } from '../helpers/unitsApi'
import placeholder from '../assets/placeholder.png'

export const STATUS_STYLE = { AVAILABLE: 'bg-green-500', SOLD: 'bg-red-600', RENTED: 'bg-amber-500' }
export const cap = (s = '') => s.charAt(0) + s.slice(1).toLowerCase()

export const firstImg = (u) => imgUrl(u?.images?.[0]) || placeholder

export function StatusBadge({ status, className = '' }) {
  return (
    <span className={`rounded px-3 py-1 text-xs font-semibold text-white ${STATUS_STYLE[status] || 'bg-gray-500'} ${className}`}>
      {cap(status)}
    </span>
  )
}

export function UnitStats({ unit: u, className = '' }) {
  const items = [
    [FaBed, `${u.bedrooms ?? '-'} Bedrooms`],
    [FaBath, `${u.bathrooms ?? '-'} Bathrooms`],
    [FaRulerCombined, `${u.size ?? '-'}m`],
  ]
  return (
    <div className={`flex items-center justify-between divide-x divide-gray-300 text-xs text-gray-500 ${className}`}>
      {items.map(([Icon, t]) => (
        <span key={t} className="flex flex-1 items-center justify-center gap-2 px-1">
          <Icon /> {t}
        </span>
      ))}
    </div>
  )
}

export default function UnitCard({ unit: u, to = `/units/${u.id}` }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-[0_4px_14px_rgba(0,0,0,0.15)]">
      <div className="relative">
        <img src={firstImg(u)} alt={pick(u, 'title')} className="h-56 w-full object-cover" />
        <StatusBadge status={u.status} className="absolute right-0 top-3" />
      </div>
      <UnitStats unit={u} className="border-b border-gray-200 py-3" />
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-serif text-lg font-bold text-[#6B0F1A]">{pick(u, 'title')}</h3>
          <span className="whitespace-nowrap font-serif text-lg text-gray-500">{egp(u.price)}</span>
        </div>
        <p className="mt-3 line-clamp-3 text-xs text-gray-500">{pick(u, 'description')}</p>
        <Link
          to={to}
          className="mt-4 block rounded border border-[#6B0F1A] py-1.5 text-center text-xs text-[#6B0F1A] transition hover:bg-[#6B0F1A] hover:text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
