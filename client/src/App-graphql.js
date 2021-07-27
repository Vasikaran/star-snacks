import React from 'react';
import { gql, useMutation } from "@apollo/client";

const CREATE_CATEGORY = gql`
  mutation CreateCategory($name: String!, $description: String!, $createdTime: String!, $createdBy: String!) {
    createCategory(categoryInput: {name: $name, description: $description, createdTime: $createdTime, createdBy: $createdBy}){
        name
        _id
        description
    }
  }
`;


export default function App() {
    const [CreateCategory, { loading, error, data }] = useMutation(CREATE_CATEGORY);
    const components = [];
    if (loading) {
        components.push('Loading');
    } else if (data) {
        components.push(`Category is created - ${data.createCategory.name}`);
    }


    components.push(<button onClick={() => {
        CreateCategory({ variables: { name: 'Cakes', description: "Star special cakes", createdTime: new Date().toISOString(), createdBy: "Vasi" } })
    }}>Create Category</button>);

    return components;

}