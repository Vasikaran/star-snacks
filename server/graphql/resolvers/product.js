const Product = require('../../models/product');

module.exports = {
    createProduct: async ({ productInput }) => {
        const product = await new Product(productInput);
        return product._doc;
    },
    products: async () => {
        const products = await Product.find();
        return products._doc || [];
    },
    editProduct: async ({ productInput }) => {
        await Product.updateOne({ _id: productInput._id }, productInput);
        const result = await Category.findOne({ _id: productInput._id });
        return result._doc;
    },
    deleteProduct: async ({ _id }) => {
        await Product.deleteOne({ _id });
        return '';
    }
};