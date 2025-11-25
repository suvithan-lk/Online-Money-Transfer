import './globals.css'
import HeadLinks from './components/HeadLinks'
import ScriptLoader from './components/ScriptLoader'

export const metadata = {
  title: 'Ajeer Money Transfer',
  description: 'International Currency Transfer Provider',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="theme-light">
      <head>
        <HeadLinks />
      </head>
      <body>
        {children}
        <ScriptLoader />
      </body>
    </html>
  )
}