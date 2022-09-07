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
    // addToCart(state, action) {
    //   const existingIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );

    //   if (existingIndex >= 0) {
    //     state.cartItems[existingIndex] = {
    //       ...state.cartItems[existingIndex],
    //       cartQuantity: state.cartItems[existingIndex].cartQuantity += 1,
    //     };
    //     toast.info("Increased product quantity", {
    //       position: "bottom-left",
    //     });
    //   } else {
    //     let tempProductItem = { ...action.payload, cartQuantity: 1 };
    //     state.cartItems.push(tempProductItem);
    //     toast.success("Product added to cart", {
    //       position: "bottom-left",
    //     });
    //   }
    //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    // },
    // decreaseCart(state, action) {
    //   const itemIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );

    //   if (state.cartItems[itemIndex].cartQuantity > 1) {
    //     state.cartItems[itemIndex].cartQuantity -= 1;

    //     toast.info("Decreased product quantity", {
    //       position: "bottom-left",
    //     });
    //   } else if (state.cartItems[itemIndex].cartQuantity === 1) {
    //     const nextCartItems = state.cartItems.filter(
    //       (item) => item.id !== action.payload.id
    //     );

    //     state.cartItems = nextCartItems;

    //     toast.error("Product removed from cart", {
    //       position: "bottom-left",
    //     });
    //   }

    //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    // },
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
    // getTotals(state, action) {
    //   let { total, quantity } = state.cartItems.reduce(
    //     (cartTotal, cartItem) => {
    //       const { price, cartQuantity } = cartItem;
    //       const itemTotal = price * cartQuantity;

    //       cartTotal.total += itemTotal;
    //       cartTotal.quantity += cartQuantity;

    //       return cartTotal;
    //     },
    //     {
    //       total: 0,
    //       quantity: 0,
    //     }
    //   );
    //   total = parseFloat(total.toFixed(2));
    //   // state.cartTotalQuantity = quantity;
    //   state.cartTotalAmount = total;
    // },

    clearCart(state, action) {
      state.cartItem = [];
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
    // addQuantity(state,action){
    //   console.log(action.payload.number);
    //   state.cartItem[action.payload.id].cartQuantity=action.payload.number
    // }
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart ,addQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;