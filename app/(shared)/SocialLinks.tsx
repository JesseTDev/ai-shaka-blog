import React from 'react';
import Image from 'next/image';
import Twitter from '../../public/assets/social_twitter.png';
import Facebook from '../../public/assets/social_facebook.png';
import Instagram from '../../public/assets/social_instagram.png';
import Google from '../../public/assets/social_google.png';


const SocialLinks = () => {
  return (
    <div className='flex justify-between items-center gap-7'>
        <a href='https://twitter.com' target='_blank' rel='noreffer'>
        <Image
        className='brightness-0 hover:opacity-60'
        alt='twitter'
        src={Twitter}
        width={20}
        height={20}
         />
        </a>
        <a href='https://facebook.com' target='_blank' rel='noreffer'>
        <Image
        className='brightness-0 hover:opacity-60'
        alt='facebook'
        src={Facebook}
        width={20}
        height={20}
         />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noreffer'>
        <Image
        className='brightness-0 hover:opacity-60'
        alt='instagram'
        src={Instagram}
        width={20}
        height={20}
         />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noreffer'>
        <Image
        className='brightness-0 hover:opacity-60'
        alt='google'
        src={Google}
        width={20}
        height={20}
         />
        </a>
    </div>
  )
};

export default SocialLinks; 