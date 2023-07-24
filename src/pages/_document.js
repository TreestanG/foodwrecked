import { Html, Head, Main, NextScript } from 'next/document'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import News from './components/News'

export default function Document() {
    return (
        <Html lang="en">
            <News />
            <Head />
            <body>
                <Header />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}