import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { api, pick, imgUrl, CONTACT } from '../../helpers/unitsApi'
import { cap } from '../../components/UnitCard'
import placeholder from '../../assets/placeholder.png'

export default function UnitDetails() {
  const { id } = useParams()
  const [u, setU] = useState(null)
  const [state, setState] = useState('loading')
  const [active, setActive] = useState(0)

  useEffect(() => {
    setState('loading')
    setActive(0)
    api(`/unit/${id}`)
      .then((d) => (setU(d.unit ?? d), setState('ready')))
      .catch(() => setState('error'))
  }, [id])

  if (state === 'loading') return <p className="py-32 text-center text-gray-500">Loading...</p>
  if (state === 'error' || !u) return <p className="py-32 text-center text-red-600">Unit not found.</p>

  const imgs = (u.images?.length ? u.images : [null]).map((i) => imgUrl(i) || placeholder)
  const project = u.project
  const location = [pick(u, 'city'), pick(project?.zone ?? u.zone, 'name')].filter(Boolean).join(', ')


  const glance = [
    ['Size', u.size && `${u.size} m²`],
    ['Bedrooms', u.bedrooms],
    ['Bathrooms', u.bathrooms],
    ['Status', u.status && cap(u.status)],
    ['Project', pick(project, 'name')],
    ['Developer', pick(project?.developer ?? u.developer, 'name')],
  ].filter(([, v]) => v !== undefined && v !== null && v !== '')

  const msg = encodeURIComponent(`Hello, I'm interested in: ${pick(u, 'title')}`)

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-6">
      <img src={imgs[active]} alt={pick(u, 'title')} className="h-[300px] w-full rounded-2xl object-cover shadow-lg md:h-[540px]" />

      {imgs.length > 1 && (
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {imgs.map((src, i) => (
            <img
              key={i}
              src={src}
              onClick={() => setActive(i)}
              className={`h-32 w-full cursor-pointer rounded-lg object-cover shadow-md md:h-44 ${i === active ? 'ring-2 ring-[#8B1A1A]' : ''}`}
            />
          ))}
        </div>
      )}

      <div className="mt-12 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#8B1A1A] md:text-4xl">{pick(u, 'title')}</h1>
          {location && (
            <p className="mt-2 flex items-center gap-2 text-gray-500">
              <FaMapMarkerAlt /> {location}
            </p>
          )}
        </div>
        <p className="text-3xl font-bold text-[#A08B72] md:text-4xl">{Number(u.price || 0).toLocaleString()} EGP</p>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.5fr]">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">At a glance</h2>
          <ul className="mt-6 list-disc space-y-4 pl-6 text-xl text-gray-500 marker:text-gray-400">
            {glance.map(([k, v]) => (
              <li key={k}>
                {k}: {v}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>
          <p className="mt-6 whitespace-pre-line text-xl leading-9 text-gray-500">{pick(u, 'description')}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${msg}`}
              target="_blank"
              rel="noreferrer"
              className="rounded bg-[#0a9a0a] py-3 text-center text-lg font-semibold text-white"
            >
              Contact via WhatsApp
            </a>
            <a href={`tel:${CONTACT.phone}`} className="rounded border border-[#8B1A1A] py-3 text-center text-lg font-semibold text-[#8B1A1A]">
              Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}