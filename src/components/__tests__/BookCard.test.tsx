import { render, screen } from "@testing-library/react";
import BookCard from "../BookCard";
import { MemoryRouter } from "react-router-dom";
import { test, expect } from "vitest";

const mockBook = {
  key: "/works/OL123W",
  title: "Test Book",
  author_name: ["John Doe"],
  cover_i: 123456,
};

test("affiche le titre et l’auteur", () => {
  render(
    <MemoryRouter>
      <BookCard book={mockBook} />
    </MemoryRouter>
  );

  expect(screen.getByText("Test Book")).toBeInTheDocument();
  expect(screen.getByText("John Doe")).toBeInTheDocument();
});
