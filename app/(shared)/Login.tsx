import React from 'react'
import { getServerSession } from 'next-auth';
import { authConfig } from '@/lib/auth';
import Link from 'next/link';


const Login = async () => {

    const session = await getServerSession(authConfig); 
  return (
    <div>
    {session ? <p>Welcome {session.user?.name}</p> : <Link href='api/auth/signin'>Sign In</Link>}
    </div>
  )
}

export default Login; 