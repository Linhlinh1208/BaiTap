import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchProducts } from './productsSlice';
import { addToCart } from '../cart/cartSlice';

export const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Đang tải sản phẩm...</p>;
  if (status === 'failed') return <p style={{ color: 'red' }}>Lỗi: {error}</p>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
      {items.map((prod) => (
        <div
          key={prod.id}
          style={{
            border: '1px solid #e2e8f0',
            padding: '12px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <img
            src={prod.image}
            alt={prod.title}
            style={{ height: '120px', objectFit: 'contain', width: '100%', marginBottom: '8px' }}
          />
          <h4 style={{ fontSize: '14px', margin: '4px 0' }}>{prod.title}</h4>
          <p style={{ fontWeight: 'bold', color: '#059669' }}>${prod.price.toFixed(2)}</p>
          <button
            onClick={() => dispatch(addToCart(prod))}
            style={{
              padding: '6px 12px',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  );
};