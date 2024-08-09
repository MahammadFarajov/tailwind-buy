import React from 'react'
import stark from "../assets/Stark_Industries_Logo-removebg-preview 1.png"
import tesla from "../assets/pngegg 1.png"
import amazon from "../assets/pngegg (2) 1.png"
import oscorp from "../assets/pngegg (1) 1.png"
import yamaha from "../assets/pngegg (3) 1.png"
import fly_emirates from "../assets/pngegg (4) 1.png"


function Partner() {
  return (
    <div className='flex flex-col gap-8 pb-16'>
        <h1 className='font-bold text-center text-[40px]'>Our Partners</h1>
        <div className="py-8 w-full flex justify-between items-center">
            <img src={stark} alt="" />
            <img src={tesla} alt="" />
            <img src={amazon} alt="" />
            <img src={oscorp} alt="" />
            <img src={yamaha} alt="" />
            <img src={fly_emirates} alt="" />
        </div>
    </div>
  )
}

export default Partner