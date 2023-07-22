import './globals.css'
import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home - Food Wrecked</title>
      </Head>
      <Component {...pageProps} />

    </>
  )
}