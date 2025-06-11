import { useEffect, useState } from "react";
import type { RecentChange } from "../api/openLibrary";

// Attention : ici fetchRecentChanges doit accepter un paramètre optionnel pour forcer le bypass cache
const fetchRecentChanges = async (): Promise<RecentChange[]> => {
  const url = `https://openlibrary.org/recentchanges.json?limit=10&_=${Date.now()}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erreur lors du chargement des changements récents");
  }
  const data = await response.json();
  return data;
};

const Home = () => {
  const [changes, setChanges] = useState<RecentChange[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadChanges = () => {
    setLoading(true);
    setError(null);
    fetchRecentChanges()
      .then(setChanges)
      .catch((err: unknown) => {
        if (err instanceof Error) setError(err.message);
        else setError(String(err));
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadChanges();

    const intervalId = setInterval(() => {
      loadChanges();
    }, 30000); // toutes les 30 secondes

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section>
      <h2>Changements récents</h2>

      <button
        onClick={loadChanges}
        disabled={loading}
        style={{ marginBottom: "1rem" }}
      >
        {loading ? "Chargement..." : "Actualiser"}
      </button>

      {error && <p style={{ color: "red" }}>Erreur : {error}</p>}

      {!loading && !error && (
        <ul>
          {changes.map((change) => (
            <li key={change.key} style={{ marginBottom: "1rem" }}>
              <strong>{change.type}</strong> -{" "}
              {change.comment ?? "Pas de commentaire"} <br />
              Par : {change.author_name ?? "Anonyme"} <br />
              Le : {new Date(change.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      )}

      {loading && !error && <p>Chargement des changements récents...</p>}
    </section>
  );
};

export default Home;
