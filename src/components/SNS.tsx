import Link from 'next/link';
import React from 'react';
import { SiVelog, SiGithub, SiInstagram } from 'react-icons/si';

const snsList = [
  { icon: <SiVelog size={23} />, link: 'https://velog.io/@hae9', color: 'text-[#20C997]', bg: 'bg-[#20C997]' },
  { icon: <SiGithub size={23} />, link: 'https://github.com/hae9', color: 'text-[#0D1117]', bg: 'bg-[#0D1117]' },
  { icon: <SiInstagram size={23} />, link: 'https://www.instagram.com/hae_9/', color: 'text-uInstagram', bg: 'bg-uInstagram' },
];

export default function SNS({ type }: { type: 'header' | 'footer' }) {
  return (
    <ul className="self-end flex gap-7">
      {type === 'header' ? (
        <ul className="self-end flex gap-7">
          {snsList.map((sns) => (
            <li key={sns.link} className={sns.color}>
              <Link href={sns.link}>{sns.icon}</Link>
            </li>
          ))}
        </ul>
      ) : (
        snsList.map((sns) => (
          <li key={sns.link} className={`${sns.bg} w-16 h-16 text-white flex justify-center`}>
            <div className="self-center w-[3.6rem] h-[3.6rem] flex justify-center border border-white">
              <Link className="self-center" href={sns.link}>
                {sns.icon}
              </Link>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}
