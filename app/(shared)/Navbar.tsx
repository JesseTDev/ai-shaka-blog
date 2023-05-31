import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='mb-5'>
    <nav className='flex justify-between items-center w-full bg-cyan-900 text-white px-10 py-4'>
        <div className='hidden sm:block'>Shaka Blog 🤙</div>
        <div className='flex justify-between items-center gap-10'>
            <Link href='/'>Home</Link>
            <Link href='/'>Trending</Link>
            <Link href='/'>About</Link>
        </div>
        <div>
            <p>ChatGPT</p>
        </div>
    </nav>
    <div className='flex justify-center py-5'>
    <h2 className='font-bold text-xl text-center'>Educational blog for Surfers and Travelers</h2>
    </div>
    <div className='flex justify-between gap-8 mt-2 mb-4 mx-10'>
        <div className='basis-full relative w-auto h-32 rounded-md bg-gray-500'>
            Image right here
        </div>
    </div>
    <hr className='border-1 mx-10' /> 
    </header>
  )
}

export default Navbar; 