import { Post } from '@prisma/client';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

type Props = {
    post: Post; 
    className?: string;
    imageHeight: string;
    isSmallCard?: boolean;
    isLongForm?: boolean; 
};

function Card({post, className, imageHeight, isSmallCard = false, isLongForm = false}: Props) {
  const {id, title, author, createdAt, image, snippet} = post || {}; 

  const date = new Date(createdAt);
  const options = {day: 'numeric', month: 'long', year: 'numeric'} as any; 
  const formattedDate = date.toLocaleDateString('en-AU', options); 

  return (
    <div className={className}>
        <Link className='basis-full hover:opacity-70' href={`${process.env.NEXT_PUBLIC_URL}/post/${id}`}>
            <div className={`relative w-auto mb-3 ${imageHeight}`}>
            <Image
              fill
              alt='trending'
              sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
              src={image}
  style={{ objectFit: 'cover', borderRadius: '8px' }}
/>
            </div>
        </Link>
        <div className='basis-full'>
        <Link href={`$${process.env.NEXT_PUBLIC_URL}/post/${id}`}>
           <h4 className={`font-bold hover:text-gray-600
           ${isSmallCard ? "text-base" : "text-lg"}
           ${isSmallCard ? "line-clamp-2" : ""}
        `}>{title}</h4>
        </Link>
        <div className={`${isSmallCard} ? 'my-2' : 'flex my-3'} gap-3`}>
            <h5 className='font-semibold text-xs'>{author}</h5>
            <h6 className='text-white text-xs'>{formattedDate}</h6>
        </div>
        <p
          className={`text-gray-800 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          {snippet}
        </p>
        </div>
    </div>
  )
}

export default Card;