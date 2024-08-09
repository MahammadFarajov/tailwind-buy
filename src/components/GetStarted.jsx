import React from 'react'

function GetStarted() {
  return (
    <div>
        <div className="max-w-[85%] w-full mx-auto py-16 flex flex-col gap-10 items-center">
            <p className='font-semibold text-[96px] text-center'>Find anything that you want, in one <p className='text-privpurple font-semibold text-[96px]'>website!</p></p>
            <div className="py-10 flex items-center justify-center gap-8">
                <button className='text-white py-4 text-[20px] px-10 bg-privpurple rounded-[26px]'>Get Started!</button>
                <button className='text-[#172121] py-4 text-[20px] px-10 bg-privred rounded-[26px]'>Get Started!</button>
            </div>
        </div>
    </div>
  )
}

export default GetStarted