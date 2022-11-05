import { useState, useEffect } from "react";
import axios from "axios";

function usePrintData(){

    const [clearanceData, setClearanceData] = useState({
        name: '',
        age: 0,
        gender: '',
        dateIssued: '',
        orNumber: 0,
    })

    
    const getCertificateData = async(url) =>{
        const certificateData = await axios.get(url)
        setClearanceData({
            ...clearanceData,
            name: certificateData.data[0].name,
            age: certificateData.data[0].age,
            gender: certificateData.data[0].gender,
            dateIssued: certificateData.data[0].dateIssued,
            orNumber: certificateData.data[0].or_number,
        })
    }


    return [clearanceData, getCertificateData]

}

export default usePrintData