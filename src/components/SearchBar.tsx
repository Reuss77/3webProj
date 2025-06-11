import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
        <button type="button">Accueil</button>
      </Link>

      <form onSubmit={onSubmit} style={{ display: "flex", gap: "0.5rem" }}>
        <input
          type="search"
          placeholder="Recherche rapide"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Recherche rapide"
        />
        <button type="submit">Rechercher</button>
      </form>

      <Link
        to="/advanced"
        style={{ textDecoration: "underline", color: "blue" }}
      >
        Recherche avancée
      </Link>
      <Link
        to="/favorites"
        style={{ color: "white", textDecoration: "underline" }}
      >
        Favoris
      </Link>
    </div>
  );
};

export default SearchBar;
