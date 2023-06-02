import Image from 'next/image';
import Trending from '@/app/(home)/Trending';
import Surfing from '@/app/(home)/Surfing';
import Travel from './(home)/Travel';
import Subscribe from '@/app/(shared)/Subscribe';
import Sidebar from './(shared)/Sidebar';
import { prisma } from './api/client';
import { Post } from '@prisma/client';
import Chatbase from './(shared)/Chatbase'; 

export const revalidate = 60; 
const CHATBASE_URL = process.env.CHATBASE_URL; 

  const getPosts = async () => {
    const posts = await prisma.post.findMany(); 

    return posts; 
  };

const Home = async () => {

  const posts = await getPosts(); 

  const formatPosts = () => {
    const trendingPosts: Array<Post> = [];
    const surfingPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
   
    
    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      } if (post?.category === "Surfing") {
        surfingPosts.push(post);
      } else if (post?.category === 'Travel') {
        travelPosts.push(post); 
      }
    });
    return [trendingPosts, surfingPosts, travelPosts];
  }; 

const [trendingPosts, surfingPosts, travelPosts] = formatPosts();

  return (
    <main className='px-10 leading-7'>
     <Trending trendingPosts={trendingPosts} />
      <div className='md:flex gap-10 mb-5'>
        <div className='basis-3/4'>
        <Surfing surfingPosts={surfingPosts} /> 
        <Travel travelPosts={travelPosts} />
          <div className='hidden md:block'>
            <Subscribe />
          </div>
        </div>
        <div className='basis-1/4'>
            <Sidebar /> 
            <Chatbase src={CHATBASE_URL} />
        </div>
      </div>
    </main>
  )
};

export default Home; 
