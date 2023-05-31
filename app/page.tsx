import Image from 'next/image';
import Trending from 'app/(home)/Trending';
import Surfing from 'app/(home)/Surfing';
import Travel from './(home)/Travel';
import Subscribe from 'app/(shared)/Subscribe';
import Sidebar from './(shared)/Sidebar';


const Home = () => {
  return (
    <main className='px-10 leading-7'>
     <Trending />
      <div className='md:flex gap-10 mb-5'>
        <div className='basis-3/4'>
        <Surfing /> 
        <Travel />
          <div className='hidden md:block'>
            <Subscribe />
          </div>
        </div>
        <div className='basis-1/4'>
            <Sidebar /> 
        </div>
      </div>
    </main>
  )
};

export default Home; 
