'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import {MenuToggle} from './MenuToggle'

const Nabvar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div>
                <h3>
                    <Link href="/">
                        Home
                    </Link>
                </h3>
                <MenuToggle toggleMenu={toggleMenu} isOpen={isOpen} />
            </div>
        </>
    )
}

export default Nabvar