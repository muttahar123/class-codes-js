import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className='flex gap-20 bg-red-200 py-8 cursor-pointer items-center justify-center font-bold text-xl'>
      <Link href='/'>
        <h1>Home</h1>
      </Link>
      <Link href='/about'>
        <h1>About</h1>
      </Link>
      <Link href='/blogs'>
        <h1>Blogs</h1>
      </Link>
      <Link href='/contact'>
        <h1>Contact</h1>
      </Link>
    </div>
  );
}
