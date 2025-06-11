import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

type Book = {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
};

const Favorites = () => {
  const [favorites, setFavorites] = useState<Book[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  if (favorites.length === 0) {
    return <p className="text-center mt-10">Aucun livre en favori.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Mes livres favoris</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {favorites.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
