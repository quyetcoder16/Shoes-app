import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DispatchType } from '../configStore';
import axios from 'axios';
import { ProductDetailModel } from '../../Models/ProductModel';

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
    arrProduct: ProductModel[],
    productDetail: ProductDetailModel | null,

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
    , productDetail: {
        "id": 1,
        "name": "vans black",
        "alias": "vans-black-black",
        "price": 200,
        "feature": false,
        "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
        "size": [
            "32",
            "33",
            "34",
            "35"
        ],
        "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "quantity": 100,
        "image": "https://shop.cyberlearn.vn/images/vans-black-black.png",
        "categories": [
            {
                "id": "VANS_CONVERSE",
                "category": "VANS_CONVERSE"
            }
        ],
        "relatedProducts": [
            {
                "id": 2,
                "name": "vans old school",
                "alias": "vans-old-school",
                "feature": false,
                "price": 200,
                "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
                "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "image": "https://shop.cyberlearn.vn/images/van-old-school.png"
            },
            {
                "id": 3,
                "name": "converse chuck taylor",
                "alias": "converse-chuck-taylor",
                "feature": false,
                "price": 250,
                "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
                "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "image": "https://shop.cyberlearn.vn/images/converse-chuck-taylor.png"
            },
            {
                "id": 1,
                "name": "vans black",
                "alias": "vans-black-black",
                "feature": false,
                "price": 200,
                "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
                "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "image": "https://shop.cyberlearn.vn/images/vans-black-black.png"
            }
        ]
    },
}

const ProductReducer = createSlice({
    name: "ProductReducer",
    initialState,
    reducers: {
        setArrProductAction: (state: ProductState, action: PayloadAction<ProductModel[]>) => {
            state.arrProduct = action.payload
        }
    },
    extraReducers(builder) {

        // pending : đang xử lý
        builder.addCase(getProductDetailApi.pending, (state, action) => {
            // bật loading
        })

        // fulfilled: đã xử lý thành công
        builder.addCase(getProductDetailApi.fulfilled, (state: ProductState, action: PayloadAction<ProductDetailModel>) => {
            // tắt loading
            state.productDetail = action.payload
        });

        // rejected : thất bại
        builder.addCase(getProductDetailApi.rejected, (state, action) => {
            // tắt loading

        });
    },
});

export const { setArrProductAction } = ProductReducer.actions

export default ProductReducer.reducer

// action api (async action)

export const getProductApi = () => {
    return async (dispatch: DispatchType) => {
        try {
            const result = await axios({
                url: 'https://shop.cyberlearn.vn/api/Product',
                method: "GET"
            });

            const content: ProductModel[] = result?.data?.content;

            const action: PayloadAction<ProductModel[]> = setArrProductAction(content);
            dispatch(action);

        } catch (error) {
            console.log(error);
        }
    }
}

// cách 2 dùng create.asyncThunk 

export const getProductDetailApi = createAsyncThunk("ProductReducer/getProductDetailApi", async (id: string) => {
    const response = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: "GET"
    });
    return response.data?.content;
})