import Head from 'next/head'
import ProductList from '../components/ProductList'
import { storefront } from '../lib/storefront';

export default function Listings({products}) {
    console.log(products.edges)
    return (
        <div>
            <Head>
                <title>RLSWW Watch Listings</title>
                <meta name="description" content="Watches currently for sale" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
            <ProductList products={products}/>
            </main>
        </div>
    );
}


export async function getStaticProps() {
    const { data } = await storefront(productsQuery)

    return {
        props: {
            products: data.products
        },
    };
}

const productsQuery = `
query Products {
    products(first:10) {
    edges {
        node {
        title
        handle
        tags
        priceRange {
            minVariantPrice {
            amount
            }
        }
        images(first:1) {
            edges {
            node {
                transformedSrc
                altText
            }
            }
        }
        }
    }
    }
}
`