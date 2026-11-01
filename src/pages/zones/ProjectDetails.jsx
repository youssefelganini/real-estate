import React from 'react'
import { useParams } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'
import useGet from '../../helpers/useGet'
import { toList, pick, imgUrl } from '../../helpers/unitsApi'
import PageTitle from '../../components/PageTitle'
import Gallery from '../../components/Gallery'
import UnitCard from '../../components/UnitCard'
import Status from '../../components/Status'

export default function ProjectDetails() {
    const { id } = useParams()
    const [data, state] = useGet(`/projects/${id}`)
    const p = data?.project ?? data
    const name = pick(p, 'name')

    const [dev] = useGet(p && !p.developer && p.developerId ? `/developer/${p.developerId}` : null)
    const [zon] = useGet(p && !p.zone && p.zoneId ? `/zone/${p.zoneId}` : null)
    const [uData] = useGet(name ? '/unit' : null, { projectName: name })

    const developer = p?.developer ?? dev?.developer ?? dev
    const zone = p?.zone ?? zon?.zone ?? zon
    const units = toList(uData)
    const logo = imgUrl(developer?.images?.[0])
    const location = [pick(zone, 'city'), pick(zone, 'name')].filter(Boolean).join(', ')

    // add/remove rows here; empty values are hidden automatically
    const glance = [
        ['Units', uData ? units.length : ''],
        ['Zone', pick(zone, 'name')],
        ['City', pick(zone, 'city')],
        ['Developer', pick(developer, 'name')],
    ].filter(([, v]) => v !== '' && v != null)

    if (state !== 'ready') return <Status state={state} />

    return (
        <section className="mx-auto max-w-[1400px] px-6 pb-20">
            <PageTitle>{name} Project</PageTitle>
            <Gallery key={id} images={p.images} alt={name} />

            <div className="mt-12 flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-[#8B1A1A] md:text-4xl">{name}</h2>
                    {location && (
                        <p className="mt-2 flex items-center gap-2 text-gray-500">
                            <FaMapMarkerAlt /> {location}
                        </p>
                    )}
                </div>
                {logo
                    ? <img src={logo} alt={pick(developer, 'name')} className="h-16 object-contain" />
                    : <span className="font-semibold text-gray-500">{pick(developer, 'name')}</span>}
            </div>

            <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.5fr]">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900">At a glance</h3>
                    <ul className="mt-6 list-disc space-y-4 pl-6 text-xl text-gray-500 marker:text-gray-400">
                        {glance.map(([k, v]) => (
                            <li key={k}>{k}: {v}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Overview</h3>
                    <p className="mt-6 whitespace-pre-line text-xl leading-9 text-gray-500">{pick(p, 'description')}</p>
                </div>
            </div>

            {units.length > 0 && (
                <>
                    <PageTitle>Units</PageTitle>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {units.map((u) => (
                            <UnitCard key={u.id} unit={u} />
                        ))}
                    </div>
                </>
            )}
        </section>
    )
}