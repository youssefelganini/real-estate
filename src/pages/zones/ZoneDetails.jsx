import React from 'react'
import { useParams } from 'react-router-dom'
import { FaBuilding } from 'react-icons/fa'
import useGet from '../../helpers/useGet'
import { toList, imgUrl } from '../../helpers/unitsApi'
import PageTitle from '../../components/PageTitle'
import InfoCard from '../../components/InfoCard'
import Status from '../../components/Status'
import placeholder from '../../assets/placeholder.png'

export default function ZoneDetails() {
    const { id } = useParams()
    const [data, state] = useGet(`/zone/${id}`)
    const z = data?.zone ?? data
    const [all, allState] = useGet(z && !z.projects ? '/projects/all-projects' : null)
    const projects = z?.projects ?? toList(all).filter((p) => p.zoneId === id)

    return (
        <section className="mx-auto max-w-[1400px] px-6 pb-20">
            <PageTitle>Zone Projects</PageTitle>
            <img
                src={imgUrl(z?.images?.[0]) || placeholder}
                className="h-[260px] w-full rounded-2xl object-cover shadow-lg md:h-[410px]"
            />

            <div className="mt-12">
                <Status state={state} empty={state === 'ready' && allState !== 'loading' && !projects.length} />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => {
                        const n = p.units?.length ?? p._count?.units ?? p.unitsCount
                        return (
                            <InfoCard
                                key={p.id}
                                item={p}
                                to={`/projects/${p.id}`}
                                stats={n != null ? [[FaBuilding, `${n} Units`]] : []}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}