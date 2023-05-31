import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-cyan-900 text-white py-10 px-10'>
       <div className='justify-between mx-auto gap-16 sm:flex'>

            {/* col 1 */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
        <h4 className='font-bold'>Shaka Blog 🤙</h4>
        <p className='my-5'>This blog is created by surfers, for surfers and travelers alike. We are passionate about sharing our love for surfing and travel, and this platform serves as a hub of inspiration and knowledge for all those who share our adventurous spirit</p>
        <p>Developed by Jesse Taylor</p>
        <p>© Shaka Blog, All Rights Reserved.</p>
        </div>
            {/* col 2 */}
        <div className='mt-16 basis-1/4 sm:mt-0 flex flex-col'>
        <h4 className='font-bold'>Links</h4>
        <a href='https://www.surfline.com'className='hover:opacity-70 my-5' target='_blank'>Check the surf</a>
        <a href='https://www.linkedin.com/in/jesse-taylor-421563260' className='hover:opacity-70'
        target='_blank'>Careers</a>
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