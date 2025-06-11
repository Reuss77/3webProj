import React, { useState } from "react";
import AdvancedSearch from "../pages/AdvancedSearch";
import type { SearchResultDoc } from "../api/openLibrary";
import BookCard from "../components/BookCard";

const AdvancedSearchPage: React.FC = () => {
  const [results, setResults] = useState<SearchResultDoc[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (
    query: string,
    author?: string,
    subject?: string,
    year?: string,
    isbn?: string,
    place?: string
  ) => {
    setLoading(true);
    setError(null);

    try {
      let url = `https://openlibrary.org/search.json?limit=10`;

      if (query) url += `&q=${encodeURIComponent(query)}`;
      if (author) url += `&author=${encodeURIComponent(author)}`;
      if (subject) url += `&subject=${encodeURIComponent(subject)}`;
      if (year) url += `&first_publish_year=${encodeURIComponent(year)}`;
      if (isbn) url += `&isbn=${encodeURIComponent(isbn)}`;
      if (place) url += `&place=${encodeURIComponent(place)}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erreur ${response.status}`);
      }
      const data = await response.json();
      setResults(data.docs || []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="advanced-search-page">
      <h2>Recherche avancée</h2>
      <AdvancedSearch onSearch={handleSearch} />

      {loading && <p>Chargement...</p>}
      {error && <p className="error">Erreur : {error}</p>}
      {!loading && !error && results.length === 0 && (
        <p>Aucun résultat trouvé.</p>
      )}

      <div className="book-grid">
        {results.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>

      <style>{`
        .advanced-search-page {
          background-color:rgb(16, 54, 96);
          color: #f1f1f1;
          min-height: 100vh;
          padding: 2rem 1rem;
          max-width: 1000px;
          margin: 0 auto;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          color: #90e0ef;
          border-bottom: 2px solid #00b4d8;
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
        }

        .error {
          color: #ff6b6b;
          font-weight: bold;
        }

        .book-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};

export default AdvancedSearchPage;
