import { useState } from 'react'
import axios from 'axios';
import useAxios from '../../../hooks/useAxios'
import useSearch from '../../../hooks/useSearch'
import { convertDateToIsoString } from '../../../custom/function'
import Search from "../../../components/search";
import TitleCard from "../../../components/title";
import PermitTable from "./permit-table";
import PermitUpdateModal from "./permit-update-modal";

function PermitManage(){

    /* ***************** GET DATA OF BUSINESS PERMIT IN DATABASE ************* */
    const [permitData, loading, updateNew] = useAxios('/permit')
    /* ************************** END FUNCTION *********************** */



    /* ****************STATE FOR MODAL************************** */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /* ****************END STATE************************** */


    /* **************** PERMIT DATA STATE ************************** */
    const [businessPermitData, setBusinessPermitData]= useState({
        ownerName: '',
        natureOfBusiness: '',
        businessAddress: '',
        startDate: '',
        endDate: '',
        orNumber: 0,
        amount: 0
    })
    /* ****************END STATE************************** */



    /* ****************SHOW PERMIT MODAL FUNCTION************************** */
    const showPermitModal = async(id) =>{
        const getPermitData = await axios.get(`/permit/id?id=${id}`)
        setBusinessPermitData({
            ...businessPermitData,
            ownerName: getPermitData.data[0].owner,
            natureOfBusiness: getPermitData.data[0].natureOfBusiness,
            businessAddress: getPermitData.data[0].businessAddress,
            startDate: convertDateToIsoString(getPermitData.data[0].start_date),
            endDate: convertDateToIsoString(getPermitData.data[0].end_date),
            orNumber: getPermitData.data[0].orNumber,
            amount: getPermitData.data[0].amount
        })
        handleShow()
    }
    /* ****************END FUNCTION************************** */



    /* ****************EVENT FOR GETTING VALUE FROM INPUT************************** */
    const handleChange = async(event) =>{
        const { name, value } = event.target
        setBusinessPermitData({
            ...businessPermitData,
            [name]: value
        })
    }
    /* ****************END FUNCTION************************** */



    /* ***************** GET DATA OF BUSINESS PERMIT IN DATABASE ************* */
    const [searchValue, searchEvent] = useSearch()
    const filterPermitData = permitData.filter(permit =>{
        return permit.owner.toLowerCase().includes(searchValue)
    })
    /* ************************ END FUNCTION *********************** */

    return (
        <>
            <section className="main-padding">

                <TitleCard 
                    title="business permit"
                />

                {/* main */}
                <main className="p-2 mt-3">
                    <div className="d-flex justify-content-end align-items-center mb-4"> 

                        <Search 
                            filterSearch={searchEvent}
                        />

                    </div>

                    {/* manage indigency table */}
                    <PermitTable 
                        permitData={permitData}
                        loading={loading}
                        filterPermitData={filterPermitData}
                        showPermitModal={showPermitModal}
                    />

                </main>

                {/* update indigency modal */}
                <PermitUpdateModal 
                    show={show}
                    handleClose={handleClose}
                    businessPermitData={businessPermitData}
                    handleChange={handleChange}
                />

            </section>
        </>
    )
}

export default PermitManage;