import { useState } from 'react'
import classnames from 'classnames'
import Link from '@/components/Link'

import { SearchIcon, XIcon } from '@heroicons/react/solid'

import { formatDate } from '@/lib/utils/time'
import usePosts from '@/hooks/usePosts'

export default function SearchBox({ className }) {
  const { searchPost } = usePosts()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [posts, setPosts] = useState([])

  function handleClose() {
    setValue('')
    setOpen(false)
  }

  function handleChange(event) {
    const newValue = event.target.value
    setValue(newValue)
    setPosts(searchPost({ title: newValue }))
  }

  if (!open) {
    return <SearchIcon onClick={() => setOpen(true)} className="h-5 w-5 mr-4 text-gray-500" />
  }

  return (
    <>
      <div className={classnames(className, 'relative pt-2 sm:pt-0')}>
        <div
          className={classnames('relative z-10 bg-white', {
            'shadow rounded-md': value === '',
          })}
        >
          <input
            type="text"
            placeholder="Buscar articulos..."
            className={classnames('outline-none font-normal w-full pl-2 pr-10 py-2 rounded-md')}
            value={value}
            onChange={handleChange}
          />
          <div className="absolute right-3 top-3">
            <XIcon onClick={handleClose} className="w-5 h-5 text-gray-400 dark:text-gray-300" />
          </div>
        </div>
        {value !== '' && (
          <div className="absolute z-0 top-0 pt-10 pb-2 w-full bg-white shadow rounded-md">
            <div className="divide-y overflow-y-auto max-h-32">
              {value.length > 3 && posts.length === 0 && (
                <p className="text-sm font-normal px-2 pt-1 italic text-gray-700">
                  No se encontro ningun articulo
                </p>
              )}
              {posts.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`}>
                  <div className="px-2 py-1">
                    <p className="text-sm font-normal text-gray-900">{post.title}</p>
                    <p className="text-xs font-light text-gray-400">{formatDate(post.date)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
