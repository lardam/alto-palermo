import '/styles/styles.scss'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Alto Palermo</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico"/>
        <script src="https://kit.fontawesome.com/0d4a85bfb9.js" crossOrigin="anonymous"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
