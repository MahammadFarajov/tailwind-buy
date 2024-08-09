import React from 'react'
import godfather from "../assets/Ellipse 3.png"
import noone from "../assets/Ellipse 3 (1).png"
import noone2 from "../assets/Ellipse 3 (2).png"

 
function Partner_2() {
  return (
    <div className='py-16 lg:px-0 lg:max-w-[69%] w-full mx-auto flex flex-col gap-8 md:w-full md:max-w-full md:px-3 sm:w-full sm:max-w-full sm:px-3'>
        <h1 className='font-bold text-center text-[40px]'>Our Partners</h1>
        <div className="flex justify-between gap-6">
            <div className="p-6 pb-[39px] shadow-xl shadow-black/10 rounded-[24px] flex flex-col gap-6">
                <div className="flex gap-[10px] items-center">
                    <img src={godfather} alt="" />
                    <p className='font-bold text-[24px]'>Vito Corleone</p>
                </div>
                <p className='text-[18px] tracking-[-5%] sm:line-clamp-[7] md:line-clamp-[10] lg:line-clamp-none text-[#172121]/60'>“I needed to find old cars to sell, I found them! I can assure you it’s the best classifieds service I have ever seen. The user interface is incredibly intuitive and makes browsing through listings a breeze. The search functionality is powerful, allowing me to filter by make, model, year, and price range with ease. ”</p>
            </div>
            <div className="p-6 pb-[39px] shadow-xl shadow-black/10 rounded-[24px] flex flex-col gap-6">
                <div className="flex gap-[10px] items-center">
                    <img src={noone} alt="" />
                    <p className='font-bold text-[24px]'>Vito Scaletta</p>
                </div>
                <p className='text-[18px] tracking-[-5%] sm:line-clamp-[7] md:line-clamp-[10] lg:line-clamp-none text-[#172121]/60'>“I needed to find old cars to sell, I found them! I can assure you it’s the best classifieds service I have ever seen. The user interface is incredibly intuitive and makes browsing through listings a breeze. The search functionality is powerful, allowing me to filter by make, model, year, and price range with ease. ”</p>
            </div>
            <div className="p-6 pb-[39px] shadow-xl shadow-black/10 rounded-[24px] flex flex-col gap-6">
                <div className="flex gap-[10px] items-center">
                    <img src={noone2} alt="" />
                    <p className='font-bold text-[24px]'>Joe Barbaro</p>
                </div>
                <p className='text-[18px] tracking-[-5%] sm:line-clamp-[7] md:line-clamp-[10] lg:line-clamp-none text-[#172121]/60'>“I needed to find old cars to sell, I found them! I can assure you it’s the best classifieds service I have ever seen. The user interface is incredibly intuitive and makes browsing through listings a breeze. The search functionality is powerful, allowing me to filter by make, model, year, and price range with ease. ”</p>
            </div>
        </div>
    </div>
  )
}

export default Partner_2