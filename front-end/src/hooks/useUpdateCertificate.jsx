import { useState } from "react";
import axios from "axios";

function useUpdateCertificate(){
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState({
        errorDisplay: false,
        error: ''
    })

    const updateCertificate = async(url, data, header, closeModal, updateNewData)=>{
        setLoader(true)
        const updateCertificate = await axios.post(url, data, header)
        setLoader(false)

        if(updateCertificate.data.message){
            setError({
                ...error,
                errorDisplay: true,
                error: updateCertificate.data.message
            })
            setTimeout(()=>{
                setError({
                    ...error,
                    errorDisplay: false,
                    error: ''
                })
            }, 2000)
        }else{
            updateNewData(updateCertificate.data)
            closeModal()
        }
    }

    return [updateCertificate, loader, error]
}

export default useUpdateCertificate