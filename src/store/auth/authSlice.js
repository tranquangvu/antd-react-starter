import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus } from '@/constants';
import { getAuthUser, removeAuthUser } from '@/utils/localStorageUtil';
import { login } from './authThunk';

const initialState = {
  loading: LoadingStatus.idle,
  error: null,
  user: getAuthUser(),
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clear(state) {
      state.loading = LoadingStatus.idle;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = LoadingStatus.pending;
    },
    [login.fulfilled]: (state, { payload: user }) => {
      state.loading = LoadingStatus.fulfilled;
      state.error = null;
      state.user = user;
    },
    [login.rejected]: (state, { payload: error }) => {
      state.loading = LoadingStatus.rejected;
      state.error = error;
      state.user = null;
    },
  },
});

export const { putUser, clear } = slice.actions;
export default slice.reducer;

// Extra Actions

export const logout = () => async (dispatch) => {
  removeAuthUser();
  dispatch(clear());
};
