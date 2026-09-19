import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

// Suy luận kiểu dữ liệu từ chính store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;