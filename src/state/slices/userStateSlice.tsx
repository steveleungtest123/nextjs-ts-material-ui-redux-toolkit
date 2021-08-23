import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface UserState {
  loaded: boolean;
  user: null | string;
}

const initialState = {
  loaded: false,
  user: null,
};

const userStateSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<typeof initialState>) => {
      state.loaded = true;
      state.user = action.payload.user;
    },
    resetUser: (state) => {
      state.loaded = false;
      state.user = null;
    },
  },
});

export const getUser = (state: RootState) => state.user;

export const { setUser, resetUser } = userStateSlice.actions;

export default userStateSlice.reducer;
