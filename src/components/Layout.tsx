import React from "react";
import type { ReactNode } from "react";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="app-container"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <header
        style={{
          padding: "1rem 2rem",
          backgroundColor: "var(--color-primary)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "960px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "48px", height: "48px", borderRadius: "50%" }}
            />
            <h1 style={{ fontSize: "1.8rem", margin: 0 }}>
              Bibliothèque de la ville
            </h1>
          </div>
          <ThemeToggle />
        </div>

        <div style={{ width: "100%", maxWidth: "960px" }}>
          <SearchBar />
        </div>
      </header>

      <main
        style={{
          flex: 1,
          padding: "2rem",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        {children}
      </main>

      <footer
        style={{
          padding: "1rem",
          textAlign: "center",
          backgroundColor: "#f0f0f0",
          color: "#333",
        }}
      >
        <p>© 2025 Bibliothèque municipale</p>
      </footer>
    </div>
  );
};

export default Layout;
