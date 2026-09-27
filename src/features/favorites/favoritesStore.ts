import { create } from 'zustand';

export interface Product {
  id: number | string;
  name: string;
  price: number;
}

interface FavoritesState {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (id: number | string) => void;
  toggleFavorite: (product: Product) => void;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],
  addToFavorites: (product) =>
    set((state) => {
      const exists = state.favorites.some((item) => item.id === product.id);
      if (exists) return state;
      return { favorites: [...state.favorites, product] };
    }),
  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== id),
    })),
  toggleFavorite: (product) => {
    const { favorites, addToFavorites, removeFromFavorites } = get();
    const exists = favorites.some((item) => item.id === product.id);
    if (exists) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  },
}));