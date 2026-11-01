import React, { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaMobileAlt, FaPhoneAlt, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Hero from '../../components/Hero'
import contcImg from '../../assets/contc.png'
import api from '../../helpers/api'

const INFO = [
    [FaMapMarkerAlt, 'Minusio, Lake Maggiore, Switzerland — ref. LOC1771'],
    [FaEnvelope, 'Grand.Atlas.Support@gmail.com'],
    [FaMobileAlt, '01247859622'],
    [FaPhoneAlt, '035987124'],
]
const SOCIAL = [
    [FaFacebookF, '#'],
    [FaXTwitter, '#'],
    [FaInstagram, '#'],
    [FaTiktok, '#'],
]
const DAYS = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday']
const HOURS = '9:00AM - 5:00 PM'
const FIELDS = [
    ['name', 'Name', 'text', true],
    ['email', 'Email', 'email', true],
    ['phone', 'Phone', 'tel', false],
]


const input = 'w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 outline-none focus:border-[#8B1A1A]'
const serif = 'font-serif'

export default function Contactus() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
    const [status, setStatus] = useState({ type: '', text: '' })
    const [sending, setSending] = useState(false)

    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

    const submit = async (e) => {
        e.preventDefault()
        setSending(true)
        setStatus({ type: '', text: '' })
        try {
            await api.post('/contactus', form)
            setStatus({ type: 'ok', text: 'Thank you! Your message has been sent.' })
            setForm({ name: '', email: '', phone: '', message: '' })
        } catch (error) {
            console.log('Error', error)
            setStatus({ type: 'err', text: 'Could not send your message. Please try again.' })
        } finally {
            setSending(false)
        }
    }

    return (
        <>
            <Hero
                img={contcImg}
                heading="Connected Globally. Available Locally."
                parg="With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory."
                bucon="Explore"
                but={false}
                vector={false}
            />

            <section className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 lg:grid-cols-2">
                <div>
                    <h2 className={`${serif} text-3xl font-bold text-gray-900`}>Contact Information</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Our team is available for private consultations and off-market inquiries. We operate with absolute
                        discretion to ensure your real estate objectives are met with precision.
                    </p>

                    <ul className="mt-8 space-y-4 text-lg text-[#8B1A1A]">
                        {INFO.map(([Icon, text]) => (
                            <li key={text} className="flex items-center gap-3">
                                <Icon /> {text}
                            </li>
                        ))}
                    </ul>

                    <h3 className={`${serif} mt-10 text-xl font-semibold text-gray-500`}>Follow us on social media</h3>
                    <div className="mt-4 flex gap-4">
                        {SOCIAL.map(([Icon, href], i) => (
                            <a key={i} href={href} className="flex size-10 items-center justify-center rounded-full border-2 border-[#8B1A1A] text-[#8B1A1A] transition hover:bg-[#8B1A1A] hover:text-white">
                                <Icon />
                            </a>
                        ))}
                    </div>

                    <h3 className={`${serif} mt-10 text-xl font-semibold text-gray-500`}>Working Hours</h3>
                    <dl className="mt-4 space-y-2 text-lg">
                        {DAYS.map((d) => (
                            <div key={d} className="flex">
                                <dt className="w-36 text-[#8B1A1A]">{d} :</dt>
                                <dd className="text-gray-500">{HOURS}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <form onSubmit={submit} className="rounded-3xl bg-white p-8 shadow-[0_4px_14px_rgba(0,0,0,0.2)]">
                    <h2 className={`${serif} text-2xl font-bold text-gray-900`}>Send us a message</h2>

                    {FIELDS.map(([key, label, type, required]) => (
                        <label key={key} className={`${serif} mt-6 block`}>
                            {label}
                            <input type={type} required={required} value={form[key]} onChange={set(key)} className={`${input} mt-2`} />
                        </label>
                    ))}

                    <label className={`${serif} mt-6 block`}>
                        Message
                        <textarea required rows={5} value={form.message} onChange={set('message')} className={`${input} mt-2 resize-none`} />
                    </label>

                    {status.text && (
                        <p className={`mt-4 text-sm ${status.type === 'ok' ? 'text-green-600' : 'text-red-600'}`}>{status.text}</p>
                    )}

                    <button
                        type="submit"
                        disabled={sending}
                        className={`${serif} mt-8 w-full rounded bg-gradient-to-r from-[#8B1A1A] to-[#C24A4A] py-3 text-lg font-semibold text-white disabled:opacity-60`}
                    >
                        {sending ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </section>
        </>
    )
}