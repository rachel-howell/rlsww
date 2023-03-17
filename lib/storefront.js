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
            products(first:100) {
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

export async function collectionHandleQuery() {
    const { data } = await storefront(`
      {
        collections(first:6){
          edges {
            node {
              handle
            }
          }
        }
      }
    `)
    return data.collections.edges.map((collection) => {
        return {
            params: { 
                handle: collection.node.handle 
            },
        };
    }); 
}

export async function collectionQuery() {
  const { data } = await storefront(`
    {
      collections(first:6){
        edges {
          node {
            handle
            title
            description
            image {
              url
            }
          }
        }
      }
    }
  `)
  return data.collections.edges;
}

export async function cartMutation(cartInput) {
  const { data } = await storefront(`
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: ${cartInput}) {
      cart {
        id
        createdAt
        updatedAt
        checkoutUrl
        lines(first: 10) {
          edges {
            node {
              id
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
        attributes {
          key
          value
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }`)
  return data;
}


