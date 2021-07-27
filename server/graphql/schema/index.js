const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    type Product {
        _id: ID!
        name: String!
        description: String!
        price: Float!
        createdTime: String!
        modifiedTime: String
        createdBy: String!
        modifiedBy: String
        categoryId: ID!
    }

    input ProductInput {
        name: String!
        description: String!
        price: Float!
        createdTime: String!
        modifiedTime: String
        createdBy: String!
        modifiedBy: String
        categoryId: ID
    }

    type Category {
        _id: ID!
        name: String!
        description: String!
        count: Int
        createdTime: String!
        modifiedTime: String
        createdBy: String!
        modifiedBy: String
        parentCategoryId: ID
    }

    input CategoryInput {
        _id: ID
        name: String!
        description: String!
        createdTime: String!
        modifiedTime: String
        createdBy: String!
        modifiedBy: String
        parentCategoryId: ID
    }

    type Query {
        categories: [Category]!
        subcategories: [Category]!
        products: [Product]!
    }

    type Mutation {
        createCategory(categoryInput: CategoryInput): Category!
        createSubCategory(categoryInput: CategoryInput): Category!
        createProduct(productInput: ProductInput): Product!

        editCategory(categoryInput: CategoryInput): Category!
        editSubCategory(categoryInput: CategoryInput): Category!
        editProduct(productInput: ProductInput): Product!

        deleteCategory(_id: ID!): String!
        deleteSubCategory(_id: ID!): String!
        deleteProduct(_id: ID!): String!
    }

    type schema {
        query: Query
        mutation: Mutation
    }

`);

