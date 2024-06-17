"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Pagination = ({ count }) => {

    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const pathname = usePathname()

    const page = searchParams.get("page") || 1

    const params = new URLSearchParams(searchParams)
    const ITEMS_PER_PAGE = 6
    
    const hasPrevious = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0
    const hasNext = ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count

    const handleChangePage = (type) => {
        type === "prev"
            ? params.set("page", parseInt(page) - 1)
            : params.set("page", parseInt(page) + 1)
            replace(`${pathname}?${params}`)
    }

    return (
        <>
            <div>Pagination</div>
            <button disabled={!hasPrevious} onClick={() => handleChangePage("prev")}>Previous</button>
            <button disabled={!hasNext} onClick={() => handleChangePage("next")}>Next</button>
        </>
    )
}

export default Pagination