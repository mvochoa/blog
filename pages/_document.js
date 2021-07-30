import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getAllSlugPages } from '@/lib/markdown'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const posts = getAllSlugPages(['slug', 'title', 'date'], '_blog')
    return { ...initialProps, posts }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="antialiased text-black bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
