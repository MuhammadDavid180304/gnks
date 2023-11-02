import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  isLogin: false,
  username: 'Syahdin',
  role: 'Teknisi',
  photoURL: '',
  token: ''
};

// slice
const loginInfoSlice = createSlice({
  name: 'login-info',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setPhotoURL: (state, action) => {
      state.photoURL = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    }
  }
});

// actions
export const { setIsLogin, setUsername, setRole, setPhotoURL, setToken } = loginInfoSlice.actions;

// reducer
export default loginInfoSlice.reducer;
