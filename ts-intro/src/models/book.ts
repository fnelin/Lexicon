export interface Book {
  id: number;
  title: string;
  ISBN: number;
  language: string;
  isTranslation: boolean;
  author: Author;
  coverURL?: string;
}

export interface Author {
  name: string;
  born: number;
  photo?: string;
}

export type bookStatus = `Order` | `Wishlist`;
