const category = require('./category');
const product = require('./product');

const rootResolver = {...category, ...product};

module.exports = rootResolver;