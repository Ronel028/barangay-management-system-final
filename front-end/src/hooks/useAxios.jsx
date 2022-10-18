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

    // add new data
    const addNewResident = (newResident) =>{
        setData(newResident)
    }

    return [data, loading, addNewResident]
}

export default useAxios