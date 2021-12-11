export type Image = {
  small?: string;
  medium?: string;
  large?: string;
  original?: string;
};

export interface TvShow {
  id: string;
  summary: string;
  image: Image;
}

export interface Episode {
  id: string;
  url: string;
  image: Image;
  name: string;
  number: number;
  summary: string;
}
