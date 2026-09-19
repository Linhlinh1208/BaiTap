import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Product, ProductsState } from './types';

const initialState: ProductsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('https://fakestoreapi.com/products?limit=6');
      if (!res.ok) throw new Error('Không thể tải danh sách sản phẩm');
      return (await res.json()) as Product[];
    } catch (err: any) {
      return rejectWithValue(err.message || 'Lỗi không xác định');
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Có lỗi xảy ra';
      });
  },
});

export default productsSlice.reducer;