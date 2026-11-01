import { Link } from 'react-router-dom'
import { pick, imgUrl } from '../helpers/unitsApi'
import placeholder from '../assets/placeholder.png'

const photo = (i) => imgUrl(i.images?.[0]) || placeholder

export function ImageTile({ item, to }) {
  return (
    <Link to={to} className="group relative block overflow-hidden rounded-xl shadow-lg">
      <img src={photo(item)} alt={pick(item, 'name')} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105 md:h-60" />
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 font-semibold text-white opacity-0 transition group-hover:opacity-100">
        {pick(item, 'name')}
      </span>
    </Link>
  )
}

// stats: [[Icon, 'text'], ...]  (empty array hides the stats row)
export default function InfoCard({ item, to, stats = [] }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-[0_4px_14px_rgba(0,0,0,0.15)]">
      <img src={photo(item)} alt={pick(item, 'name')} className="h-56 w-full object-cover" />
      {stats.length > 0 && (
        <div className="flex divide-x divide-gray-300 border-b border-gray-200 py-3 text-xs text-[#A08B72]">
          {stats.map(([Icon, t]) => (
            <span key={t} className="flex flex-1 items-center justify-center gap-2 px-1">
              <Icon /> {t}
            </span>
          ))}
        </div>
      )}
      <div className="p-4">
        <h3 className="font-serif text-lg font-bold text-[#6B0F1A]">{pick(item, 'name')}</h3>
        <p className="mt-3 line-clamp-3 text-xs text-gray-500">{pick(item, 'description')}</p>
        <Link to={to} className="mt-4 block rounded border border-[#6B0F1A] py-1.5 text-center text-xs text-[#6B0F1A] transition hover:bg-[#6B0F1A] hover:text-white">
          View Details
        </Link>
      </div>
    </div>
  )
}