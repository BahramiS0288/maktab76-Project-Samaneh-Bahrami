import { configureStore } from '@reduxjs/toolkit'

import cartReducer, { getTotals } from "../../pages/user/cart/feature/cartSlice"
import productReducer from "../../pages/user/productOverview/feature/productSlice"
import userSlice from '../../pages/login/feature/userSlice'

const store =configureStore ({
    reducer:{
        products:productReducer,
        cart:cartReducer,
        users: userSlice,
    }
})

export default store