import React from 'react'
import { getServerSession } from 'next-auth';
import { authConfig } from '@/lib/auth';
import Link from 'next/link';


const Login = async () => {

    const session = await getServerSession(authConfig); 
  return (
    <div>
    {session ? <Link className='cursor:pointer hover:text-gray-600' href='api/auth/signout'>Sign out</Link> : <Link className='cursor:pointer hover:text-gray-600' href='api/auth/signin'>Login</Link>}
    </div>
  )
}; 

export default Login; 