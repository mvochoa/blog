import 'tailwindcss/tailwind.css'

import Header from '@/components/Header'

export default function LayoutWrapper({ children }) {
  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <Header />
      <main>{children}</main>
    </div>
  )
}
