import React, { useState } from "react";

interface AdvancedSearchProps {
  onSearch: (
    query: string,
    author?: string,
    subject?: string,
    year?: string,
    isbn?: string,
    place?: string
  ) => void;
}

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [isbn, setIsbn] = useState("");
  const [place, setPlace] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, author, subject, year, isbn, place);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "1rem",
        display: "grid",
        gap: "0.75rem",
        maxWidth: "600px",
      }}
    >
      <input
        type="text"
        placeholder="Titre, mots-clés..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Auteur"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sujet"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="number"
        placeholder="Année de publication"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        min={0}
      />
      <input
        type="text"
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <input
        type="text"
        placeholder="Lieu"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default AdvancedSearch;
