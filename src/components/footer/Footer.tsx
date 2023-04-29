import React from 'react';
import NavCard from '../NavCard';
import Articles from './Articles';
import Tags from './Tags';
import BlogTitle from '../header/BlogTitle';
import SNS from '../SNS';
import Profile from '../Profile';

export default function Footer() {
  return (
    <footer className="w-full px-20 py-16 shadow-inner bg-uBgColor">
      <div className="w-full h-80 flex justify-between">
        <NavCard title="Latest Articles">
          {/* @ts-expect-error Server Component */}
          <Articles />
        </NavCard>
        <NavCard title="Tag Cloud">
          <Tags />
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
