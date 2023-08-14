import { Manjari } from 'next/font/google'
 
const manjari = Manjari({
  weight: ['100','400'],
  subsets: ['latin'],
})
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={manjari.className}>
      <Component {...pageProps} />
    </main>
  )
}