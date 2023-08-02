import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import News from './components/News'
import Header from './components/Header'
config.autoAddCss = false

export default function MyApp({
  Component, 
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Food Wrecked</title>
      </Head>
      <News />
      <Header/>
      <Component {...pageProps} />

    </SessionProvider>
  )
}