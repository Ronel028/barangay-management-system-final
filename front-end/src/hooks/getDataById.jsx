import { useState } from 'react'
import axios from 'axios'

function useGetDataById(){
    const [data, setData] = useState({
        name: '',
        age: 0,
        gender: '',
        orNumber: 0,
        amount: 0
    })

    const getData = async(url) =>{
        const certificate = await axios.get(url)
        setData({
            ...data,
            name: certificate.data[0].name,
            age: certificate.data[0].age,
            gender: certificate.data[0].gender,
            orNumber: certificate.data[0].or_number,
            amount: certificate.data[0].amount
        })
    }

    return [data, setData, getData, ]

}

export default useGetDataById