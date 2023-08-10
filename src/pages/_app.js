import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { SideBarNavProvider } from './context/SideNavTabContext'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import Header from './components/Header'
config.autoAddCss = false

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const getLayout = Component.getLayout || ((page) => page)
  if (Component.getLayout) {
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
  } else {
    return (
      <SessionProvider session={session} className="">
        <Head>
          <title>Food Wrecked</title>
        </Head>
        <div className="h-max">
          <Header />
          <main className="relative ">
            <Component {...pageProps} />
          </main>
        </div>

      </SessionProvider>

    )
  }
}