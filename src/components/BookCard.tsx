import React from "react";
import { useNavigate } from "react-router-dom";
import type { SearchResultDoc } from "../api/openLibrary";

interface BookCardProps {
  book: SearchResultDoc;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    // La clé contient par ex. "/works/OL12345W"
    // On enlève le slash initial si besoin
    const id = book.key.startsWith("/works/") ? book.key.slice(7) : book.key;
    navigate(`/book/${id}`);
  };

  return (
    <article
      className="book-card"
      onClick={goToDetails}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") goToDetails();
      }}
    >
      {book.cover_i ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={`Couverture de ${book.title}`}
          className="book-cover"
          loading="lazy"
        />
      ) : (
        <div className="no-cover">Pas de couverture</div>
      )}

      <h3>{book.title}</h3>

      {book.author_name && (
        <p className="authors">
          <strong>Auteur(s) :</strong> {book.author_name.join(", ")}
        </p>
      )}

      {book.first_publish_year && (
        <p>
          <strong>Année :</strong> {book.first_publish_year}
        </p>
      )}

      {book.subject && (
        <p className="subjects">
          <strong>Sujets :</strong> {book.subject.slice(0, 3).join(", ")}
        </p>
      )}

      <style>{`
        .book-card {
          background-color:rgb(13, 13, 13);
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.7);
          padding: 1rem;
          color: #eee;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
          outline: none;
        }
        .book-card:hover, .book-card:focus {
          transform: scale(1.03);
          box-shadow: 0 8px 16px rgba(54, 53, 53, 0.9);
        }
        .book-cover {
          width: 140px;
          height: 210px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 1rem;
          box-shadow: 0 2px 6px rgba(55, 52, 52, 0.8);
        }
        .no-cover {
          width: 140px;
          height: 210px;
          background-color: #555;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #bbb;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          font-style: italic;
        }
        h3 {
          font-size: 1.3rem;
          margin: 0.3rem 0 0.8rem;
          color: #90e0ef;
        }
        p {
          margin: 0.2rem 0;
          font-size: 0.9rem;
          line-height: 1.3;
          color: #ccc;
        }
        strong {
          color: #00b4d8;
        }
        .authors, .subjects {
          font-style: italic;
          color: #a0c4ff;
        }
      `}</style>
    </article>
  );
};

export default BookCard;
