export const BASE_URL = 'https://white-seahorse-266682.hostingersite.com/api/v1'
export const LANG = 'en' 
export const CONTACT = { phone: '+201000000000', whatsapp: '201000000000' }

export const pick = (o, k) => o?.[`${k}_${LANG}`] ?? o?.[k] ?? ''

export const imgUrl = (i) => {
  const s = typeof i === 'string' ? i : i?.url || i?.path || ''
  return !s ? '' : /^https?:/.test(s) ? s : `${BASE_URL.replace('/api/v1', '')}/${s.replace(/^\//, '')}`
}

export const egp = (n) => `${Number(n || 0).toLocaleString()}EGP`

export const toList = (x) => (Array.isArray(x) ? x : Object.values(x || {}).find(Array.isArray) || [])

export async function api(path, params = {}) {
  const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v !== '' && v != null)).toString()
  const res = await fetch(`${BASE_URL}${path}${qs ? `?${qs}` : ''}`)
  if (!res.ok) throw new Error(`Request failed (${res.status})`)
  const json = await res.json()
  return json?.data ?? json
}