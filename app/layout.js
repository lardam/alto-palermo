'use client'
import '/styles/styles.scss'
import { Header } from "./components/Header"
import { Menu } from './components/BubbleMenu'

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <head>
        <title>Alto Palermo</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico"/>
        <script src="https://kit.fontawesome.com/0d4a85bfb9.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        <Header />
        {children}
        <Menu />
      </body>
    </html>
  )
}
