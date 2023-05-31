import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-cyan-900 text-white py-10 px-10'>
       <div className='justify-between mx-auto gap-16 sm:flex'>

            {/* col 1 */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
        <h4 className='font-bold'>Shaka Blog 🤙</h4>
        <p className='my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta laudantium harum culpa ea aspernatur sed expedita? Consectetur nihil, id quos similique placeat, ab quae obcaecati eius dolorum dolor, omnis quod.</p>
        <p>© Shaka Blog, All Rights Reserved.</p>
        </div>
            {/* col 2 */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
        <h4 className='font-bold'>Links</h4>
        <p className='my-5'>Link1</p>
        <p className='my-5'>Link2</p>
        <p>Something here</p>
        </div>
            {/* col 3 */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
        <h4 className='font-bold'>Contact Us</h4>
        <p className='my-5'>info@shakablog.com</p>
        <p>1300Shakablog</p>
        </div>
       </div>
    </footer>
  )
}

export default Footer; 