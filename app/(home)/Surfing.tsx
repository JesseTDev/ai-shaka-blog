import React from 'react';
import Card from '../(shared)/Card';

type Props = {}

const Surfing = (props: Props) => {
  return (
    <section>
            <hr className='border-1' /> 
    {/* Header */}
        <div className='flex items-center gap-3 my-8'>
    <h4 className='bg-cyan-900 rounded-md py-2 px-5 text-white text-sm font-bold'>SURFING</h4>
    <p className='font-bold text-2xl'>Lastest Surfing Blogs</p>
        </div>

        <div className='sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5'>

        {/* large */}
        <Card className='bg-gray-500 rounded-md col-span-1 row-span-3' imageHeight='h-96' isLongForm />
        {/* small */}
        <Card className='bg-gray-500 rounded-md col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3' imageHeight='h-48' isSmallCard/>
        <Card className='bg-gray-500 rounded-md col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3' imageHeight='h-48' isSmallCard/>
        <Card className='bg-gray-500 rounded-md col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3' imageHeight='h-48' isSmallCard/>
        
        </div>
    </section>
  )
}

export default Surfing; 