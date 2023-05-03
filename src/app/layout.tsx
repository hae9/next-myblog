import './globals.css';
import { Josefin_Sans, Source_Serif_Pro } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import SideBar from '@/components/SideBar';
import React from 'react';

const sourceSerifPro = Source_Serif_Pro({
  weight: ['200', '300', '400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-source-serif-pro',
});
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
});

export const metadata = {
  title: 'My Blog',
  description: 'Generated by create next app',
};

console.log(josefinSans.variable);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${sourceSerifPro.variable} ${josefinSans.variable}`}>
      {/* <ThemeProvider defaultTheme='light' attribute='class'> */}
      <body className="bg-uBgColor">
        <Header />
        <main className="w-full flex px-36 mb-16 justify-between">
          {children}
          <SideBar />
        </main>
        <Footer />
      </body>
      {/* </ThemeProvider> */}
    </html>
  );
}
