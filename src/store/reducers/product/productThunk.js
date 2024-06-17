import { createAsyncThunk } from '@reduxjs/toolkit';
 import { getAuthorization } from '../../../helpers/service.js';

const fetchProduct = createAsyncThunk('fetchProduct', async (payload, { dispatch, getState }) => {
  const API = getAuthorization(getState);
  try {
    const response = await API.get('/products');
    console.log("response",response)
    const { data: { user = [] } = {}, status = '' } = response;
    if (status === 200) {
      return response.data
    }
    return response.data;
  } catch (err) {
    //ToastNotifyError(err);
    return err;
  }
});

export {fetchProduct}