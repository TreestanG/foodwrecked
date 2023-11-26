import './globals.css'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { ActiveIndexProvider } from './context/ActiveIndexContext'

const theme = createTheme({

})


export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const getLayout = Component.getLayout || ((page) => page)

  return <>
    <SessionProvider session={session}>
      <MantineProvider theme={theme}>
        <Head>
          <title>Food Wrecked</title>
        </Head>
        <ActiveIndexProvider>
          {getLayout(<Component {...pageProps} />)}
        </ActiveIndexProvider>
        <Notifications />

      </MantineProvider>
    </SessionProvider>
  </>

}