import Head from "next/head";
import WatchBuilder from "../components/WatchBuilder";

export default function CartPage() {
  return (
    <div>
        <Head>
            <title>Build Custom Mod</title>
            <meta name="description" content="User's shopping cart" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <WatchBuilder />
        </main>
    </div>
  );
}
