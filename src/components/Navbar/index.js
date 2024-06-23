'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Nabvar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div>
                <div>NavbarTest</div>
                <button className='' onClick={toggleMenu}>
                    Change
                </button>
                {!isOpen ? "h1" : "h2"}
                <h3>
                    <Link href="/">
                        Home
                    </Link>
                </h3>
            </div>
        </>
    )
}

export default Nabvar