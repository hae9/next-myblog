import { Article } from '@/service/articles';
import Image from 'next/image';
import React from 'react';
import Tag from './footer/Tag';
import getStringDate from '@/utils/getStringDate';
import { AiOutlineComment, AiOutlineFire } from 'react-icons/ai';
import UnderlineHeading from './animation/UnderlineHeading';

export default function ArticleCard({ article }: { article: Article }) {
  const { title, date, comments, likes, description, categories, image } = article;

  return (
    <article className="w-full h-fit bg-uWhite p-14 shadow-md relative">
      <div className="flex flex-col xl:flex-row gap-8 mb-5">
        <div className="w-[150px] h-[150px] overflow-hidden relative">
          <Image src={image} alt={image} style={{ objectFit: 'cover' }} fill={true} />
        </div>
        <div className="w-3/4">
          <UnderlineHeading text={title} />
          <div className="flex items-center gap-3 font-serif text-uGray">
            <p>{getStringDate(date)}</p>
            <div className="w-3 h-[1px] bg-uRed"></div>
            <p className="flex items-center gap-2">
              <AiOutlineComment className="text-uRed" />
              {comments}
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineFire className="text-uRed" />
              {likes}
            </p>
          </div>
        </div>
      </div>
      <p className="font-serif text-uGray mb-8">{description}</p>

      <div className="flex gap-3">
        {categories.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>

      <button className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 px-5 h-10 bg-uBlue text-uWhite">Continue Reading</button>
    </article>
  );
}
