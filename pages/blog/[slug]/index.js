import ReactMarkdown from 'react-markdown'

import { getAllSlugPages, getPageContentBySlug } from '@/lib/markdown'
import { getStaticPropsSuper } from '@/lib/super'

export async function getStaticProps(ctx) {
  const { slug } = ctx.params
  const page = getPageContentBySlug(slug, ['title', 'summary', 'content'], '_blog')
  return {
    props: {
      meta: page,
      content: page.content,
      ...(await getStaticPropsSuper(ctx)).props,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllSlugPages(['slug'], '_blog')
  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
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
