import React from 'react'
import Hero from '../../components/Hero'
import zoneImg from '../../assets/zones.png'
import useGet from '../../helpers/useGet'
import { toList } from '../../helpers/unitsApi'
import { ImageTile } from '../../components/InfoCard'
import Status from '../../components/Status'

export default function Zone() {
    const [data, state] = useGet('/zone')
    const zone = toList(data)

    return (
        <>
            <Hero 
            img={zoneImg}
            heading="Destinations Defined by Distinction"
            parg="From the quiet pulse of the shoreline to the vibrant energy of
             the metropolitan center, explore our guide to the neighborhoods 
             that mirror your ambition and your aesthetic."
            bucon="Explore"
            but={false}
            vector={true}
            />

            <section className="mx-auto max-w-[1400px] px-6 py-16">
                <Status state={state} empty={state === 'ready' && !zone.length} />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {zone.map((z) => (
                        <ImageTile key={z.id} item={z} to={`/zones/${z.id}`} />
                    ))}
                </div>
            </section>
        </>
    )
}