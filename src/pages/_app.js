import { Manjari } from 'next/font/google'
import Navbar from '../Components/Navbar'
 
const manjari = Manjari({
  weight: ['100','400'],
  subsets: ['latin'],
})
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={manjari.className}>
      <Navbar/>
      <Component {...pageProps} />
    </main>
  )
}