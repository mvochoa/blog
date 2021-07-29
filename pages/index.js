import Link from 'next/link'

import { getAllSlugPages } from '@/lib/markdown'

export async function getStaticProps({ params }) {
  const posts = getAllSlugPages(['slug', 'title'], '_blog')
  return {
    props: {
      posts,
    },
  }
}

export default function IndexPage({ posts }) {
  return (
    <>
      <ul>
        {posts.map((item, index) => (
          <li key={index}>
            <Link href={`/blog/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
