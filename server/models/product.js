const mongoose = require("mongoose");

const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        createdTime: {
            type: String,
            required: true
        },
        modifiedTime: {
            type: String,
            required: false
        },
        createdBy: {
            type: String,
            required: true
        },
        modifiedBy: {
            type: String,
            required: false
        },
        categoryId: {
            type: String,
            required: true
        }
    })
);

module.exports = Product;
