import { get3Articles } from '@/service/articles';
import React from 'react';
import SmallArticle from '@/components/footer/SmallArticle';

export default async function SmallArticles() {
  const articles = await get3Articles();

  return (
    <div className="flex flex-col gap-3">
      {articles.map((article) => (
        <SmallArticle key={article.title} article={article} />
      ))}
    </div>
  );
}
