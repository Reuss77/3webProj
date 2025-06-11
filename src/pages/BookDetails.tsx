import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { BookDetails } from "../api/openLibrary";
import { fetchBookDetails } from "../api/openLibrary";
import { fetchWikiInfo, type WikiPage } from "../api/wikipedia";
import { Heart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";

const BookDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [darkTheme, setDarkTheme] = useState(false);
  const [wikiInfo, setWikiInfo] = useState<WikiPage | null>(null);
  const navigate = useNavigate();

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    if (!id) {
      setError("ID du livre manquant");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);

    fetchBookDetails(id)
      .then((data) => {
        if (!data) throw new Error("Données du livre introuvables");
        setBook(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (!book) return;
    fetchWikiInfo(book.title)
      .then(setWikiInfo)
      .catch(() => setWikiInfo(null));
  }, [book]);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [darkTheme]);

  const toggleFavorite = () => {
    if (!book || !id) return;
    const bookKey = `works/${id}`;

    if (isFavorite(bookKey)) {
      removeFromFavorites(bookKey);
    } else {
      addToFavorites({ ...book, key: bookKey });
    }
  };

  const toggleTheme = () => setDarkTheme(!darkTheme);

  if (loading) return <p>Chargement du livre...</p>;
  if (error)
    return (
      <section>
        <p>Erreur : {error}</p>
        <button onClick={() => navigate(-1)}>← Retour</button>
      </section>
    );
  if (!book) return <p>Livre non trouvé</p>;

  const bookKey = `works/${id}`;
  const favorited = isFavorite(bookKey);

  return (
    <section>
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Retour
      </button>

      <div className="header">
        <h2>{book.title}</h2>
        <button
          onClick={toggleFavorite}
          aria-label={favorited ? "Retirer des favoris" : "Ajouter aux favoris"}
          className={`favorite-btn ${favorited ? "favorited" : ""}`}
        >
          <Heart
            size={28}
            fill={favorited ? "#ff5252" : "none"}
            stroke={favorited ? "#ff5252" : "#444"}
          />
        </button>
      </div>

      {book.authors && (
        <p>
          <strong>Auteur(s) :</strong>{" "}
          {book.authors.map((a) => a.name).join(", ")}
        </p>
      )}
      <p>
        <strong>Date de publication :</strong> {book.publish_date ?? "Inconnue"}
      </p>
      {book.cover?.medium && (
        <img
          src={book.cover.medium}
          alt={`Couverture de ${book.title}`}
          className="book-cover"
          loading="lazy"
        />
      )}
      {book.subjects && (
        <p>
          <strong>Sujets :</strong> {book.subjects.join(", ")}
        </p>
      )}

      {wikiInfo && (
        <section className="wiki-section">
          <h3>Informations Wikipédia</h3>
          {wikiInfo.thumbnail && (
            <img
              src={wikiInfo.thumbnail.source}
              alt={`Image Wikipédia pour ${wikiInfo.title}`}
              className="wiki-thumbnail"
            />
          )}
          {wikiInfo.extract && <p>{wikiInfo.extract}</p>}
          <a
            href={`https://fr.wikipedia.org/wiki/${encodeURIComponent(
              wikiInfo.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="wiki-link"
          >
            Voir la page Wikipédia
          </a>
        </section>
      )}

      <button
        onClick={toggleTheme}
        className="theme-toggle-btn"
        style={{ marginTop: "1rem" }}
      >
        {darkTheme ? "Passer au thème clair" : "Passer au thème sombre"}
      </button>
    </section>
  );
};

export default BookDetailsPage;
