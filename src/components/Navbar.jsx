'use client'

import React, { useState } from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <div>Navbar</div>
            <button className='' onClick={toggleMenu}>
                Change
            </button>
            { !isOpen ? "h1" : "h2"}
        </div>
    )
}

export default Navbar