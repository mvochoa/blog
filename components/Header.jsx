import Link from '@/components/Link'

import SearchBox from '@/components/SearchBox'

export default function Header() {
  return (
    <header className="pt-4">
      <div className="flex flex-wrap justify-between items-center mb-8">
        <Link href="/">
          <div className="flex items-center">
            <div
              className="inline-block bg-center rounded-full"
              style={{
                backgroundImage: `url('/images/logo.svg')`,
                backgroundColor: '#3f97a8',
                backgroundSize: '95% auto',
                width: '50px',
                height: '50px',
              }}
            />
            <p className="font-mono font-normal text-xl ml-4">Mvochoa</p>
          </div>
        </Link>
        <SearchBox className="w-full sm:w-auto" />
      </div>
    </header>
  )
}
