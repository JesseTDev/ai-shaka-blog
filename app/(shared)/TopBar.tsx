import Link from 'next/link'
import SocialLinks from './SocialLinks';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Login from './Login';
import SignedIn from './SignedIn';

const TopBar = () => {

    return (
        <div>
        <div className='flex justify-between items-center w-full bg-white text-wh-800 px-10 py-2'>
            <div><SocialLinks /></div>
            <div className='flex justify-between items-center gap-10'>
            </div>
            <div className='flex'>
                  {/* @ts-expect-error Server Component  */}
                 <Login />
                <UserCircleIcon style={{width: '20px', marginLeft: '5px'}}/>
            </div>
        </div>
           {/* @ts-expect-error Server Component  */}
           <SignedIn />
        </div>
      )    
};

export default TopBar; 