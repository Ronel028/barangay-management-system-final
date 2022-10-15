import { useState } from 'react'

function useSearch(){

    const [search, setSearch] = useState('')

    const searchValue = (event)=>{
        setSearch(event.target.value)
    }

    return [search, searchValue]
}

export default useSearch