import React from 'react'
import Box from "../assets/Group (6).png"

function End() {
  return (
    <div className='border-t-[#172121]/20 border-t py-8'>
        <div className="max-w-[85%] w-full mx-auto flex flex-col gap-[10px]">
            <div className="flex gap-[10px] items-center">
                <img src={Box} alt="" />
                <h1 className='flex text-privpurple font-semibold text-[36px]'>Buy <p className='font-semibold text-[36px]'>.</p> <p className='text-privred font-semibold text-[36px]'>az</p></h1>
            </div>
            <p className='text-[18px] text-[#172121]/60'>Babek Pr. 14. <br />
            Baku, Azerbaijan.</p>
        </div>
    </div>
  )
}

export default End