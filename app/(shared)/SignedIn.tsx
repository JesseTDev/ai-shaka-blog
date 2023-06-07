import React from 'react'
import { getServerSession } from 'next-auth';
import { authConfig } from '@/lib/auth';
import Image from 'next/image';
import {SiOpenai, SiLinkedin} from 'react-icons/si'; 

const SignedIn = async () => {

 const session = await getServerSession(authConfig); 

  return (
    <div className='h-10 flex items-center justify-between'>
        <div className='flex items-center flex-wrap text-[13px] sm:flex-wrap'>
        <p className='ml-2 font-semibold italic'>Integrated with</p>
        <a href='https://openai.com/' target='_blank' className='font-semibold pl-1 text-red-500 hover:text-red-700'>OpenAi</a>
        <SiOpenai style={{marginLeft: '.5rem', fontSize: '1rem'}} />
        </div>
    <div className='flex justify-end items-center'>
   {session && <p className='font-semibold text-[13px]'>Welcome: {session?.user?.name}</p>}
   {session?.user?.image && <Image src={session.user.image} alt='profile image' width={25} height={25} style={{borderRadius: '50%', margin: '.5rem'}}/>}
    {session ? null : 
    <div className='bg-gray-600 px-10 py-2px rounded-md text-white hover:bg-gray-400 duration-300 flex items-center text-sm'>
    <a href='https://www.linkedin.com/in/jesse-taylor-dev/' target='_blank' className="text-center" style={{margin: '0.5rem'}}>LinkedIn</a>
    <SiLinkedin style={{fontSize: 'inherit'}} />
    </div>}
    </div>
    </div>
  )
}; 

export default SignedIn; 