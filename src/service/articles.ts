import { readFile } from 'fs/promises';
import path from 'path';

export type Article = {
  title: string;
  date: Date;
  comments: number;
  likes: number;
  description: string;
  categories: string[];
  image: string;
};

export async function get3Articles(): Promise<Article[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Article[]>(JSON.parse)
    .then((articles) => articles.sort((a, b) => (a.date > b.date ? -1 : 1)).slice(0, 3));
}

export async function getAllArticles() {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Article[]>(JSON.parse)
    .then((articles) => articles.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
