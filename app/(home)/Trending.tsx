import React from 'react'; 
import Link from 'next/link';

type TrendingCardProps = {
    className?: string;
}; 

const TrendingCard = ({ className }: TrendingCardProps) => {
    return (
        <Link className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`} 
        // href={`${process.env.NET_PUBLIC_URL}/post/${post?.id}`}
        href='/'>
            <div className='z-0 relative w-full h-full bg-gray-500 rounded-md'>
                image
            </div>
            <div className='absolute z-2 bottom-0 left-0 p-3'>
                <h4 className='inline-block px-5 py-1 font-semibold bg-cyan-600 rounded-md text-white'>Category</h4>
            <div className='text-white mt-2'>
            post title
            </div>
            </div>
        </Link>
    );
};

type Props = {

}; 


const Trending = (props: Props) => {
  return (
  <section className='pt-3 pb-10'>
 <div className='flex items-center gap-3'>
    <div className='bg-cyan-900 rounded-md py-2 px-8 text-white text-sm font-bold'>
        TRENDING
    </div>
    <p className='text-sm'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat vitae quas laborum voluptas iste eaque odio molestias repudiandae nihil eos omnis aperiam, fuga facere sint doloremque quaerat placeat quod magnam?
    </p>
 </div>

 <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
    <TrendingCard className="rounded-md col-span-2 row-span-2 bg-gray-500" />
    <TrendingCard className="rounded-md col-span-2 row-span-1 bg-gray-500" />
    <TrendingCard className="rounded-md col-span-1 row-span-1 bg-gray-500" />
    <TrendingCard className="rounded-md col-span-1 row-span-1 bg-gray-500" />
 </div>
 <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem optio voluptatibus dolorem maiores tempora incidunt culpa accusamus a similique exercitationem. Fugiat assumenda aut maiores provident, reiciendis reprehenderit pariatur id. Ad.</p>
  </section>
  )
}

export default Trending; 