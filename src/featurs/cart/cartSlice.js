import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        cartTotalQty : 0,
        cartTotalAmount : 0,


    },
    reducers: {
        add: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
              )
              if(itemIndex >= 0){
                state.cartItems[itemIndex].cartTotalQty += 1;
              }else {
                const tempProduct = {...action.payload, cartTotalQty: 1}
                state.cartItems.push(tempProduct)
              }
        },

        remove: (state, action) => {
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload),
            }
        }

    },
    extraReducers: (builder) => {

    }

})

export const {add , remove} = cartSlice.actions;
export default cartSlice.reducer;