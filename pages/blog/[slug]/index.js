import ReactMarkdown from 'react-markdown'

import { getAllSlugPages, getPageContentBySlug } from '@/lib/markdown'

export async function getStaticProps({ params }) {
  const { slug } = params
  const page = getPageContentBySlug(slug, ['title', 'summary', 'content'], '_blog')
  return {
    props: {
      meta: page,
      content: page.content,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllSlugPages(['slug'], '_blog')
  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
      txt: 'index',
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export default function Blog({ content }) {
  return (
    <>
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  )
}
