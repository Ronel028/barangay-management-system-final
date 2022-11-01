import { useState } from "react";
import axios from "axios";

function useInsert(){
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState({
        errorDisplay: false,
        error: ''
    })

    const insertCertificate = async(url, data, header, closeModal, resetData)=>{
        setLoader(true)
        const insert = await axios.post(url, data, header)
        setLoader(false)

        if(insert.data.message === 'success'){
            resetData()
            closeModal()
        }else{
            setError({
                ...error,
                errorDisplay: true,
                error: insert.data.message
            })
            setTimeout(() =>{
                setError({
                    ...error,
                    errorDisplay: false,
                    error: ''
                })
            }, 2000)
        }
    }

    return [insertCertificate, loader, error]
}

export default useInsert