import { useState, useEffect } from 'react'
import axios from 'axios'

function useAxios(url){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const getData = async ()=>{
            setLoading(true)
            const myData = await axios.get(url)
            setData(myData.data)
            setLoading(false)
        }
        getData()
    }, [])

    return [data, loading]
}

export default useAxios