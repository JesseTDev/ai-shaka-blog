import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Banner from 'public/assets/banner.jpeg';  


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
            <p>AI Powered Blog 🤖</p>
        </div>
    </nav>
    <div className='flex justify-center py-5'>
    <h2 className='font-bold text-xl text-center'>A Blog for Surfers and Travelers</h2>
    </div>
    <div className='flex justify-between gap-8 mt-2 mb-4 mx-10'>
  <div className='basis-full relative w-auto h-80 rounded-md overflow-visible'>
  <Image
  fill
  alt='trending'
  sizes="(max-width: 480px) 100vw,
          (max-width: 768px) 75vw,
          (max-width: 1060px) 50vw,
          33vw"
  src={Banner}
  style={{ objectFit: 'cover', filter: 'brightness(60%)', borderRadius: '8px' }}
/>

    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
      <h1 className='text-white font-bold text-6xl text-center'>WELCOME TO THE SHAKA BLOG!</h1>
    </div>
  </div>
</div>
    <hr className='border-1 mx-10' /> 
    </header>
  )
}

export default Navbar; 