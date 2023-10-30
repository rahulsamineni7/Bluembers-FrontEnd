import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './Slices/basketslice'
import { apiSlice } from './Slices/apiSlice';

export const store = configureStore({
  reducer: {
    basket:basketReducer,
    api:apiSlice.reducer,


  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store;