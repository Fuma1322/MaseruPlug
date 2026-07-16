'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';

export default function Navbar() {
  const [state, setState] = useState(false);
  const message = encodeURIComponent(
    'Hello MaseruPlug, I am interested in listing my business on your platform. Please share more details.'
  );

  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'Categories', path: '/categories' },
    { title: 'About Us', path: '/about' },
    { title: 'Join The Plug', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 m-0 w-full bg-white p-0 md:border-none md:text-sm">
      <div className="mx-auto max-w-screen-xl items-center px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          <Link href="/">
            <h2 className="text-2xl font-extrabold">
              <span className="text-[#25D366]">Maseru</span>Plug
            </h2>
          </Link>
          <div className="hidden">
            <button className="text-gray-500 hover:text-gray-800" onClick={() => setState(!state)}>
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="mt-8 hidden flex-1 pb-3 md:mt-0 md:block md:pb-0">
          <ul className="items-center justify-end space-y-10 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="font-semibold text-black hover:text-gray-600">
                  <Link href={item.path} className="mr-20 block">
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <div className="flex flex-col gap-x-6 gap-y-4 md:flex-row md:space-y-0">
              <Button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#25D366_20%,#13a047_50%,#25D366_80%)] bg-[length:200%_100%] px-6 font-bold text-[#111111] lg:w-[210px]">
                <Link href={`https://wa.me/26663272145?text=${message}`} target="_blank">
                  Contact On WhatsApp
                </Link>
              </Button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
