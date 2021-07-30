import { useContext } from 'react'

import PostContext from '@/contexts/PostContext'

export default function usePosts() {
  const posts = useContext(PostContext)

  function searchPost({ title }) {
    if (!posts || !title || title.trim().length < 3) {
      return []
    }
    return posts.filter((i) => i.title.toLowerCase().includes(title.trim().toLowerCase()))
  }

  return { posts, searchPost }
}
