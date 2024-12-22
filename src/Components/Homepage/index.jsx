import React from 'react'
import Refresh from '../../assets/Images/refresh.svg?react'
import Plus from '../../assets/Images/plus.svg?react'
import Search from '../../assets/Images/search.svg?react'
import Database from '../../assets/Images/database.svg?react'
import Dot from '../../assets/Images/Ellipse 1.svg?react'

const index = () => {
    const totalRepository = 33;
    const Data = [
        {
            name: "design system",
            status: "Public",
            uses: "React",
            storage: "7320 KB",
            update: 1
        },
        {
            name: "codeant ci app",
            status: "Private",
            uses: "Javascript",
            storage: "5871 KB",
            update: 2
        },
        {
            name: "analytics dashboard",
            status: "Private",
            uses: "Python",
            storage: "4521 KB",
            update: 5
        },
        {
            name: "mobile app",
            status: "Public",
            uses: "Swift",
            storage: "3096 KB",
            update: 3
        },
        {
            name: "e commerce platform",
            status: "Private",
            uses: "Java",
            storage: "6210 KB",
            update: 6
        },
        {
            name: "blog website",
            status: "Public",
            uses: "HTML/CSS",
            storage: "1876 KB",
            update: 4
        },
        {
            name: "social network",
            status: "Private",
            uses: "PHP",
            storage: "5432 KB",
            update: 7
        },
    ]
    return (
        <div className='md:w-full h-screen  bg-zinc-100 md:px-8 md:py-3 flex md:justify-end font-noto'>
            <div className='md:w-5/6 w-full border md:border-zinc-300  rounded-lg '>

                {/* Header */}
                <div className='Header flex flex-col px-5 py-3 md:mt-0 mt-16 gap-3 bg-white'>
                    <div className='flex md:flex-row  flex-col md:justify-between gap-3'>
                        <div className='flex  flex-col gap-1'>
                            <h2 className='text-2xl font-semibold '>Repositories</h2>
                            <p className='text-sm text-zinc-500'>{totalRepository} Total Repositories</p>
                        </div>
                        <div className='flex  gap-3 h-fill'>
                            <button className='flex gap-3 bg-white px-3 py-2 border border-zinc-300 text-zinc-600 items-center justify-center rounded-md'>
                                <Refresh className='md:w-5 w-4' />
                                Refresh All
                            </button>
                            <button className='flex gap-3 bg-blue-600 px-3 py-2 text-white items-center justify-center rounded-md'>
                                <Plus className='md:w-5 w-4' />
                                Add Repository
                            </button>
                        </div>
                    </div>
                    <div className='searchbar flex gap-3 p-2 px-3 bg-white items-center  bg-white border border-zinc-300 rounded-md  md:w-1/3'>
                        <Search className="w-5" />
                        <form className='w-full'>
                            <input type="text" placeholder='Search Repositories' className='outline-none border-none w-full' />
                        </form>
                    </div>
                </div>

                {/* Content */}
                <div className='Data  overflow-y-scroll no-scrollbar bg-white w-full h-4/5 divide-y divide-zinc-300'>
                    {Data.map((items) => {
                        return (
                            <div className='flex flex-col gap-2 px-5 py-3 bg-white '>
                                <div className='flex items-center gap-5 '>
                                    <h2 className='text-lg font-semibold '>
                                        {items.name.split(" ").join("-")}
                                    </h2>
                                    <p className='bg-blue-200 text-blue-600 border border-blue-500 text-xs px-4 py-0.5 rounded-3xl'>{items.status}</p>
                                </div>

                                <div className='flex gap-5 text-zinc-600 text-sm'>
                                    <p className='flex items-center '>{items.uses}
                                        <Dot className="w-5" />
                                    </p>
                                    <p className='flex items-center '>
                                        <Database className="w-5" />
                                        {items.storage}</p>
                                    <p>Updated {items.update} days ago</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default index
