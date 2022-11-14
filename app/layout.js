import '/styles/styles.scss'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Alto Palermo</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
