const mongoose = require("mongoose");

const Category = mongoose.model(
    "SubCategory",
    new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
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
        parentCategoryId: {
            type: String,
            required: false
        }
    })
);

module.exports = Category;
