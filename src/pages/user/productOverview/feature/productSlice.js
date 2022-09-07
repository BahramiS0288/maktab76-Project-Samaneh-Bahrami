import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import { async } from 'q'


const initialState ={
    items:[],
    status:null,
    error: null
}

export const productFetch= createAsyncThunk(
    "getProducts/get",
    async(id , { rejectWithValue }) => {
        try{
            const res = await axios.get(`http://localhost:3002/products?id=${id}`)
            return res.data
        }catch(error){
            return rejectWithValue(error.res.data)
        }
        
    }
)

const productSlice =createSlice ({
    name:"products",
    initialState,
    reducers:{
        
    },
    extraReducers:{
         [productFetch.pending] : (state,action) =>{
            state.status="pending"
         },
         [productFetch.fulfilled] : (state,action) =>{
            state.status="success"
            state.items=action.payload
         },
         [productFetch.rejected] : (state,action) =>{
            state.status="rejected"
            state.error= action.payload;
         },     
    }
})

export default productSlice.reducer