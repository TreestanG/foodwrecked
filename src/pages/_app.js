import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { SideBarNavProvider } from './context/SideNavTabContext'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

const theme = createTheme({

})

config.autoAddCss = false

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const getLayout = Component.getLayout || ((page) => page)

  return <>
    <SessionProvider session={session}>
      <MantineProvider theme={theme}>
        <Notifications />
        <Head>
          <title>Food Wrecked</title>
        </Head>
        {
          getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </SessionProvider>
  </>

}