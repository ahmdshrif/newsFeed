export interface newsFeedInterface {
  source: {
    id?: string | null;
    name?: string;
  };
  title: string;
  description: string;
  content: string;
  url: string;
  author?: string | null;
  urlToImage?: string | null;
  publishedAt?: string;
}
