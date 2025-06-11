import { useEffect, useState } from "react";
import { fetchSearchResults } from "../api/openLibrary";
import BookCard from "../components/BookCard";
import type { SearchResultDoc } from "../api/openLibrary"; // ✅ Import du bon type

interface SearchCriteria {
  title?: string;
  author?: string;
  subject?: string;
}

const AdvancedSearchResults = ({ criteria }: { criteria: SearchCriteria }) => {
  const [results, setResults] = useState<SearchResultDoc[]>([]); // ✅ Typage OK
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!criteria) return;

    const q = `${criteria.title ?? ""} ${criteria.author ?? ""} ${
      criteria.subject ?? ""
    }`.trim();

    setLoading(true);
    fetchSearchResults(q)
      .then(setResults)
      .catch((err: unknown) => {
        if (err instanceof Error) setError(err.message);
        else setError(String(err));
      })
      .finally(() => setLoading(false));
  }, [criteria]);

  return (
    <div className="search-results-container">
      <h2>Résultats de la recherche avancée</h2>

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
        .book-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default AdvancedSearchResults;
