export default function Status({ state, empty }) {
  if (state === 'loading') return <p className="py-16 text-center text-gray-500">Loading...</p>
  if (state === 'error') return <p className="py-16 text-center text-red-600">Could not load data. Please try again.</p>
  return empty ? <p className="py-16 text-center text-gray-500">Nothing found.</p> : null
}