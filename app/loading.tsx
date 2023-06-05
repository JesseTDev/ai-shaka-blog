import React from 'react'; 


const Loading = () => {
  return (
<div className="flex justify-center items-center">
  <div
    className="border-4 border-gray-200 border-t-[2px] rounded-full w-12 h-12 animate-spin"
    style={{ borderTopColor: "#3498db" }}
  ></div>
  <p className="px-5 font-bold">Loading...</p>
</div>
  ); 
}; 

export default Loading; 