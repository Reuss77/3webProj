import { createContext, useContext, useState, type ReactNode } from "react";
import type { BookDetails } from "../api/openLibrary";

export type FavoriteBook = BookDetails & { key: string };

interface FavoritesContextType {
  favorites: FavoriteBook[];
  addToFavorites: (book: FavoriteBook) => void;
  removeFromFavorites: (bookKey: string) => void;
  isFavorite: (bookKey: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteBook[]>([]);

  const addToFavorites = (book: FavoriteBook) => {
    setFavorites((prev) => {
      if (!prev.find((b) => b.key === book.key)) {
        return [...prev, book];
      }
      return prev;
    });
  };

  const removeFromFavorites = (bookKey: string) => {
    setFavorites((prev) => prev.filter((b) => b.key !== bookKey));
  };

  const isFavorite = (bookKey: string) => {
    return favorites.some((b) => b.key === bookKey);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
