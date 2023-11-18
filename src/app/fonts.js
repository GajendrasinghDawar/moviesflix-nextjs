import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const logoFont = localFont({
    src: './Agbalumo-Regular.ttf',
    display: 'swap',
})