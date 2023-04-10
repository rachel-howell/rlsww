import Head from 'next/head'
import { SocialIcon } from 'react-social-icons';

export default function Contact() {

  const customStyle = {
    height: '70vh'
  }

    return (
        <div>
          <Head>
              <title>Contact</title>
              <meta name="contact" content="Contact information for prospective and returning watch buyers" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="flex flex-col items-center justify-center mt-5" style={customStyle}>
            <h1 className="text-4xl mb-5">For fastest service, please reach out via Instagram DM.</h1>
            <SocialIcon url="https://www.instagram.com/rswatchworks/" />
          </main>
        </div>
    );
  }
