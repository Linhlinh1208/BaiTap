import React from 'react';
import { useFavoritesStore, type Product } from './favoritesStore';

const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: 'Điện thoại iPhone 15', price: 999 },
  { id: 2, name: 'Tai nghe AirPods Pro', price: 249 },
  { id: 3, name: 'Chuột Logitech MX Master 3S', price: 99 },
];

export const FavoritesView: React.FC = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const removeFromFavorites = useFavoritesStore((state) => state.removeFromFavorites);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Danh sách sản phẩm</h2>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '30px' }}>
        {MOCK_PRODUCTS.map((prod) => {
          const isFav = favorites.some((f) => f.id === prod.id);
          return (
            <div
              key={prod.id}
              style={{
                border: '1px solid #ccc',
                padding: '12px',
                borderRadius: '8px',
                width: '200px',
              }}
            >
              <h4>{prod.name}</h4>
              <p>Giá: ${prod.price}</p>
              <button
                onClick={() => toggleFavorite(prod)}
                style={{
                  backgroundColor: isFav ? '#ff4d4f' : '#e2e8f0',
                  color: isFav ? '#fff' : '#000',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                {isFav ? '❤️ Đã thích' : '🤍 Yêu thích'}
              </button>
            </div>
          );
        })}
      </div>

      <hr />

      <h2>Sản phẩm yêu thích ({favorites.length})</h2>
      {favorites.length === 0 ? (
        <p>Chưa có sản phẩm nào trong danh sách yêu thích.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {favorites.map((item) => (
            <li
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '320px',
                marginBottom: '8px',
                padding: '8px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
              }}
            >
              <span>{item.name} - ${item.price}</span>
              <button
                onClick={() => removeFromFavorites(item.id)}
                style={{ color: 'red', border: 'none', background: 'transparent', cursor: 'pointer' }}
              >
                Xóa
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};