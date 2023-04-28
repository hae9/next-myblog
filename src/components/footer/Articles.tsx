import { get3Articles } from '@/service/articles';
import React from 'react';
import Article from '@/components/footer/Article';

export default async function Articles() {
  const articles = await get3Articles();

  return (
    <div className="flex flex-col gap-3">
      {articles.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
}
