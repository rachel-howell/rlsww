import Head from 'next/head'

export default function Warranty() {
    return (
        <div>
          <Head>
              <title>Warranty</title>
              <meta name="warranty" content="Warranty information for purchased watches" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <h1>Warranty & Disclaimer</h1>
            <p>All modification works and custom builds are covered against workmanship defects for 6 months.</p>

            <p>Although very rare, if I’ve made a mistake, I’ll make sure to make it right.</p>

            <p>This does not cover the integrity of customer supplied parts, misuse, physical damage or water damage of any kind.</p>
          </main>
        </div>
    );
  }
