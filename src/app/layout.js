import '../styles/globals.css'
import 'the-new-css-reset/css/reset.css'
import Header from './components/Header'
export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
