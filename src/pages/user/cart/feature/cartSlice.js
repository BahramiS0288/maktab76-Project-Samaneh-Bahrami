import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// const initialState = {
//   cartItems: localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [],
//   cartTotalQuantity: 0,
//   cartTotalAmount: 0,
// };

const initialState ={
  cartItem :localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem"))
  : [],
  cartTotalQuantity: localStorage.getItem("cartTotalQuantity") ? JSON.parse(localStorage.getItem("cartTotalQuantity"))
  : 0,
  cartTotalAmount: localStorage.getItem("cartTotalAmount") ? JSON.parse(localStorage.getItem("cartTotalAmount"))
  : 0,
  cartItemFinal :localStorage.getItem("cartItemFinal") ? JSON.parse(localStorage.getItem("cartItemFinal"))
  : {},
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state,action){
      const itemIndex = state.cartItem.findIndex( (item) => item.id === action.payload.id)
      if(itemIndex>=0){
        state.cartItem[itemIndex].cartQuantity = action.payload.countItem
      }else{
        const tempProduct = {...action.payload , cartQuantity:action.payload.countItem}
        state.cartItem.push(tempProduct)
        state.cartTotalQuantity +=1
      }
      state.cartTotalAmount += action.payload.countItem * action.payload.price ;
      console.log(state.cartTotalAmount);
      localStorage.setItem("cartItem",JSON.stringify(state.cartItem))
      localStorage.setItem("cartTotalQuantity",JSON.stringify(state.cartTotalQuantity))
      localStorage.setItem("cartTotalAmount",JSON.stringify(state.cartTotalAmount))
    },
    removeFromCart(state , action) {
      state.cartItem.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const newCartItem = state.cartItem.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItem = newCartItem;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
        return state;
      });
    },

    clearCart(state, action) {
      state.cartItem = [];
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
    personOrder(state , action){
      state.cartItemFinal = action.payload
      localStorage.setItem("cartItemFinal",JSON.stringify(state.cartItemFinal))
      // console.log(state.cartItemFinal);
    },
    clearLocalstorage(state,action){
      state.cartItem=[]
      state.cartTotalAmount =0
      state.cartTotalQuantity=0
      // state.cartItemFinal =null
      localStorage.setItem("cartItem",JSON.stringify(state.cartItem))
      localStorage.setItem("cartTotalQuantity",JSON.stringify(state.cartTotalQuantity))
      localStorage.setItem("cartTotalAmount",JSON.stringify(state.cartTotalAmount))
      // localStorage.setItem("cartItemFinal",JSON.stringify(state.cartItemFinal))
    }
  },
});

export const {clearLocalstorage ,personOrder, addToCart, decreaseCart, removeFromCart, getTotals, clearCart ,addQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;