import React from 'react';
import NavCard from './NavCard';
import SmallArticles from './footer/SmallArticles';
import Tag from './footer/Tag';
import SNS from './SNS';
import Advertising from './Advertising';

export default function SideBar() {
  const tags = ['Health', 'Lifestyle', 'Music', 'Tech', 'Travel'];

  return (
    <aside className="w-fit h-fit hidden xl:flex flex-col gap-20">
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
      <NavCard title="Social">
        <SNS type="footer" />
      </NavCard>
      <NavCard title="Advertising">
        <Advertising />
      </NavCard>
    </aside>
  );
}
