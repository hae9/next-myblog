import React from 'react';
import NavCard from './NavCard';
import Articles from './footer/Articles';
import Tags from './footer/Tags';
import SNS from './SNS';
import Advertising from './Advertising';

export default function SideBar() {
  return (
    <aside className="w-1/3 flex flex-col gap-20">
      <NavCard title="Latest Articles">
        {/* @ts-expect-error Server Component */}
        <Articles />
      </NavCard>
      <NavCard title="Tag Cloud">
        <Tags />
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
