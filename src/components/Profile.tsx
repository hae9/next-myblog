import React from 'react';

export default function Profile() {
  return (
    <div>
      <div className="flex gap-5 mb-3">
        <div className="w-16 h-16 rounded-full bg-uSkyBlue"></div>
        <div className="flex flex-col gap-1 py-2">
          <h5 className="font-bold text-uFontColor">Haekyung Kang</h5>
          <span className="font-serif text-uFontColor">Frontend Developer</span>
        </div>
      </div>
      <div className="font-serif text-uFontColor leading-6">
        Hello! My name is Jonathan Doe working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our
        ticket system.
      </div>
    </div>
  );
}
