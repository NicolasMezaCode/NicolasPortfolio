import '../styles/globals.css'
import 'the-new-css-reset/css/reset.css'
import Header from './components/Header'
export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>Nicolas Meza</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nicolas Meza's personal website" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
