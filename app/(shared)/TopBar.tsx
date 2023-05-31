import Link from 'next/link'
import React from 'react'
import SocialLinks from './SocialLinks';

const TopBar = () => {
    return (
        <header>
        <nav className='flex justify-between items-center w-full bg-white text-wh-800 border-b-2 px-10 py-2'>
            <div><SocialLinks /></div>
            <div className='flex justify-between items-center gap-10'>
                <Link href='/'></Link>
            </div>
            <div>
                <p>Log in</p>
            </div>
        </nav>
        </header>
      )    
};

export default TopBar; 