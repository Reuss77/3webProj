import { render, screen, fireEvent } from "@testing-library/react";
import BookDetailsPage from "../BookDetails";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { test, expect, vi } from "vitest";

const mockBook = {
  title: "Test Book",
  authors: [{ name: "Jane Doe" }],
  publish_date: "2000",
  cover: { medium: "https://example.com/cover.jpg" },
  subjects: ["Test"],
};

vi.mock("../../api/openLibrary", () => ({
  fetchBookDetails: () => Promise.resolve(mockBook),
}));

vi.mock("../../api/wikipedia", () => ({
  fetchWikiInfo: () => Promise.resolve(null),
}));

test("affiche les détails du livre et change le thème", async () => {
  render(
    <MemoryRouter initialEntries={["/book/OL123W"]}>
      <Routes>
        <Route path="/book/:id" element={<BookDetailsPage />} />
      </Routes>
    </MemoryRouter>
  );

  expect(await screen.findByText("Test Book")).toBeInTheDocument();

  const toggleButton = screen.getByRole("button", { name: /thème/i });
  fireEvent.click(toggleButton);

  expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
});
