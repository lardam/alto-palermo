import '../styles/styles.scss'
import Head from 'next/head'
import { Header } from '../components/Header.jsx'
import { Menu } from '../components/BubbleMenu.jsx'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return(
        <>
          <Head>
            <title>Alto Palermo</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="icon" href="/favicon.ico"/>
          </Head>
          <Header />
          <Component {...pageProps} />
          <Menu />
        </>
)}

export default MyApp
