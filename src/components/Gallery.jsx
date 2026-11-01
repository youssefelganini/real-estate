import { useState } from 'react'
import { imgUrl } from '../helpers/unitsApi'
import placeholder from '../assets/placeholder.png'

export default function Gallery({ images = [], alt = '' }) {
  const [a, setA] = useState(0)
  const imgs = (images.length ? images : [null]).map((i) => imgUrl(i) || placeholder)
  return (
    <>
      <img src={imgs[a]} alt={alt} className="h-[300px] w-full rounded-2xl object-cover shadow-lg md:h-[540px]" />
      {imgs.length > 1 && (
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {imgs.map((s, i) => (
            <img
              key={i}
              src={s}
              onClick={() => setA(i)}
              className={`h-32 w-full cursor-pointer rounded-lg object-cover shadow-md md:h-44 ${i === a ? 'ring-2 ring-[#8B1A1A]' : ''}`}
            />
          ))}
        </div>
      )}
    </>
  )
}