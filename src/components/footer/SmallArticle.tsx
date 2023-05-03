import { Article } from '@/service/articles';
import Image from 'next/image';
import React from 'react';
import UnderlineHeading from '../animation/UnderlineHeading';

export default function SmallArticle({ article }: { article: Article }) {
  const { date, title, image } = article;

  return (
    <div className="w-full flex justify-between gap-2">
      <div>
        {image ? (
          <div className="w-16 h-16 overflow-hidden relative">
            <Image src={image} alt={title} style={{ objectFit: 'cover' }} fill={true} />
          </div>
        ) : (
          <div className="w-16 h-16 bg-uYellow" />
        )}
      </div>
      <div className="w-5/6">
        <UnderlineHeading text={title} size="small" />
        <p className="font-serif font-light text-xs">{date.toString()}</p>
      </div>
    </div>
  );
}
