import React from 'react';
import { FavoritesView } from './features/favorites/FavoritesView';

export const App: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>LTWNC - Bài Tập 4: Quản Lý Sản Phẩm Yêu Thích (Zustand)</h1>
      <FavoritesView />
    </div>
  );
};

export default App;