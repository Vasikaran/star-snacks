const Category = require('../../models/category');
const SubCategory = require('../../models/subcategory');

module.exports = {
    createCategory: async ({ categoryInput }) => {
        const category = await new Category(categoryInput);
        const result = await category.save();
        return result._doc;
    },
    categories: async () => {
        const categories = await Category.find();
        return categories._doc || [];
    },
    editCategory: async ({ categoryInput }) => {
        await Category.updateOne({ _id: categoryInput._id }, categoryInput);
        const result = await Category.findOne({ _id: categoryInput._id });
        return result._doc;
    },
    deleteCategory: async ({ _id }) => {
        await Category.deleteOne({ _id });
        await Category.deleteMany({ parentCategoryId: _id });
        return '';
    },
    createSubCategory: async ({ categoryInput }) => {
        const subCategory = await new SubCategory(categoryInput);
        const result = await subCategory.save();
        return result._doc;
    },
    subcategories: async ({ categoryId }) => {
        const subcategories = await SubCategory.find({ parentCategoryId: categoryId });
        return subcategories._doc || [];
    },
    editSubCategory: async ({ categoryInput }) => {
        await Category.updateOne({ _id: categoryInput._id }, categoryInput);
        const result = await Category.findOne({ _id: categoryInput._id });
        return result._doc;
    },
    deleteSubCategory: async ({ _id }) => {
        await Category.deleteOne({ _id });
        return '';
    },
};