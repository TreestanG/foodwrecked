'use client;'

import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { SideBarNavProvider } from './context/SideNavTabContext'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import Header from './components/Header'
config.autoAddCss = false
import { useEffect } from 'react'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {

  useEffect(() => {
    import('preline')
  }, [])
  const getLayout = Component.getLayout || ((page) => {
    return (
      <SessionProvider session={session}>
        <div className="h-max">
          <Header />
          <main className="relative">
            {page}
          </main>
        </div>
      </SessionProvider>
    )
  })

  return getLayout(
    <SessionProvider session={session}>
      <SideBarNavProvider>
        <Head>
          <title>Food Wrecked</title>
        </Head>
        <Component {...pageProps} />
      </SideBarNavProvider>
    </SessionProvider>
  )
}