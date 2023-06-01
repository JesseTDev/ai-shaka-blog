'use client'

import { FormattedPost } from '@/app/types';
import React, {useState} from 'react';
import { XMarkIcon, PencilSquareIcon} from '@heroicons/react/24/solid';
import Image from 'next/image';
import SocialLinks from '@/app/(shared)/SocialLinks';

type Props = {
    post: FormattedPost
}; 

const Content = ({post}: Props) => {
    const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");
  const [tempTitle, setTempTitle] = useState<string>(title);

  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>("");
  const [tempContent, setTempContent] = useState<string>(content);

  const date = new Date(post?.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);

  const handleSubmit = () => {

  }; 
  
  return (
    <div className='prose w-full max-w-full mb-10'>
      {/* breadcrumbs */}
 <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>

 {/* Category edit */}
 <div className='flex justify-between items-center'>
    <h4 className='bg-cyan-800 py-2 px-5 text-white text-sm font-bold rounded-md'>{post.category}</h4>
    <div className='mt-4'>
      {isEditable ? (
        <div className='flex justify-between gap-3'>
          <button onClick={() => console.log('cancel edit')}>
            <XMarkIcon className='h-6 w-6'/>
          </button>
         </div>
      ) : (
        <button onClick={() => console.log('make edit')}>
        <PencilSquareIcon className='h-6 w-6'/>
      </button>
      )
}
    </div>
 </div>

 <form onSubmit={handleSubmit}>
   {/* header */}
  <>
  {isEditable ? (
    <div>
      <textarea 
      className='border-2 rounded-md bg-gray-100 p-3 w-full'
      placeholder='Title'
      onChange={(e) => console.log('change title', e.target.value)}
      value={title}
      />
    </div>
  ) : (
    <h3 className='font-bold text-3xl mt-3'>{title}</h3>
  )}

  <div className='flex gap-3'>
    <h5 className='font-semibold text-xs'>By {post.author}</h5>
    <h6 className='text-gray-700 text-xs'>{post.createdAt}</h6>
  </div>
  </>

  {/* img */}
  <div className='flex justify-center'>
  <div className='relative w-[600px] mt-2 mb-16 h-96'>
    <Image 
    fill
    src={post.image} 
    alt={post.title} 
    sizes='(max-width: 480px) 100vw,
    (max-width: 768px) 85wv,
    (max-width: 1060px) 75vw,
    60vw' 
    style={{objectFit: 'cover', borderRadius: '10px'}}
    />
  </div>
  </div>

  {/* submit */}
{isEditable && (
  <div className='flex justify-end'>
    <button className='hover:opacity-70 text-white font-semibold py-2 px-5 mt-5' type='submit'></button>
  </div>
)}
 </form>
 {/* socials */}
 <div className='hidden md:block mt-10 w-1/3'>
  <SocialLinks />
 </div>
    </div>
  )
}

export default Content