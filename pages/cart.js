import CartComponent from "../components/CartComponent";
import Head from "next/head";

export default function CartPage() {
  return (
    <div>
        <Head>
            <title>Cart</title>
            <meta name="description" content="User's shopping cart" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <CartComponent />
        </main>
    </div>
  );
}
