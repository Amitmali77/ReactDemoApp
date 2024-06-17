import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './productThunk';
const productSlice = createSlice({
  name: 'product',
  initialState: { productList: {} },
  reducers: {
    updateProducts: (state, action) => {
      console.log(state,action)
      state.productList = action.payload;
    }, 
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state,action) => {
        state.productList = [];
    })
    builder.addCase(fetchProduct.fulfilled, (state,action) => {
        state.productList = action.payload;
    })
    builder.addCase(fetchProduct.rejected, (state,action) => {
        state.productList = action.payload;
    })
  }
});
const {
   reducer,
     actions: {
      updateProducts
     } = {}
 } = productSlice; 

 export { updateProducts }

 export default reducer
