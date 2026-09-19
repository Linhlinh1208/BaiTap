import React from 'react';
import { ProductList } from './features/products/ProductList';
import { CartView } from './features/cart/CartView';

export const App: React.FC = () => {
  return (
    <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '24px', fontFamily: 'sans-serif' }}>
      <h1>Cửa Hàng Trực Tuyến</h1>
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        <div style={{ flex: 2 }}>
          <h2>Danh Sách Sản Phẩm</h2>
          <ProductList />
        </div>
        <div style={{ flex: 1, position: 'sticky', top: '24px' }}>
          <CartView />
        </div>
      </div>
    </div>
  );
};

export default App;