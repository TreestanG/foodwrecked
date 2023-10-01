import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { SideBarNavProvider } from './context/SideNavTabContext'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import Header from './components/Header'
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core'

const theme = createTheme({

})



config.autoAddCss = false

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <SessionProvider session={session}>
      <MantineProvider theme={theme}>
        <SideBarNavProvider>
          <Head>
            <title>Food Wrecked</title>
          </Head>
          <Component {...pageProps} />
        </SideBarNavProvider>
      </MantineProvider>
    </SessionProvider>
  )
}