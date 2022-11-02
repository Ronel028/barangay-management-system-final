import axios from 'axios'

function useDeleteCertificate(){

    const deleteCertificate = async(url, updateData) =>{
        const deleteCertificateData = await axios.delete(url)
        updateData(deleteCertificateData.data)
    }

    return [deleteCertificate]

}

export default useDeleteCertificate