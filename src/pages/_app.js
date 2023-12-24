import './globals.css'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import Header from './components/Header';

const theme = createTheme({

})


export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const getLayout = Component.getLayout || ((page) => page)
  const Layout = getLayout(
    <div className="overflow-y-auto">
      {Component.getLayout ? null : <Header />}
        <Component {...pageProps} />
    </div>
  )

  return (
    <>
      <SessionProvider session={session}>
        <MantineProvider theme={theme}>
          <Head>
            <title>Food Wrecked</title>
          </Head>
          <Notifications />
          {Layout}
        </MantineProvider>
      </SessionProvider>
    </>
  )
}