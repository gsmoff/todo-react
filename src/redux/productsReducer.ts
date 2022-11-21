import  axios  from 'axios';
// import { initialState } from './likeReducer';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { userAPI } from './userAPI'

type Product = {
    id: number;
    name: string;
    description: string;
    type: string;
    capacity: number;
    price: number;
    image: string;
};

export const initialState: Product[] = []

export const fetchProducts = createAsyncThunk<Product[], undefined>(
    "products/fetchProducts",
    async () => {
        const res = await axios.get("https://run.mocky.io/v3/ea7b7859-1a85-421a-b5df-cd143774ded6")
        console.log(res.data)
        return res.data.products
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return (state = action.payload)
        })
    }
})

export default productsSlice.reducer