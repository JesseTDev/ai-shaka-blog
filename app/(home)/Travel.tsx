import { Post } from '@prisma/client';
import React from 'react'; 
import Card from '../(shared)/Card';

type Props = {
  travelPosts: Array<Post>; 
};

const Travel = ({travelPosts}: Props) => {

  return (
    <section id='travel' className='mt-10 mb-16'>
     <hr className='border-1' /> 
     <div className='flex items-center gap-3 my-8'>
    <h4 className='bg-cyan-900 rounded-md py-2 px-5 text-white text-sm font-bold'>TRAVEL</h4>
    <p className='font-bold text-2xl'>Top Travel Blogs & Experiences</p>
        </div>

        <Card post={travelPosts[1]} className='rounded-md sm:flex justify-between items-center gap-3 mt-7 mb-5' imageHeight='h-80' />

      <div className='sm:flex justify-between gap-8'>
      <Card post={travelPosts[2]} className='basis-1/3 rounded-md mt-5 sm:mt-0' imageHeight='h-80' />
      <Card post={travelPosts[3]}  className='basis-1/3 rounded-md mt-5 sm:mt-0' imageHeight='h-80' />
      <Card post={travelPosts[4]} className='basis-1/3 rounded-md mt-5 sm:mt-0' imageHeight='h-80' />
      </div>
    </section>
  )
}

export default Travel; 