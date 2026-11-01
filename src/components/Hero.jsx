import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'


const SOCIAL = [
  [FaFacebookF, '#', 'Facebook'],
  [FaXTwitter, '#', 'X'],
  [FaInstagram, '#', 'Instagram'],
  [FaTiktok, '#', 'TikTok'],
]

export default function Hero({ img, heading, parg, bucon, but, vector }) {
  return (
    <div
      className="relative flex h-screen flex-col items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1 className="text-5xl w-140 font-bold mb-8 leading-16 text-center">{heading}</h1>

      <p className="text-lg font-bold w-247 text-[#CEC7C7] mb-12 text-center">{parg}</p>

      {but && (
        <button className="w-64.5 py-2 text-[#EEEEEE] font-bold bg-linear-to-r from-[#8E1616] to-[#C34B4B]">
          {bucon}
        </button>
      )}

      {vector && (
        <div className="absolute bottom-[59px] left-9 z-10 flex flex-col gap-4">
          {SOCIAL.map(([Icon, href, label]) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="flex size-10 items-center justify-center rounded-full border border-white text-lg text-white transition hover:bg-white hover:text-[#8B1A1A]"
            >
              <Icon />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}