import { createSlice } from '@reduxjs/toolkit';
import config from 'config';

// initial state
const initialState = {
  isOpen: ['dashboard'],
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true
};

// slice
const customizationSlice = createSlice({
  name: 'customization',
  initialState,
  reducers: {
    menuOpenRedux: (state, action) => {
      const id = action.payload;
      state.isOpen = [id];
    },
    setMenuRedux: (state, action) => {
      state.opened = action.payload;
    },
    setFontFamilyRedux: (state, action) => {
      state.fontFamily = action.payload;
    },
    setBorderRadiusRedux: (state, action) => {
      state.borderRadius = action.payload;
    }
  }
});

// actions
export const { menuOpenRedux, setMenuRedux, setFontFamilyRedux, setBorderRadiusRedux } = customizationSlice.actions;

// reducer
export default customizationSlice.reducer;
