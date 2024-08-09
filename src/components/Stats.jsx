import React from 'react'

function Stats() {
  return (
    <div className='bg-[#1E1E1E]/15 w-full py-[67px]'>
        <div className="max-w-[85%] w-full flex mx-auto justify-between">
            <div className="py-2 flex flex-col gap-31px">
                <h1 className='font-bold text-privpurple text-[64px] max-w-[85%] w-full mx-auto'>100K+</h1>
                <p className='font-md text-[24px] text-[#172121] opacity-[57%] text-center'>USERS</p>
            </div>
            <div className="py-2 flex flex-col gap-31px">
                <h1 className='font-bold text-privpurple text-[64px] max-w-[85%] w-full mx-auto'>500K+</h1>
                <p className='font-md text-[24px] text-[#172121] opacity-[57%] text-center'>CLASSFIELDS</p>
            </div>
            <div className="py-2 flex flex-col gap-31px">
                <h1 className='font-bold text-privpurple text-[64px] max-w-[85%] w-full mx-auto'>25000K+</h1>
                <p className='font-md text-[24px] text-[#172121] opacity-[57%] text-center'>USERS/DAY</p>
            </div>
        </div>
    </div>
  )
}

export default Stats