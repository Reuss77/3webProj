export interface WikiThumbnail {
  source: string;
  width: number;
  height: number;
}

export interface WikiPage {
  pageid: number;
  title: string;
  extract: string;
  thumbnail?: WikiThumbnail;
}

export async function fetchWikiInfo(title: string): Promise<WikiPage | null> {
  if (!title) return null;

  const url =
    `https://fr.wikipedia.org/w/api.php?` +
    new URLSearchParams({
      action: "query",
      format: "json",
      origin: "*",
      prop: "extracts|pageimages",
      exintro: "1",
      explaintext: "1",
      piprop: "thumbnail",
      pithumbsize: "300",
      titles: title,
    });

  try {
    const response = await fetch(url);
    const data = await response.json();

    const pages = data.query?.pages;
    if (!pages) return null;

    const page = Object.values(pages)[0] as WikiPage;
    return page;
  } catch {
    return null;
  }
}
