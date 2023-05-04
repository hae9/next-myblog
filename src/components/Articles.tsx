'use client';
import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import { Article } from '@/service/articles';

export default function Articles({ articles }: { articles: Article[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(articles.length / 3);
  const [first, last] = [currentPage * 3 - 3, currentPage * 3];

  const getPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const getNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {articles.slice(first, last).map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
      <div className="w-fit mx-auto flex gap-5 items-center">
        {currentPage !== 1 && (
          <button className="bg-uRed px-3 py-1 text-uWhite" onClick={getPrevPage}>
            Previous
          </button>
        )}
        <p className="font-serif">
          pages {currentPage} of {pages}
        </p>

        {currentPage < pages && (
          <button className="bg-uRed px-3 py-1 text-uWhite" onClick={getNextPage}>
            Next
          </button>
        )}
      </div>
    </>
  );
}
