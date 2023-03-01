/**
 * Takes in query (plus option variables) to retrieve Shopify product data
 * @param {*} query GraphQL query
 * @param {*} variables 
 * @returns object with Shopify data requested from GraphQL query
 */

export async function storefront(query, variables = {}) {
    const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_ACCESS_TOKEN
            },
            body: JSON.stringify({ query, variables })
        })
    return response.json();
}

export async function productHandleQuery() {
    const { data } = await storefront(`
        {
            products(first:6) {
                edges {
                    node {
                        handle
                    }
                }
            }
        }
    `)
    return data.products.edges.map((product) => {
        return {
            params: { 
                handle: product.node.handle 
            },
        };
    }); 
}

