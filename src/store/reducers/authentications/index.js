import { createSlice } from '@reduxjs/toolkit';
import { fetchLogin } from './authThunk';
const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: { auth: {} },
  reducers: {
    updateAuth: (state, action) => {
      console.log(state,action)
      state.auth = action.payload;
    }, 
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state,action) => {
        state.auth = {};
    })
    builder.addCase(fetchLogin.fulfilled, (state,action) => {
        state.auth = action.payload;
    })
    builder.addCase(fetchLogin.rejected, (state,action) => {
        state.auth = action.payload;
    })
  }
});
const {
   reducer,
     actions: {
      updateAuth,
     } = {}
 } = authenticationSlice; 

 export { updateAuth }

 export default reducer
