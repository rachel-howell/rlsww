import Head from 'next/head'
import ServiceCalculator from '../components/ServiceCalculator'

export default function Listings() {

    const services = [
        { title: "Bezel Swap", price: "65", description: "Includes swapping of insert upon request."},
        { title: "Bezel Insert Swap", price: "65", description: "Additional $5 if adhesive ring is not provided."},
        { title: "Crystal Swap", price: "65", description: "Additional $10 if new gasket is needed and not provided. Includes chapter ring swapping if requested."},
        { title: "Chapter Ring Swap", price: "65", description: "Additional $10 if new crystal gasket is needed and not provided, included at no charge if requested during a crystal swap."},
        { title: "Caseback Swap", price: "20", description: "Includes new caseback gasket."},
        { title: "Handset and/or Dial Swap", price: "65", description: "Additional $20 if day and/or date wheel swap is requested. Additional fee of $10 if dial adhesive is needed."},
        { title: "Second Hand Only Swap", price: "20", description: ""},
        { title: "Day and/or Date Wheel Swap", price: "85", description: "Includes labor for handset and/or dial swapping if requested."},
        { title: "Movement Swap", price: "160", description: "Additional $20 if the correct day wheel is not provided, includes swapping of dial holder/movement spacer ring, day and/or day wheel, dial, handset, crown, and cutting and fitting of stem."},
        { title: "Custom Fit Crown Swap", price: "50", description: "Includes cutting and fitting of stem."},
        { title: "Wet Pressure Testing", price: "40", description: ""},
        { title: "Movement Regulation for Improved Accuracy", price: "40", description: ""},
        { title: "Full Build Assembly using Client-Provided Parts and Gaskets", price: "225", description: "Includes movement regulation and pressure testing if requested."}
    ]

    return (
        <div>
        <Head>
            <title>RLSWW Service</title>
            <meta name="description" content="Service options available for existing watches" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col lg:w-3/5 mx-auto">
            <h1 className="text-5xl text-center mb-4">Modification Services</h1>
            <p className="text-lg w-3/4 mx-auto lg:text-xl mb-4">&#8195;As a solo watchmaker, I offer bespoke services that are tailored to your specific needs. From modifying your current timepieces to creating entirely new designs, I take a hands-on approach to every project and ensure that each piece I craft is of the highest quality.</p>
            <p className="text-lg w-3/4 mx-auto lg:text-xl mb-4">&#8195;With a passion for precision and an eye for detail, I am dedicated to delivering timepieces that not only look stunning but also perform flawlessly. You can trust me to handle your watches with the care and attention they deserve.</p>
            <div>
                <ServiceCalculator />
            </div>

        </main>
        </div>
    );
}  
