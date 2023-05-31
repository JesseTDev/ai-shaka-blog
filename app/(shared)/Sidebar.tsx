import React from 'react';
import SocialLinks from './SocialLinks';
import Subscribe from './Subscribe';

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
    <h4 className='bg-cyan-800 rounded-md py-3 px-5 text-white text-xs font-bold text-center'>Subscribe to Shaka Blog 🌴</h4>
    <div className='my-5 mx-5'>
     <SocialLinks />
    </div>
    <Subscribe />
    <div className='bg-gray-800 my-8'>advert image</div>
    </section>
  )
}; 

export default Sidebar;