import { createSlice } from '@reduxjs/toolkit';
import { fetchCart } from './cartThunk';
const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartList: {} },
  reducers: {
    updateCart: (state, action) => {
      console.log(state,action)
      state.cartList = action.payload;
    }, 
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state,action) => {
        state.cartList = [];
    })
    builder.addCase(fetchCart.fulfilled, (state,action) => {
        state.cartList = action.payload;
    })
    builder.addCase(fetchCart.rejected, (state,action) => {
        state.cartList = action.payload;
    })
  }
});
const {
   reducer,
     actions: {
      updateCart
     } = {}
 } = cartSlice; 

 export { updateCart }

 export default reducer
