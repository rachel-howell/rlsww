import Head from 'next/head'

export default function Listings() {
    return (
        <div>
        <Head>
            <title>RLSWW Service</title>
            <meta name="description" content="Service options available for existing watches" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <h1>Pricing</h1>
            <p>As a solo watchmaker, I offer bespoke services that are tailored to your specific needs. From modifying your current timepieces to creating entirely new designs, I take a hands-on approach to every project and ensure that each piece I craft is of the highest quality. With a passion for precision and an eye for detail, I am dedicated to delivering timepieces that not only look stunning but also perform flawlessly. You can trust me to handle your watches with the care and attention they deserve.</p>
            <p>
            Bezel Swap: $65 (includes swapping of insert upon request)
            Bezel Insert Swap: $65 (additional $5 if adhesive ring is not provided)
            Crystal Swap: $65 (additional $10 if new gasket is needed and not provided, includes chapter ring swapping if requested)
            Chapter Ring Swap: $65 (additional $10 if new crystal gasket is needed and not provided, included at no charge if requested during a crystal swap)
            Caseback Swap: $20 (includes new caseback gasket)
            Handset and/or Dial Swap: $65 (additional $20 if day and/or date wheel swap is requested, additional fee of $10 if dial adhesive is needed)
            Second Hand Only Swap: $20
            Day and/or Date Wheel Swap: $85 (includes labor for handset and/or dial swapping if requested)
            Movement Swap: $160 (additional $20 if the correct day wheel is not provided, includes swapping of dial holder/movement spacer ring, day and/or day wheel, dial, handset, crown, and cutting and fitting of stem)
            Custom Fit Crown Swap: $50 (includes cutting and fitting of stem)
            Wet Pressure Testing: $40
            Movement Regulation for Improved Accuracy: $40
            Full Build Assembly using Client Provided Parts and Gaskets: $225 (includes movement regulation and pressure testing if requested)
            </p>
        </main>
        </div>
    );
  }
