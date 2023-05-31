'use client'

import React, {ChangeEvent, useState} from 'react'

const Subscribe = () => {

  const [email, setEmail] = useState({email: ''}); 
  const [saveEmail, setSaveEmail] = useState(email); 
  const [displayEmail, setDisplayEmail] = useState(false);

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail({email: e.target.value})
  }; 

  const submitEmailHandler = () => {
      setSaveEmail(email); 
      setDisplayEmail(true); 
    if (email.email.length === 0) {
      setDisplayEmail(false)
    } 
  };

  return (
<div className="text-center bg-yellow-100 px-5 py-10 rounded-md">
  {displayEmail ? (
    <h4>{`Thanks for subscribing to the Shaka Blog! Your newsletter will be sent to 
    ${saveEmail.email}`}</h4>
  ) : (
    <>
      <h4 className='font-semibold text-base'>Subscribe to the Shaka Blog Newsletter 🌴</h4>
      <p className="text-wh-500 my-3 w-5/6 mx-auto">
        Enter your email address to receive the latest surfing and travel news!
      </p>
      <input
        onChange={emailHandler}
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        placeholder="Enter Email Address"
      />
      <button
        onClick={submitEmailHandler}
        className="bg-cyan-600 rounded-md text-white font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-3 hover:opacity-70"
      >
        SUBSCRIBE
      </button>
    </>
  )}
</div>

  )
}

export default Subscribe;