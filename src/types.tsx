export interface newsFeedInterface {
  source?: {
    id?: string | null;
    name?: string;
  };
  title: string;
  content: string;
  description?: string;
  url?: string;
  author?: string | null;
  urlToImage?: string | null;
  publishedAt?: string;
}
