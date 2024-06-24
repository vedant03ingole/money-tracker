'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { MenuToggle } from './MenuToggle'

const Nabvar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center my-2 '>
                <div className=''>
                <Link href="/transaction">
                    <div className='grid  place-content-center p-1 font-bold bg-orange-700 rounded-full w-[20px] h-[20px] cursor-pointer'>
                        +
                    </div>
                </Link>
                </div>
                <div className=''>
                    <Link href="/">
                        MONEYTRACKER
                    </Link>
                </div>
                <div className=''>
                    <MenuToggle toggleMenu={toggleMenu} isOpen={isOpen} />
                </div>
            </div>
        </div>
    )
}

export default Nabvar