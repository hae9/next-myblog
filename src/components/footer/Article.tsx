import { Article } from '@/service/articles';
import Image from 'next/image';
import React from 'react';

export default function Article({ article }: { article: Article }) {
  const { date, title, image } = article;

  return (
    <div className="w-full flex justify-between gap-2">
      <div>{image ? <Image src={image} alt="article-image" /> : <div className="w-16 h-16 bg-uYellow" />}</div>
      <div>
        <h5 className="text-uPrimary font-bold text-sm">{title}</h5>
        <span className="font-serif font-light text-xs">{date.toString()}</span>
      </div>
    </div>
  );
}
