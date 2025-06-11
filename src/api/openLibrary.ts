export interface RecentChange {
  type: string;
  key: string;
  author_name?: string;
  comment?: string;
  timestamp: string;
}

export interface Author {
  name: string;
}

export interface Cover {
  small: string;
  medium: string;
  large: string;
}

export interface BookDetails {
  title: string;
  authors?: Author[];
  publish_date?: string;
  cover?: Cover;
  subjects?: string[];
}

export interface SearchBookResult {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
}

interface AuthorRef {
  author: {
    key: string;
  };
}

export interface SearchResultDoc {
  key: string; // ex: "/works/OL45883W"
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
  subject?: string[];
}

export interface SearchResult {
  numFound: number;
  docs: SearchResultDoc[];
}

export async function searchBooksAdvanced(params: {
  title?: string;
  author?: string;
  subject?: string;
  year?: string;
}): Promise<SearchResult> {
  const queryParts: string[] = [];

  if (params.title)
    queryParts.push(`title=${encodeURIComponent(params.title)}`);
  if (params.author)
    queryParts.push(`author=${encodeURIComponent(params.author)}`);
  if (params.subject)
    queryParts.push(`subject=${encodeURIComponent(params.subject)}`);
  if (params.year)
    queryParts.push(`first_publish_year=${encodeURIComponent(params.year)}`);

  const url = `https://openlibrary.org/search.json?${queryParts.join(
    "&"
  )}&limit=20`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Erreur lors de la recherche avancée");
  return response.json();
}

export async function fetchRecentChanges(): Promise<RecentChange[]> {
  const response = await fetch(
    "https://openlibrary.org/recentchanges.json?limit=10"
  );
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des changements récents");
  }
  const data = await response.json();
  return data;
}

export async function fetchBookDetails(id: string): Promise<BookDetails> {
  const url = `https://openlibrary.org/works/${id}.json`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Erreur lors de la récupération des détails du livre (status ${response.status})`
    );
  }
  const data = await response.json();

  const authors: Author[] | undefined = data.authors
    ? await Promise.all(
        data.authors.map(async (authorRef: AuthorRef) => {
          const res = await fetch(
            `https://openlibrary.org${authorRef.author.key}.json`
          );
          if (!res.ok) {
            return { name: "Auteur inconnu" };
          }
          const authorData = await res.json();
          return { name: authorData.name };
        })
      )
    : undefined;

  const cover: Cover | undefined =
    data.covers && data.covers.length > 0
      ? {
          small: `https://covers.openlibrary.org/b/id/${data.covers[0]}-S.jpg`,
          medium: `https://covers.openlibrary.org/b/id/${data.covers[0]}-M.jpg`,
          large: `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`,
        }
      : undefined;

  const publishDate = data.publish_date ?? data.created?.value;

  const subjects: string[] | undefined = data.subjects ?? undefined;

  return {
    title: data.title,
    authors,
    publish_date: publishDate,
    cover,
    subjects,
  };
}

export async function searchBooks(query: string): Promise<SearchResult> {
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
    query
  )}&limit=10`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Erreur lors de la recherche: status ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function fetchSearchResults(
  query: string
): Promise<SearchResultDoc[]> {
  const searchData = await searchBooks(query);
  return searchData.docs.map((doc) => ({
    key: doc.key,
    title: doc.title,
    author_name: doc.author_name,
    first_publish_year: doc.first_publish_year,
    cover_i: doc.cover_i,
    subject: doc.subject,
  }));
}
