import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { CartContext, CartProvider } from '../components/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-[#efecec]">
      <CartProvider>
        <NavBar />
          <Component {...pageProps} />
        <Footer />

    </CartProvider>
    </main>

  )
}
