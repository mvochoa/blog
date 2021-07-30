import Head from 'next/head'

import '@/css/tailwind.css'
import LayoutWrapper from '@/components/LayoutWrapper'

import PostContext from '@/contexts/PostContext'
import { getStaticPropsSuper } from '@/lib/super'

export async function getStaticProps(ctx) {
  return await getStaticPropsSuper(ctx)
}

export default function App({ Component, pageProps: { posts = [], ...rest } }) {
  return (
    <PostContext.Provider value={posts}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...rest} />
      </LayoutWrapper>
    </PostContext.Provider>
  )
}
