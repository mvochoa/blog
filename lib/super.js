import { getAllSlugPages } from '@/lib/markdown'

export async function getStaticPropsSuper(ctx) {
  const posts = getAllSlugPages(['slug', 'title', 'date'], '_blog')
  return {
    props: {
      posts,
    },
  }
}
