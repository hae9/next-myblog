import { get3Articles } from '@/service/articles';
import React from 'react';
import SliderContent from './animation/SliderContent';

export default async function Slider() {
  const threePosts = await get3Articles();

  return (
    <div className="w-full px-36 mt-10 mb-16 relative">
      <SliderContent contents={threePosts} />
    </div>
  );
}
