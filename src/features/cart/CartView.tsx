import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  removeFromCart,
  updateQuantity,
  clearCart,
  selectCartItems,
  selectCartTotalPrice,
  selectCartTotalCount,
} from './cartSlice';

export const CartView: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotalPrice);
  const totalCount = useAppSelector(selectCartTotalCount);

  return (
    <div style={{ border: '1px solid #cbd5e1', padding: '16px', borderRadius: '8px', minWidth: '300px' }}>
      <h3>Giỏ Hàng ({totalCount})</h3>

      {cartItems.length === 0 ? (
        <p style={{ color: '#64748b' }}>Chưa có sản phẩm nào trong giỏ.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map(({ product, quantity }) => (
              <li
                key={product.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px',
                  borderBottom: '1px solid #f1f5f9',
                  paddingBottom: '8px',
                }}
              >
                <div>
                  <div style={{ fontWeight: '600', fontSize: '13px' }}>
                    {product.title.slice(0, 22)}...
                  </div>
                  <div style={{ fontSize: '13px', color: '#475569' }}>
                    ${product.price} × {quantity}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <button onClick={() => dispatch(updateQuantity({ id: product.id, quantity: quantity - 1 }))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({ id: product.id, quantity: quantity + 1 }))}>+</button>
                  <button
                    onClick={() => dispatch(removeFromCart(product.id))}
                    style={{ color: '#dc2626', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '12px' }}>
            <h4>Tổng: ${totalPrice.toFixed(2)}</h4>
            <button
              onClick={() => dispatch(clearCart())}
              style={{
                width: '100%',
                padding: '8px',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Xoá tất cả
            </button>
          </div>
        </>
      )}
    </div>
  );
};