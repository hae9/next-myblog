'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Article } from '@/service/articles';
import Image from 'next/image';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const variants = {
  hidden: { opacity: 0.5 },
  visible: { opacity: 1 },
};

export default function SliderContent({ contents }: { contents: Article[] }) {
  const [page, setPage] = useState(0);
  const maxPage = contents.length - 1;
  const handlePrev = () => {
    page === 0 ? setPage(maxPage) : setPage(page - 1);
  };
  const handleNext = () => {
    page === maxPage ? setPage(0) : setPage(page + 1);
  };
  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={page}
          className="w-full h-[400px] overflow-hidden relative"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            opacity: { duration: 0.3 },
          }}
        >
          <Image src={contents[page].image} alt={contents[page].title} style={{ objectFit: 'cover' }} fill={true} />
          <div className="flex">
            {contents[page].categories.map((tag) => (
              <p key={tag}># {tag}</p>
            ))}
          </div>
          <h3 className="text-[45px] text-center text-uWhite font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{contents[page].title}</h3>
        </motion.div>
      </AnimatePresence>
      <button className={arrowIcon('left')} onClick={handlePrev}>
        <AiOutlineArrowLeft />
      </button>
      <button className={arrowIcon('right')} onClick={handleNext}>
        <AiOutlineArrowRight />
      </button>
    </>
  );
}

const arrowIcon = (direction: string) => {
  const className = `absolute ${
    direction === 'left' ? 'left' : 'right'
  }-40 top-1/2 -translate-y-1/2 bg-uRed rounded-full w-10 h-10 flex items-center justify-center text-uWhite`;

  return className;
};
