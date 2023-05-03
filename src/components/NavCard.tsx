import React from 'react';

type Props = {
  title: string;
  children: any;
};

export default function NavCard({ title, children }: Props) {
  return (
    <div className="w-80 h-full">
      <div className="flex gap-5 items-center mb-5">
        <h3 className="text-2xl font-bold text-uPrimary">{title}</h3>
        <div className="h-[2.5px] flex-grow bg-uRed"></div>
      </div>
      {children}
    </div>
  );
}
