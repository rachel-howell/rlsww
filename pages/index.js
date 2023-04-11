import Head from 'next/head'
import Hero from '@/components/Hero';
import CollectionModule from '../components/CollectionModule'
import { collectionQuery } from '../lib/storefront'
import * as React from 'react';
import { useEffect } from 'react';
import Footer from '../components/Footer'


export async function getStaticProps() {
  const allCollections = await collectionQuery();
  return {
    props: {
      allCollections,
    },
  };
}


export default function Home({ allCollections }) {


  return (
    <div>
      <Head>
        <title>RSWW Custom Watches</title>
        <meta name="description" content="Modified and custom watches by RSWatchWorks." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">

        {/* Hero */}
        <div className="mb-10">
          <Hero />
        </div>
        

        {/* Collections */}
        <div className="flex flex-col items-center mt-10">
          {
            allCollections.slice(1,3).map((collection, id)=>(
              <div className="mb-10" key={`${collection.handle} + ${id}`}>
                <CollectionModule key={id} collection={collection.node} orientation={id}/>
              </div>
            ))
          }
        </div>


      </main>
    </div>
  )
}

