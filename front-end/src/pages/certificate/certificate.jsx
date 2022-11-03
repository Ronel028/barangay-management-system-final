import { useState } from 'react'
import axios from 'axios'
import useAxios from '../../hooks/useAxios'
import Search from '../../components/search'
import TitleCard from '../../components/title'
import CertificateTable from './certificate-table'
import ClearanceModal from './certificateModal/clearance-modal'
import IndigencyModal from './certificateModal/indigency-modal'
import ResidencyModal from './certificateModal/residency-modal'
import PermitModal from './certificateModal/permit-modal'

function Certificate(){

    /* *********CUSTOM HOOKS FOR GETTING ALL RESIDENT DATA FROM DATABASE********* */
    const [residentData, loading] = useAxios('/resident')
    /* *********************END CUSTOM HOOKS************************************ */


     /* **************HANDLE STATE FOR MODAL**************** */
    const [show, setShow] = useState({
        clearance: false,
        indigency: false,
        permit: false,
        residency: false,
    })
    const handleClose = () => setShow({
        clearance: false,
        indigency: false,
        permit: false,
        residency: false,
    })
    /* **************END STATE**************** */




    /* **************STATE FOR HANDLE INPUT DATA**************** */

    // state for clearance, indigency and residency
    const [certificateData, setCertificateData] = useState({
        name: '',
        age: 0,
        gender: '',
        types: '',
        orNumber: 0,
        amount: 0,
        dateIssued: ''
    })

    // state for business permit
    const [permitData, setPermitData] = useState({
        ownerName: '',
        natureOfBusiness: '',
        businessAddress: '',
        startDate: '',
        endDate: '',
        orNumber: 0,
        amount: 0
    })
     /* *********************END STATE************************** */


    

    /* **************HANDLE INPUT EVENT FOR CERTIFICATE INPUT FIELD**************** */

    // handle input for clearance, indigeny and resident certificate
    const handleInput = (event) =>{
        const { name, value } = event.target
        setCertificateData({
            ...certificateData,
            [name] : value
        })
    }
    // handle input for business permit
    const handleInputPermit = (event) =>{
        const { name, value } = event.target
        setPermitData({
            ...permitData,
            [name] : value
        })
    }
    // ---------------------------------------------------------------

    /* **************END FUNCTION**************** */



    /* **********************EVENT TO OPEN MODAL********************************* */

    /* ********************CLICK EVENT TO OPEN CLEARANCE MODAL****************** */
    const openClearanceModal = async(id) =>{
        const resident = await axios.get(`/resident/id?id=${id}`)
        setCertificateData({
            ...certificateData,
            name: `${resident.data[0].fname} ${resident.data[0].lname}`,
            age: resident.data[0].age,
            gender: resident.data[0].gender,
            types: 'Clearance'
        })
        setShow({
            ...show,
            clearance: true
        })
    }
    /* **********************END FUNCTION********************************* */

    /* ********************CLICK EVENT TO OPEN INDIGENCY MODAL****************** */
    const openIndigencyModal = async (id) =>{
        const resident = await axios.get(`/resident/id?id=${id}`)
        setCertificateData({
            ...certificateData,
            name: `${resident.data[0].fname} ${resident.data[0].lname}`,
            age: resident.data[0].age,
            gender: resident.data[0].gender,
            types: 'Indigency'
        })
        setShow({
            ...show,
            indigency: true
        })
    }
    /* **********************END FUNCTION********************************* */

    /* ********************CLICK EVENT TO OPEN PERMIT MODAL****************** */
    const openPermitModal = (id) =>{
        setShow({
            ...show,
            permit: true
        })
    }
    /* **********************END FUNCTION********************************* */

    /* ********************CLICK EVENT TO OPEN RESIDENCY MODAL****************** */
    const openResidencyModal = async (id) =>{
        const resident = await axios.get(`/resident/id?id=${id}`)
        setCertificateData({
            ...certificateData,
            name: `${resident.data[0].fname} ${resident.data[0].lname}`,
            age: resident.data[0].age,
            gender: resident.data[0].gender,
            types: 'Residency'
        })
        setShow({
            ...show,
            residency: true
        })
    }
    /* **********************END FUNCTION********************************* */

    /* **********************END FUNCTION********************************* */




    /* **********************SEARCH RESIDENT********************************* */
    const [searchResident, setRearchResident] = useState('')
    const filterResident = (event) =>{
        setRearchResident(event.target.value)
    }
    const residentFilter = residentData.filter(resident =>{
        return resident.fname.toLowerCase().includes(searchResident) || resident.lname.toLowerCase().includes(searchResident)
    })
    /* **********************END FUNCTION********************************* */


    return (
        <>
            <section className='certificate__container main-padding'>

                <TitleCard 
                    title="certificate"
                />

                {/* main */}
                <main className="blotter_list__main p-2 mt-3">
                    <div className="d-flex justify-content-end align-items-center mb-4"> 

                        {/* search resident */}
                        <Search 
                            filterSearch={filterResident}
                        />

                    </div>
                    {/* certificate table */}
                    <CertificateTable 
                        residentData={residentData}
                        searchResident={residentFilter}
                        loading={loading}
                        openCertificateModal={openClearanceModal}
                        openIndigencyModal={openIndigencyModal}
                        openPermitModal={openPermitModal}
                        openResidencyModal={openResidencyModal}
                    />
                </main>

                {/* clearance modal */}
                <ClearanceModal 
                    show={show.clearance}
                    residentData={certificateData}
                    resetData={setCertificateData}
                    handleClose={handleClose}
                    handleInput={handleInput}
                />

                {/* indigency modal */}
                <IndigencyModal 
                    show={show.indigency}
                    handleClose={handleClose}
                    residentData={certificateData}
                    resetData={setCertificateData}
                    handleInput={handleInput}
                />

                {/* permit modal */}
                <PermitModal 
                    show={show.permit}
                    handleClose={handleClose}
                    handleInputPermit={handleInputPermit}
                    resetData={setPermitData}
                    permitData={permitData}
                />

                {/* residency */}
                <ResidencyModal 
                    show={show.residency}
                    handleClose={handleClose}
                    residentData={certificateData}
                    resetData={setCertificateData}
                    handleInput={handleInput}
                />

            </section>
        </>
    )
}

export default Certificate