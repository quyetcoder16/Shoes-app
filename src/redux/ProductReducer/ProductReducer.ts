import { createSlice } from '@reduxjs/toolkit'

export interface ProductModel {
    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: string;
    relatedProducts: string;
    feature: boolean;
    image: string;
}

export type ProductState = {
    arrProduct: ProductModel[]
}

const initialState: ProductState = {
    arrProduct: [{
        "id": 1,
        "name": "vans black",
        "alias": "vans-black-black",
        "price": 200,
        "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
        "size": "[32,33,34,35]",
        "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "quantity": 100,
        "deleted": false,
        "categories": "[{\"id\": \"VANS_CONVERSE\",\"category\":\"VANS_CONVERSE\"}]",
        "relatedProducts": "[2,3,1]",
        "feature": true,
        "image": "https://shop.cyberlearn.vn/images/vans-black-black.png"
    },]
}

const ProductReducer = createSlice({
    name: "ProductReducer",
    initialState,
    reducers: {}
});

export const { } = ProductReducer.actions

export default ProductReducer.reducer