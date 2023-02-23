export async function storefront(query, variables = {}) {
    const response = await fetch(
        process.env.SHOPIFY_STORE_DOMAIN,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN
            },
            body: JSON.stringify({ query, variables })
        })
    return response.json()
}