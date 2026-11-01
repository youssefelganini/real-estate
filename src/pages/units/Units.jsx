import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import unitImg from '../../assets/units.png'
import UnitCard, { cap } from '../../components/UnitCard'
import FilterBar from '../../components/FilterBar'
import { api, toList, pick } from '../../helpers/unitsApi'

const BEDS = [1, 2, 3, 4, 5].map((n) => ({ value: n, label: `${n} Bedrooms` }))
const STATUS = ['AVAILABLE', 'SOLD', 'RENTED'].map((s) => ({ value: s, label: cap(s) }))

const LOOKUPS = [
  ['developerName', '/developer', 'Developer'],
  ['zoneName', '/zone', 'Zone'],
  ['projectName', '/projects/all-projects', 'Projects'],
]

export default function Units() {
  const [units, setUnits] = useState([])
  const [lookups, setLookups] = useState({})
  const [state, setState] = useState('loading') 

  const load = (params = {}) => {
    setState('loading')
    api('/unit', params)
      .then((d) => (setUnits(toList(d)), setState('ready')))
      .catch(() => setState('error'))
  }

  useEffect(() => {
    load()
    LOOKUPS.forEach(([key, path]) =>
      api(path)
        .then((d) => setLookups((p) => ({ ...p, [key]: toList(d).map((x) => ({ value: pick(x, 'name'), label: pick(x, 'name') })) })))
        .catch(() => {})
    )
  }, [])

  const fields = [
    { type: 'search', key: 'search', label: 'Search Property' },
    { type: 'select', key: 'bedrooms', label: 'Bedrooms', options: BEDS },
    ...LOOKUPS.map(([key, , label]) => ({ type: 'select', key, label, options: lookups[key] || [] })),
    { type: 'select', key: 'status', label: 'Status', options: STATUS },
    { type: 'range', label: 'Price Range', keys: ['minPrice', 'maxPrice'] },
  ]

  return (
    <>
      <Hero
        img={unitImg}
        heading="Where Visionary Design Meets Daily Life"
        parg="Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world"
        bucon="Explore"
        but={false}
        vector={true}
      />

      <section className="py-16">
        <FilterBar fields={fields} onSearch={load} />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        {state === 'loading' && <p className="text-center text-gray-500">Loading...</p>}
        {state === 'error' && <p className="text-center text-red-600">Could not load units. Please try again.</p>}
        {state === 'ready' && !units.length && <p className="text-center text-gray-500">No units found.</p>}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {state === 'ready' && units.map((u) => <UnitCard key={u.id} unit={u} />)}
        </div>
      </section>
    </>
  )
}