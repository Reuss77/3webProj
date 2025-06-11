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
