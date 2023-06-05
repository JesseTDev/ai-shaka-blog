import Link from 'next/link'
import React from 'react'
import SocialLinks from './SocialLinks';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const TopBar = () => {
    return (
        <div>
        <div className='flex justify-between items-center w-full bg-white text-wh-800 border-b-2 px-10 py-2'>
            <div><SocialLinks /></div>
            <div className='flex justify-between items-center gap-10'>
                <Link href='/'></Link>
            </div>
            <div className='flex cursor-pointer hover:opacity-70'>
                <p>Login</p>
                <UserCircleIcon style={{width: '20px', marginLeft: '5px'}}/>
            </div>
        </div>
        </div>
      )    
};

export default TopBar; 