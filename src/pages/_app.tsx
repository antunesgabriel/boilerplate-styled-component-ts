import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next App Boilerplate</title>
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          href="/img/favicon.ico"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="A simple project starter to work Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
