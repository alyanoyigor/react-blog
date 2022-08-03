export type Book = {
  _id: string;
  title: string;
  description: string;
  date: string;
  pages: number;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type BookCreate = {
  title: string;
  description: string;
  pages: number;
  excerpt: string;
};

export type BookUpdate = {
  title: string;
  description: string;
  pages: number;
  excerpt: string;
};
