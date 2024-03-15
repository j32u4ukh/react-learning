import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export const persistSlice = createSlice({
  name: "persistor",

  initialState: {
    text: '',
  },

  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    }
  }
});

// 取用方法
export const {setText} = persistSlice.actions; 
// 取用資料
export const selectPersist= (state) => state.persistor; 

export default persistReducer(persistConfig, persistSlice.reducer);