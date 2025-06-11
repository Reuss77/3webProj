// src/pages/__tests__/SearchResults.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import SearchResults from "../SearchResults";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { vi, type Mock } from "vitest";

// Mock de la fonction fetchSearchResults de l'API
vi.mock("../../api/openLibrary", () => ({
  fetchSearchResults: vi.fn(),
}));

import { fetchSearchResults } from "../../api/openLibrary";

const mockResults = [
  { key: "/works/OL1W", title: "Test Book 1", author_name: ["Author A"] },
  { key: "/works/OL2W", title: "Test Book 2", author_name: ["Author B"] },
];

// Fonction utilitaire pour éviter la répétition du rendu avec router
const renderWithRouter = (initialEntries: string[]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </MemoryRouter>
  );
};

test("affiche les résultats de recherche", async () => {
  (fetchSearchResults as Mock).mockResolvedValue(mockResults);

  renderWithRouter(["/search?q=test"]);

  expect(await screen.findByText("Test Book 1")).toBeInTheDocument();
  expect(await screen.findByText("Test Book 2")).toBeInTheDocument();
});

test("affiche message de chargement pendant la requête", async () => {
  let resolvePromise: (value: unknown) => void;
  const promise = new Promise((resolve) => {
    resolvePromise = resolve;
  });
  (fetchSearchResults as Mock).mockReturnValue(promise);

  renderWithRouter(["/search?q=test"]);

  expect(screen.getByText(/chargement des résultats/i)).toBeInTheDocument();

  resolvePromise!(mockResults);

  await waitFor(() => {
    expect(
      screen.queryByText(/chargement des résultats/i)
    ).not.toBeInTheDocument();
  });
});

test("affiche message quand aucun résultat", async () => {
  (fetchSearchResults as Mock).mockResolvedValue([]);

  renderWithRouter(["/search?q=unknown"]);

  expect(await screen.findByText(/aucun résultat trouvé/i)).toBeInTheDocument();
});

test("affiche message d'erreur en cas d'échec", async () => {
  (fetchSearchResults as Mock).mockRejectedValue(new Error("Erreur réseau"));

  renderWithRouter(["/search?q=test"]);

  expect(
    await screen.findByText(/erreur : erreur réseau/i)
  ).toBeInTheDocument();
});
