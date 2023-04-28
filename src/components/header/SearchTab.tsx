import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchTab() {
  return (
    <div className="place-self-end">
      <button className="h-10 w-10 rounded-full bg-uRed flex justify-center items-center">
        <AiOutlineSearch size={20} color="white" />
      </button>
    </div>
  );
}
