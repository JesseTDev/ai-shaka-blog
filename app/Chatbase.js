'use client'

import React, {useState} from 'react';
import { ChatBubbleLeftEllipsisIcon, XCircleIcon } from '@heroicons/react/24/solid';

const Iframe = ({ src }) => {

  const [openChat, setOpenChat] = useState(false); 

  const handleOpenChat = () => {
    setOpenChat(!openChat); 
  };

  return (
    <div className='flex justify-center rounded-lg items-center cursor-pointer bg-gray-800 text-white hover:border-gray-800 hover:bg-gray-200 hover:text-gray-800 transition-all duration-300'>

      <div onClick={handleOpenChat}>
     {openChat ? <iframe
        src={src}
        className='border-0'
        style={{ width: '100%', height: '400px' }}
        allowFullScreen
      ></iframe> : <div className='flex w-100 items-center justify-centersticky top-0'>
      <div className='flex'><p className='font-bold text-md py-1 px-2'>Ask Us A Question</p><ChatBubbleLeftEllipsisIcon style={{color: '#29d49e', width: '30px'}}/></div>
    </div>}

    {openChat && <div className='flex justify-center cursor-pointer'><XCircleIcon style={{width: '22px', marginRight: '5px'}} /><p className='py-1'>Close Chat</p></div>}
    </div>
    </div>
  );
};

export default Iframe;

