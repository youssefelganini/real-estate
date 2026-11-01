import React from 'react'
import Hero from '../../components/Hero'
import devImg from '../../assets/dev.png'
import useGet from '../../helpers/useGet'
import { toList, pick } from '../../helpers/unitsApi'
import DeveloperCard from '../../components/DeveloperCard'
import Status from '../../components/Status'

export default function Developers() {
    const [data, state] = useGet('/developer')
    const developers = toList(data)

    return (
        <>
            <Hero
                img={devImg}
                heading="Defining the Future Skyline."
                parg="Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."
                bucon="Explore"
                but={false}
                vector={true}
            />

            <section className="mx-auto max-w-[1400px] px-6 py-16">
                <Status state={state} empty={state === 'ready' && !developers.length} />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {developers.map((d) => (
                        <DeveloperCard
                            key={d.id}
                            item={d}
                            to={`/developers/${d.id}`}
                            badge={pick(d, 'city') || pick(d.projects?.[0]?.zone, 'city')}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}