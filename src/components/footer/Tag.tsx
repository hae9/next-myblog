import React from 'react';

const tags: { [key: string]: string } = {
  health: 'text-uYellow',
  lifestyle: 'text-uTwitter',
  music: 'text-uInstagram',
  tech: 'text-uFeed',
  travel: 'text-uSkyBlue',
};

export default function Tag({ name }: { name: string }) {
  return (
    <div className="w-fit bg-uWhite px-3 py-1 text-sm text-uFontColor shadow-md">
      <span className={tags[name.toLowerCase()]}>{`# `}</span>
      {name}
    </div>
  );
}
