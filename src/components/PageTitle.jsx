export default function PageTitle({ children }) {
  return (
    <div className="py-10 text-center">
      <h1 className="inline-block border-b-4 border-[#B23A3A] px-6 pb-2 font-serif text-3xl font-bold text-gray-900">{children}</h1>
    </div>
  )
}