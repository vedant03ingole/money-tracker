"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"


const Search = ({ placeholder }) => {

    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const pathname = usePathname()

    const handelSearch = (e) => {
        const params = new URLSearchParams(searchParams)
        
        if(e.target.value) {
            e.target.value.length > 2 && params.set("q", e.target.value)
        } else {
            params.delete("q")
        }
        replace(`${pathname}?${params}`)
    }

    return (
        <>
            <div className=''>Search</div>
            <input type="text" placeholder={placeholder} onChange={handelSearch} className="bg-black text-white p-5"/>
        </>
    )
}

export default Search