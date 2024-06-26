"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"


const Search = ({ placeholder }) => {

    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const pathname = usePathname()

    const handelSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams)
        
        params.set("page", 1)
        
        if(e.target.value) {
            e.target.value.length > 2 && params.set("q", e.target.value)
        } else {
            params.delete("q")
        }
        replace(`${pathname}?${params}`)
    }, 500)

    return (
        <>
            <input type="text" placeholder="Search transaction" onChange={handelSearch} className="bg-black text-white px-2 py-3 m-2 min-w-[19.75rem] rounded-4xs"/>
        </>
    )
}

export default Search