import { createAsyncThunk } from '@reduxjs/toolkit';
// import API_ROUTES from '../../../constants/apiRoutes';
// import { authApi } from '../../../constants/reduxConstant';
 import { getAuthorization } from '../../../helpers/service.js';
// import { updateLoading } from '../loader';
// // import { ToastNotifyError } from '../../../components/Toast/ToastNotify';

// const { login = '', logout = '' } = authApi;
// const { V1: { LOGIN, LOGOUT } = {} } = API_ROUTES;

const fetchLogin = createAsyncThunk('fetchLogin', async (payload, { dispatch, getState }) => {
  debugger;
  const API = getAuthorization(getState);
  try {
    //dispatch(updateLoading(true));
    const response = await API.post('/auth/login', payload);
    console.log("response",response)
    //(updateLoading(false));
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

export {fetchLogin}