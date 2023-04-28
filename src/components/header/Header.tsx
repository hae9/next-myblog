import React from 'react';
import SNS from '../SNS';
import SearchTab from './SearchTab';
import NavBar from './NavBar';
import BlogTitle from './BlogTitle';

export default function Header() {
  return (
    <header className="px-36 py-16">
      <div className="w-full grid grid-cols-3 justify-items-stretch">
        <SNS type="header" />
        <BlogTitle />
        <SearchTab />
      </div>
      <div className="flex justify-center">
        <NavBar />
      </div>
    </header>
  );
}
