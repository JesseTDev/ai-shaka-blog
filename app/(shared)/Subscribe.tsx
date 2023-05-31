import React from 'react'

const Subscribe = () => {
  return (
    <div className="text-center bg-yellow-100 px-5 py-10 rounded-md">
        <h4 className='font-semibold text-base'>Subscribe to Shaka Blog Newsletter 🌴</h4>
        <p className="text-wh-500 my-3 w-5/6 mx-auto">
    Enter email address to recieve the latest surfing and travel news!
        </p>
        <input
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        placeholder="Enter Email Address"
      />
         <button className="bg-cyan-600 rounded-md text-white font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-3">
        SUBSCRIBE
      </button>
    </div>
  )
}

export default Subscribe;