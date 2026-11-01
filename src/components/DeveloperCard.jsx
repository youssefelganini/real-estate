import { Link } from 'react-router-dom'
import { pick, imgUrl } from '../helpers/unitsApi'
import placeholder from '../assets/placeholder.png'

export default function DeveloperCard({ item: d, to, badge }) {
  const logo = imgUrl(d.images?.[1])
  return (
    <div className="overflow-hidden rounded-lg bg-white p-2.5 shadow-[0_4px_14px_rgba(0,0,0,0.15)]">
      <div className="relative">
        <img src={imgUrl(d.images?.[0]) || placeholder} alt={pick(d, 'name')} className="h-52 w-full rounded-lg object-cover shadow-md" />
        {badge && <span className="absolute right-2 top-3 rounded bg-[#8B1A1A] px-3 py-1 text-xs text-white">{badge}</span>}
      </div>
      <div className="flex h-20 items-center gap-3 px-2">
        {logo && <img src={logo} alt="" className="h-10 object-contain" />}
        <h3 className="text-lg font-bold text-gray-900">{pick(d, 'name')}</h3>
      </div>
      <Link to={to} className="block rounded border border-[#6B0F1A] py-1.5 text-center text-xs text-[#6B0F1A] transition hover:bg-[#6B0F1A] hover:text-white">
        View Projects
      </Link>
    </div>
  )
}