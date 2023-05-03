import React from 'react';
import NavCard from '../NavCard';
import SmallArticles from './SmallArticles';
import Tag from './Tag';
import BlogTitle from '../header/BlogTitle';
import SNS from '../SNS';
import Profile from '../Profile';

export default function Footer() {
  const tags = ['Health', 'Lifestyle', 'Music', 'Tech', 'Travel'];

  return (
    <footer className="w-full px-20 py-16 shadow-inner bg-uBgColor">
      <div className="w-full h-80 flex justify-between gap-14">
        <NavCard title="Latest Articles">
          {/* @ts-expect-error Server Component */}
          <SmallArticles />
        </NavCard>
        <NavCard title="Tag Cloud">
          <div className="w-full flex gap-3 flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        </NavCard>
        <NavCard title="Follow Me!">
          <SNS type="footer" />
        </NavCard>
        <NavCard title="About me">
          <Profile />
        </NavCard>
      </div>
      <div className="w-full flex flex-col items-center justify-center my-12">
        <BlogTitle />
        <p className="font-serif">Published with Vercel</p>
      </div>
    </footer>
  );
}
