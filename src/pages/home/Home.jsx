import React, { useRef, useState } from 'react'
import { FiHome, FiSmile, FiSettings } from 'react-icons/fi'
import { BiDollarCircle } from 'react-icons/bi'
import { HiArrowRight } from 'react-icons/hi'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import heroImg from '../../assets/hero.png'
import homeim from '../../assets/home.png'
import homeim0 from '../../assets/home2.png'
import homeim3 from '../../assets/home3.png'
import homeim4 from '../../assets/home4.png'
import palm from '../../assets/palm.png'
import palmlogo from '../../assets/palmlogo.png'
import hayah from '../../assets/Hayah.png'
import hayahlogo from '../../assets/hayahlogo.png'
import palm2 from '../../assets/palm2.png'








const stats = [
  { icon: <FiHome />, value: '48', label: 'Properties Managed' },
  { icon: <BiDollarCircle />, value: '90M', label: 'Total Managed Investments' },
  { icon: <FiSmile />, value: '500', label: 'Happy Clients' },
  { icon: <FiSettings />, value: '99%', label: 'Client Satisfaction' },
]

const masterpieces = [
  { img: homeim0, title: '01. Palm Hills Office No.3' },
  { img: homeim3, title: '02. Hacienda Duplex No.4' },
  { img: homeim4, title: '03. Sawary Family Villa' },
]

const landmarks = [
  { img: palm, logo: palmlogo},
  { img:hayah, logo:hayahlogo, name: 'Hayah City', sub: 'Hayah Development' },
  { img: palm, logo:palmlogo},
]

function SectionTitle({ children }) {
  return (
    <div className="text-center mb-10">
      <h2 className="font-serif text-2xl font-bold mb-2">{children}</h2>
      <span className="block w-32 h-0.75 bg-[#C34B4B] mx-auto rounded" />
    </div>
  )
}

function Carousel({ children }) {
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const items = React.Children.toArray(children)

  const step = () => ref.current.children[0].offsetWidth + 20
  const onScroll = () => setActive(Math.round(ref.current.scrollLeft / step()))
  const goTo = (i) => ref.current.scrollTo({ left: i * step(), behavior: 'smooth' })

  return (
    <>
      <div
        ref={ref}
        onScroll={onScroll}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <div key={i} className="snap-start shrink-0 w-[85%] md:w-[32%]">
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === active ? 'w-9 bg-[#8E1616]' : 'w-2.5 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Hero
        img={heroImg}
        heading="Redefining the Horizon of Modern Luxury Living"
        parg="We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"
        bucon="Explore"
        but={true}
        vector={true}
      />

      {/* Benchmarks */}
      <section className="max-w-300 mx-auto px-6 py-16">
        <SectionTitle>Benchmarks of Success</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-lg py-5 px-3 text-center shadow-md">
              <div className="text-[#8E1616] text-3xl flex justify-center">{s.icon}</div>
              <strong className="block text-xl mt-2">{s.value}</strong>
              <p className="text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-300 mx-auto px-6 py-16">
        <SectionTitle>About Grand Atlas</SectionTitle>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={homeim}
            alt="Grand Atlas"
            className="w-full h-105 object-cover border-[3px] border-[#8E1616] rounded-tl-[70px] rounded-br-[70px]"
          />
          <div>
            <p className="leading-7 mb-4">
              We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm.
            </p>
            <p className="leading-7 mb-6">
              We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.
            </p>
            <button className="flex items-center gap-2 px-6 py-2 text-[#EEEEEE] font-bold bg-linear-to-r from-[#8E1616] to-[#C34B4B] rounded">
              Know More <HiArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Hand-Selected Masterpieces */}
      <section className="max-w-300 mx-auto px-6 py-16">
        <SectionTitle>Hand-Selected Masterpieces</SectionTitle>
        <Carousel>
          {masterpieces.map((it) => (
            <div key={it.title}>
              <img src={it.img} alt={it.title} className="w-full h-52 object-cover rounded-lg shadow-md" />
              <h4 className="font-serif font-bold mt-3">{it.title}</h4>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Strategic Locations */}
      <section className="py-16">
        <SectionTitle>Strategic Locations</SectionTitle>
        <iframe
          title="Strategic Locations"
          loading="lazy"
          className="w-full h-85 border-0"
          src="https://www.google.com/maps?q=Cairo,Egypt&z=7&output=embed"
        />
      </section>

      {/* Future Landmarks */}
      <section className="max-w-300 mx-auto px-6 py-16">
        <SectionTitle>Future Landmarks</SectionTitle>
        <Carousel>
          {landmarks.map((it, i) => (
            <div key={i} className="bg-white rounded-lg p-2.5 shadow-md">
              <div className="relative">
                <img src={it.img} alt={it.name} className="w-full h-52 object-cover rounded-md" />
                <span className="absolute top-2 right-2 bg-[#8E1616] text-white text-xs px-3 py-1 rounded-sm">
                  New Cairo
                </span>
              </div>
              <div className="flex items-center gap-3 my-4 px-1">
                <img src={it.logo} alt="" className="w-30 h-20 object-contain" />
                <div className="leading-tight">
                  <b className="block text-sm">{it.name}</b>
                  <small className="text-xs text-gray-500">{it.sub}</small>
                </div>
              </div>
              <button className="w-full py-1.5 text-sm text-[#8E1616] border border-[#8E1616] rounded-sm">
                View Details
              </button>
            </div>
          ))}
        </Carousel>
      </section>
    </>
  )
}