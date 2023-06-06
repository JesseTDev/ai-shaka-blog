'use client'
import Image from 'next/image';
import React from 'react';
import Banner from 'public/assets/banner.jpeg';
import { EnvelopeIcon } from '@heroicons/react/24/solid';  
import TopBar from './TopBar';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

const Navbar = () => {
  const hoverClass = 'hover:opacity-70';
  return (
    <header className='mb-5'>
      <TopBar />
    <nav className='flex justify-between items-center w-full bg-cyan-900 text-white px-10 py-4'>
        <div className='hidden sm:block cursor-pointer font-bold hover:opacity-70'><a href='/'>Shaka Blog 🤙</a></div>
        <div className='flex justify-between items-center gap-10'>
        <ScrollLink
          className={hoverClass}
          style={{cursor: 'pointer'}}
          activeClass="active"
          to="trending"
          spy={true}
          smooth={true}
          duration={800}
          >
          Trending
          </ScrollLink>
          <ScrollLink
          className={hoverClass}
          style={{cursor: 'pointer'}}
          activeClass="active"
          to="surfing"
          spy={true}
          smooth={true}
          duration={800}
          >
         Surfing
          </ScrollLink>
          <ScrollLink
          className={hoverClass}
          style={{cursor: 'pointer'}}
          activeClass="active"
          to="travel"
          spy={true}
          smooth={true}
          duration={800}
          >
          Travel
          </ScrollLink>
        </div>
        <div>
            <a href="mailto:jessetaylordev5@gmail.com" target='_blank'><EnvelopeIcon className="h-6 w-6 text-white cursor-pointer hover:opacity-80 transition-all duration-100" /></a>
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
