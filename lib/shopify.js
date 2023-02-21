const Shopify = require('shopify-api-node');

const shopify = new Shopify({
    shopName: 'RLSWW',
    apiKey: '967462bfc985e2317476a7141871d34f',
    password: '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',
});

module.exports = shopify;