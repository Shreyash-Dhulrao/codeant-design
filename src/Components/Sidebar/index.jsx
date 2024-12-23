import React, { useState } from 'react'
import arr from '../../assets/assets'
import Home from '../../assets/Images/home.svg?react'
import Code from '../../assets/Images/code.svg?react'
import Cloud from '../../assets/Images/cloud.svg?react'
import Book from '../../assets/Images/book.svg?react'
import Settings from '../../assets/Images/gear.svg?react'
import Phone from '../../assets/Images/phone.svg?react'
import Signout from '../../assets/Images/sign-out.svg?react'
import Bars from '../../assets/Images/bars.svg?react'
import Close from '../../assets/Images/close.svg?react'
import { Link } from 'react-router-dom';

const main = () => {
  const [toggle, settoggle] = useState(false)
  const name = "UtkarshDhairyPanwar";
  return (
    <div className=' font-noto'>

      {/* Desktop */}
      <div className='p-2 md:block hidden xl:w-56 w-1/6 h-screen bg-white border border-zinc-300  fixed '>
        <img src={arr.mainIcon} alt="" className='w-48 ' />
        <div className='flex flex-col items-start xl:h-[92%] h-[95%] bg-red-300 justify-between '>
          <div className='flex flex-col gap-1'>
            <button className='flex text-wrap px-3 py-2 mb-3 items-center justify-center border border-zinc-500 rounded-md gap-2  xl:w-52 w-3/4'>
              <p className='truncate'>{name}</p>
              <img src={arr.down} alt="" className='w-6 ' />
            </button>
            <Link to='/' className='flex items-center w-52 bg-blue-600 text-white px-3 py-2 gap-3 rounded-md xl:w-52 w-3/4'>
              <Home className='w-5' />
              <p>Repositories</p>
            </Link>
            <Link to='/' className='flex items-center w-52 px-3 py-2 gap-3 rounded-md  xl:w-52 w-3/4'>
              <Code className='w-5' />
              <p>AI Code Review</p>
            </Link>
            <Link className='flex items-center w-52 px-3 py-2 gap-3 rounded-md xl:w-52 w-3/4'>
              <Cloud className='w-5' />
              <p>Cloud</p>
            </Link>
            <Link className='flex items-center w-52 px-3 py-2 gap-3 rounded-md xl:w-52 w-3/4'>
              <Book className='w-5' />
              <p>How to Use</p>
            </Link>
            <Link className='flex items-center w-52 px-3 py-2 gap-3 rounded-md xl:w-52 w-3/4'>
              <Settings className='w-5' />
              <p>Settings</p>
            </Link>
          </div>


          <div className=' '>
            <Link className='flex items-center w-52 px-3 py-2 gap-3 rounded-md xl:w-52 w-3/4'>
              <Phone className='w-5' />
              <p>Support</p>
            </Link>
            <Link className='flex items-center w-52 px-3 py-2 gap-3 rounded-md xl:w-52 w-3/4'>
              <Signout className='w-5' />
              <p>Logout</p>
            </Link>
          </div>
        </div>
      </div>


{/* Android */}
      <div className={`android md:hidden fixed ${toggle ? "h-fill" : "h-fit"} w-full bg-white border border-zinc-300 `}>
        <div className='flex justify-between items-center p-2 bg-white'>
          <div>
            <img src={arr.mainIcon} alt="" className='w-36 ' />
          </div>
          <div >
            <button onClick={() => settoggle(!toggle)}>
              {
                (toggle ?
                  <Close className="w-7" />
                  :
                  <Bars className="w-7" />
                )
              }
            </button>
          </div>
        </div>

        {/* content */}
        {toggle ? (
          <div className='min-h-screen backdrop-blur-sm z-10 fixed w-full bg-zinc-500/30  '>
            <div className='flex flex-col px-5 w-full  justify-between  bg-white pb-5' >
              <div className='flex flex-col gap-1'>
                <button className='flex text-wrap py-2 px-3  items-center justify-between border border-zinc-500 rounded-md gap-2 '>
                  <p className='truncate'>{name}</p>
                  <img src={arr.down} alt="" className='w-6 ' />
                </button>
                <Link to='/' className='flex items-center py-2 gap-3'>
                  <Home className='w-5' />
                  <p>Repositories</p>
                </Link>
                <Link to='/' className='flex items-center py-2 gap-3 '>
                  <Code className='w-5' />
                  <p>AI Code Review</p>
                </Link>
                <Link className='flex items-center py-2 gap-3'>
                  <Cloud className='w-5' />
                  <p>Cloud</p>
                </Link>
                <Link className='flex items-center py-2 gap-3'>
                  <Book className='w-5' />
                  <p>How to Use</p>
                </Link>
                <Link className='flex items-center py-2 gap-3 mb-1'>
                  <Settings className='w-5' />
                  <p>Settings</p>
                </Link>
              </div>


              <div className=' flex flex-col gap-1'>
                <Link className='flex items-center py-2 gap-3'>
                  <Phone className='w-5' />
                  <p>Support</p>
                </Link>
                <Link className='flex items-center py-2 gap-3'>
                  <Signout className='w-5' />
                  <p>Logout</p>
                </Link>
              </div>
            </div>
          </div>
        ) : (<></>)
        }
      </div>
    </div>
  )
}

export default main