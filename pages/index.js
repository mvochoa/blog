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

export default function IndexPage() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        <img src="/images/stop.png" style={{ height: "80%" }} />
      </div>
    </>
  )
}
