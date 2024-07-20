"use client"

import { Menu , Search ,Youtube } from "lucide-react";
import Input from "./Input";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-blue-500 ">
      <div className='w-full  bg-black text-white z-40'>
        <div className="flex w-full flex-row sm:gap-5  px-5 py-3">
          <div className="flex basis-1/4 sm:basis-2/5 md:basis-2/6 justify-start  md:gap-10  gap-3">
            <div className="sm:flex justify-center items-center sm:ps-4">    
              <Menu/>
            </div>
            <div className=' flex gap-2 justify-center items-center cursor-pointer' >
                    <Youtube height={'40px'} width={'40px'} />
                 <span className='hidden text-sm md:text-lg sm:block'>Stream-App</span>
             </div> 
          </div>
          <div className="md:basis-2/4  basis-4/5	flex justify-center">
            <div className="w-full flex items-center ">
              <div className=" w-full relative h-10 flex rounded-2xl me-4 ">
                <div className="w-full flex-wrap">
                  <Input className=" bg-black border w-full rounded-2xl border-gray-300 text-white h-10" type="text" />
                </div>
                <div className="absolute top-0 -right-2 border  border-gray-300 h-10 w-12 bg-black rounded-br-2xl rounded-tr-2xl flex justify-center items-center">
                  <Search />
                </div>
              </div>
            </div>
          </div>
          <div className="md:basis-1/6 relative basis-1/5 flex justify-end">
            <div  className='cursor-pointer bg-black border border-gray-500  text-xl  font-medium rounded-2xl h-10 w-10 flex justify-center items-center'>
            {/* {userData && userData.username[0]} 
            {/* </div> */}
            {/* <div className={`absolute top-14 w-[230px] ${show? "" : "hidden"}`}>
                        {/* <Link to={'/Channel'}>
                          <AccountCard/>
                        </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
