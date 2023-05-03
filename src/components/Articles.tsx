'use client';
import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import { Article } from '@/service/articles';

export default function Articles({ articles }: { articles: Article[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(articles.length / 3);

  return (
    <>
      {articles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </>
  );
}
