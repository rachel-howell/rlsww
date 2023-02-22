import shopify from './shopify'

export async function getProducts() {

    const storefrontAccessToken = '967462bfc985e2317476a7141871d34f';
    const shop = 'rlswatchworks-9638.myshopify.com';

    const storefrontClient = new shopify.clients.Storefront({
        domain: shop,
        storefrontAccessToken,
    });

    const products = await storefrontClient.query({
        data: `{
        products (first: 3) {
        edges {
            node {
            id
            title
            }
        }
        }
    }`,
    });

    return { props: {
        products,
    },
}}