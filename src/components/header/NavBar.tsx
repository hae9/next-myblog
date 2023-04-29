import Link from 'next/link';
import React from 'react';

const navigation = [
  { main: 'Home', link: '/', sub: [] },
  {
    main: '#Tag',
    link: '/tag',
    sub: [
      { label: '#life', link: '/tag/life' },
      { label: '#tech', link: '/tag/tech' },
      { label: '#travel', link: '/tag/travel' },
    ],
  },
  { main: 'Posts', link: '/posts', sub: [] },
  { main: 'Author', link: '/author', sub: [] },
  { main: 'Contact', link: '/contact', sub: [] },
];

export default function NavBar() {
  return (
    <nav className="w-1/2 h-12 my-10 bg-uWhite shadow-md font-serif">
      <ul className="px-5 w-full h-full flex justify-between items-center">
        {navigation.map((menu) => (
          <li key={menu.main} className="text-uPrimary hover:text-uRed">
            <Link href={menu.link}>{menu.main}</Link>
            {menu.sub.length !== 0 ? null : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
