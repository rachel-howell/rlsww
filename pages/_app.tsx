import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '@/components/NavBar'
import { CartContext, CartProvider } from '../components/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <CartProvider>
        <NavBar />
      <Component {...pageProps} />
    </CartProvider>
    </main>

  )
}
