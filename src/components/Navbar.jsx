import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const handleOpenToggle = () => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <div>
        <header>
            <nav className='max-w-[85%] w-full mx-auto py-6 flex justify-between items-center'>
                <h1 className='flex text-privpurple font-semibold text-[36px]'>Buy <p className='font-semibold text-[36px]'>.</p> <p className='text-privred font-semibold text-[36px]'>az</p></h1>
                <ul className={`fixed lg:flex md:static top-0 flex flex-col lg:bg-inherit md:bg-inherit items-center bg-inherit md:p-0 md:flex-row md:justify-end transition-all ease-in-out duration-500 sm:bg-white p-24 right-0 h-full md:shadow-none z-5 lg:shadow-none  sm:shadow-lg w-1/2  gap-8 ${isNavOpen ? 'right-0' : '-right-full'}`}>
                    <li><a className='font-medium text-xl' href="#">Home</a></li>
                    <li><a className='font-medium text-xl opacity-40' href="#">Search</a></li>
                    <li><a className='font-medium text-xl opacity-40' href="#">About</a></li>
                    <li><a className='font-medium text-xl opacity-40' href="#">Contacts</a></li>
                </ul>
                <button onClick={handleOpenToggle} className='bg-black rounded-md md:hidden lg:hidden cursor-pointer px-6 py-3 relative z-20'><FaBars color='white' /></button>
                <div className="rounded-full w-[403px] h-[403px] blur-[350px] top-0 right-0 -z-10  absolute  bg-privpurple"></div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar