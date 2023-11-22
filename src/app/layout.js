import './globals.css'

import { Navbar } from 'components/NavBar'
import { Footer } from 'components/Footer'
import { inter } from './fonts'


export const metadata = {
  title: 'moviesflix',
  description: 'movies flix is a website where you can watch movies and tv trailers for free',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className='flex flex-col  h-screen relative '>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
