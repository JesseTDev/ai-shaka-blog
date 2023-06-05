import React from 'react';
import SocialLinks from './SocialLinks';
import Subscribe from './Subscribe';
import Image from 'next/image';
import Ad1 from 'public/assets/ad1.jpeg';
import About from 'public/assets/about.jpeg';
import { ArrowDownIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  return (
    <section>
    <h4 className='text-lg font-bold text-center bg-gray-700 rounded-md text-white'>Subscribe to the Shaka Blog 🌴</h4>
    <div className='flex justify-center'>
    <p className='pt-2'><ArrowDownIcon style={{height:'30px'}}/></p>
    </div>
    <div className='my-5 mx-5'>
     <SocialLinks />
    </div>
    <Subscribe />
    <Image
        className="hidden md:block my-8 w-full"
        alt="advert-1"
        src={Ad1}
        width={500}
        height={1000}
      />
       <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the Blog
      </h4>
      <div className="flex justify-center my-3">
        <Image
          alt="about-profile"
          placeholder="blur"
          src={About}
          style={{ width: "500px", height: "250px", objectFit: "cover", borderRadius: '8px'}}
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Shaka Blog 🤙
      </h4>
      <p className="text-wh-500 text-center text-sm mb-5">
      We blog to educate you radical surfers and travelers on the exciting world of adventure, exploration, and culture. Our mission is to provide valuable insights, tips, and stories that inspire and empower you to embark on incredible journeys.
      </p>
    </section>
  )
}; 

export default Sidebar;