import axios from 'axios'

function useDeleteCertificate(){

    const deleteCertificate = async(url, updateData) =>{
        const deleteCertificateData = await axios.delete(url)
        
        if(deleteCertificateData.data.message){
            window.location.href = '/certificate'
        }else{
            updateData(deleteCertificateData.data)
        }
    }

    return [deleteCertificate]

}

export default useDeleteCertificate