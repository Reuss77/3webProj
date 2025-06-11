import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import type { SearchResultDoc } from "../api/openLibrary";
import { fetchSearchResults } from "../api/openLibrary";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResultDoc[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    fetchSearchResults(query)
      .then(setResults)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div className="search-results-container">
      <h2>
        Résultats pour : <em>{query}</em>
      </h2>

      {loading && <p>Chargement des résultats...</p>}
      {error && <p className="error">Erreur : {error}</p>}
      {!loading && !error && results.length === 0 && (
        <p>Aucun résultat trouvé.</p>
      )}

      <ul className="book-list">
        {results.map((book) => (
          <li key={book.key} className="book-card">
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`Couverture de ${book.title}`}
                className="book-cover"
              />
            )}
            <div className="book-info">
              <h3>
                <Link
                  to={`/book/${encodeURIComponent(
                    book.key.split("/").pop() ?? ""
                  )}`}
                >
                  {book.title}
                </Link>
              </h3>
              {book.author_name && (
                <p>Auteur(s) : {book.author_name.join(", ")}</p>
              )}
              {book.first_publish_year && (
                <p>Publié en : {book.first_publish_year}</p>
              )}
              {book.subject && <p>Sujets : {book.subject.join(", ")}</p>}
            </div>
          </li>
        ))}
      </ul>

      <style>{`
        .search-results-container {
          max-width: 900px;
          margin: 2rem auto;
          padding: 0 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #222;
        }

        h2 {
          font-weight: 600;
          border-bottom: 2px solid #005f73;
          padding-bottom: 0.5rem;
          color: #0a9396;
          margin-bottom: 1.5rem;
        }

        .error {
          color:rgb(166, 183, 79);
          font-weight: bold;
        }

        .book-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .book-card {
          display: flex;
          background: #e0f2f1;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgb(0 0 0 / 0.1);
          padding: 1rem;
          transition: box-shadow 0.3s ease;
        }

        .book-card:hover {
          box-shadow: 0 5px 15px rgb(0 0 0 / 0.2);
        }

        .book-cover {
          width: 100px;
          height: auto;
          border-radius: 4px;
          margin-right: 1rem;
          object-fit: contain;
          box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
          background: white;
        }

        .book-info h3 {
          margin: 0 0 0.5rem;
          font-size: 1.1rem;
          color: #00796b;
        }

        .book-info h3 a {
          text-decoration: none;
          color: inherit;
        }

        .book-info h3 a:hover {
          text-decoration: underline;
        }

        .book-info p {
          margin: 0.2rem 0;
          font-size: 0.9rem;
          color: #004d40;
        }

        @media (max-width: 600px) {
          .book-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .book-cover {
            margin: 0 0 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchResults;
