import { Html, Head, Main, NextScript } from 'next/document'
import { Inter } from 'next/font/google'
import Header from './components/Header'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}