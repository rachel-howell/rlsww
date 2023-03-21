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
        <main className="flex flex-col">
            <h1 className="text-5xl">Pricing</h1>
            <p className="text-xl">As a solo watchmaker, I offer bespoke services that are tailored to your specific needs. From modifying your current timepieces to creating entirely new designs, I take a hands-on approach to every project and ensure that each piece I craft is of the highest quality. With a passion for precision and an eye for detail, I am dedicated to delivering timepieces that not only look stunning but also perform flawlessly. You can trust me to handle your watches with the care and attention they deserve.</p>
            <p>
            <p>Bezel Swap: $65 (includes swapping of insert upon request)</p>
            <p>Bezel Insert Swap: $65 (additional $5 if adhesive ring is not provided)</p>
            <p>Crystal Swap: $65 (additional $10 if new gasket is needed and not provided, includes chapter ring swapping if requested)</p>
            <p>Chapter Ring Swap: $65 (additional $10 if new crystal gasket is needed and not provided, included at no charge if requested during a crystal swap)</p>
            <p>Caseback Swap: $20 (includes new caseback gasket)</p>
            <p>Handset and/or Dial Swap: $65 (additional $20 if day and/or date wheel swap is requested, additional fee of $10 if dial adhesive is needed)</p>
            <p>Second Hand Only Swap: $20</p>
            <p>Day and/or Date Wheel Swap: $85 (includes labor for handset and/or dial swapping if requested)</p>
            <p>Movement Swap: $160 (additional $20 if the correct day wheel is not provided, includes swapping of dial holder/movement spacer ring, day and/or day wheel, dial, handset, crown, and cutting and fitting of stem)</p>
            <p>Custom Fit Crown Swap: $50 (includes cutting and fitting of stem)</p>
            <p>Wet Pressure Testing: $40</p>
            <p>Movement Regulation for Improved Accuracy: $40</p>
            <p>Full Build Assembly using Client Provided Parts and Gaskets: $225 (includes movement regulation and pressure testing if requested)</p>
            </p>
        </main>
        </div>
    );
  }
