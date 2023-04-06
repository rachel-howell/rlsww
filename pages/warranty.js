import Head from 'next/head'

export default function Warranty() {

  const customStyle = {
    minHeight: '70vh'
  }

    return (
        <div style={customStyle}>
          <Head>
              <title>Warranty</title>
              <meta name="warranty" content="Warranty information for purchased watches" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="flex flex-col items-center text-center mt-5 min-h-max">
            <h1 className="text-5xl">Warranty & Disclaimer</h1>
            <p className="text-2xl mt-5">All modification works and custom builds are covered against workmanship defects for 6 months.</p>

            <p className="text-2xl mt-3">Although very rare, if I’ve made a mistake, I’ll make sure to make it right.</p>

            <p className="text-2xl mt-3">This does not cover the integrity of customer supplied parts, misuse, physical damage or water damage of any kind.</p>
          </main>
        </div>
    );
  }
