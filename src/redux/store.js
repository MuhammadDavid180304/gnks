import { configureStore } from '@reduxjs/toolkit';
import customization from './slices/customization';
import loginInfo from './slices/loginInfo';
const store = configureStore({
  reducer: {
    customization: customization,
    loginInfo: loginInfo
  }
});
console.log('CREATE STORE :', store.getState());
store.subscribe(() => {
  console.log('STORE CHANGE : ', store.getState());
});

export default store;
