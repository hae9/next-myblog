import React from 'react';

const tags = [
  { title: 'Health', color: 'text-uYellow' },
  { title: 'Lifestyle', color: 'text-uTwitter' },
  { title: 'Music', color: 'text-uInstagram' },
  { title: 'Tech', color: 'text-uFeed' },
  { title: 'Travel', color: 'text-uSkyBlue' },
];

export default function Tags() {
  return (
    <div className="w-full flex gap-3 flex-wrap">
      {tags.map((tag) => (
        <div key={tag.title} className="bg-uWhite px-3 py-1 text-sm text-uFontColor shadow-md">
          <span className={tag.color}>{`# `}</span>
          {tag.title}
        </div>
      ))}
    </div>
  );
}
