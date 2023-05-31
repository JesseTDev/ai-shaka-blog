import React from 'react'; 
import Card from '../(shared)/Card';

type Props = {}

const Travel = (props: Props) => {
  return (
    <section className='mt-10 mb-16'>
     <hr className='border-1' /> 
     <div className='flex items-center gap-3 my-8'>
    <h4 className='bg-cyan-900 rounded-md py-2 px-5 text-white text-sm font-bold'>TRAVEL</h4>
    <p className='font-bold text-2xl'>Top Travel Blogs & Experiences</p>
        </div>

        <Card className='bg-gray-500 rounded-md sm:flex justify-between items-center gap-3 mt-7 mb-5' imageHeight='h-80' />

      <div className='sm:flex justify-between gap-8'>
      <Card className='basis-1/3 bg-gray-500 rounded-md mt-5 sm:mt-0' imageHeight='h-80' />
      <Card className='basis-1/3 bg-gray-500 rounded-md mt-5 sm:mt-0' imageHeight='h-80' />
      <Card className='basis-1/3 bg-gray-500 rounded-md mt-5 sm:mt-0' imageHeight='h-80' />
      </div>
    </section>
  )
}

export default Travel; 