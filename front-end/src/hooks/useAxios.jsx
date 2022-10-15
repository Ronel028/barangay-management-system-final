import { useState, useEffect } from 'react'
import axios from 'axios'

function useAxios(url){
    const [data, setData] = useState([])

    useEffect(()=>{
        const getData = async ()=>{
            const myData = await axios.get(url)
            setData(myData.data)
        }
        getData()
    }, [])

    return [data]
}

export default useAxios