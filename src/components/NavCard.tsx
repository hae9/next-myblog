import React from 'react';

type Props = {
  title: string;
  children: any;
};

export default function NavCard({ title, children }: Props) {
  return (
    <div className="w-72 h-full mx-auto">
      <div className="flex gap-5 items-center mb-5">
        <h3 className="text-2xl font-bold text-uPrimary">{title}</h3>
        <div className="h-[1px] flex-grow bg-uRed"></div>
      </div>
      {children}
    </div>
  );
}
