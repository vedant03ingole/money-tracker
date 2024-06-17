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
            <div>Search</div>
            <input type="text" placeholder={placeholder} onChange={handelSearch} className="bg-black text-white p-5"/>
        </>
    )
}

export default Search