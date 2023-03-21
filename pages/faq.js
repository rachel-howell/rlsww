import Head from 'next/head'

export default function FAQ() {
    return (
        <div>
          <Head>
              <title>FAQ</title>
              <meta name="FAQ" content="Frequently asked questions regarding the services and products of RLS Watchworks." />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <h1 className="text-5xl">FAQ</h1>

            <p>Do I need a watch to modify?</p>
            <p>Nope! We can work together to build a ground-up custom piece, or we can select an off-the-shelf watch and customize it to your liking.</p>

            <p>Can you modify an existing watch?</p>
            <p>Sure! If you have an existing watch you want modified, reach out and we can discuss options.</p>

            <p>What is the best way to contact you and get started?</p>
            <p>Please reach out via Direct Message on Instagram.</p>

            <p>Can I ship parts to you?</p>
            <p>Absolutely! You can dropship parts directly to me.</p>

            <p>Will my watch be waterproof after work has been done?</p>
            <p>No watch is truly waterproof, but rather water resistant. All watches I modify or otherwise build are pressure tested to ensure water resistance. That being said, it is the end user’s responsibility to ensure proper precautions are taken prior to water exposure, such as fully tightening the crown and never submerging the watch in warm water (such as in a jacuzzi).</p>

            <p>How long with it take?</p>
            <p>Lead time varies based on my waitlist, required parts, and other factors such as shipping speed.

            In general, this varies from 7 days for builds from in-stock parts or up to 6 weeks for builds requiring more obscure parts, accounting for shipping delays.

            I always provide as accurate a lead time estimate as possible and will keep you in the loop throughout the process.</p>

            <p>Do you accept returns?</p>
            <p>No, I do not accept returns on any custom builds or modification services performed.</p>

            <p>How do I pay for your services?</p>
            <p>I accept Zelle, Cashapp, Venmo, and Paypal for modification services.</p>

            <p>Do you require a deposit?</p>
            <p>If you are commissioning a ground-up build or parts are required for your build that I do not stock, I do require a deposit with the remainder being due prior to shipment. If you want an existing watch modified, your base watch can act as a deposit.</p>
          </main>
        </div>
    );
  }
