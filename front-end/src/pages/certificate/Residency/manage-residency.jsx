import { useState } from 'react';
import useAxios from '../../../hooks/useAxios'
import useSearch from '../../../hooks/useSearch'
import useGetDataById from '../../../hooks/getDataById';
import useDeleteCertificate from '../../../hooks/useDeleteCertificate'
import Search from "../../../components/search";
import TitleCard from "../../../components/title";
import ResidencyTable from "./residency-table";
import ResidencyUpdateModal from "./residency-update-modal";

function ResidencyManage(){

    /* ********** GET RESIDENCY DATA ********************************* */
    const [residencyData, loading, updateNew] = useAxios('/certificate/residency')
    /* ********** END FUNCTION ********************************* */


    /* ********** OPEN RESIDENCY MODAL ********************************* */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /* ********** END FUNCTION ********************************* */



    /* ********** OPEN RESIDENCY MODAL ********************************* */
    const [dataResidency, setResidency, getResidency] = useGetDataById()
    const [residencyID, setResidencyID] = useState()
    const openResidencyModal = async(id) =>{
        setResidencyID(id)
        await getResidency(`/certificate/id?id=${id}`)
        handleShow();
    } 
    /* ********** END FUNCTION ********************************* */


    /* ********** GET RESIDENCY DATA INPUT ********************************* */
    const handleChange = (event) =>{
        const { name, value } = event.target
        setResidency({
            ...dataResidency,
            [name]: value
        })
    }
    /* ********** END FUNCTION ********************************* */



    /* ********** DELETE RESIDENCY CERT. DATA ********************************* */
    const [deleteResidencyData] = useDeleteCertificate()
    const deleteResidency = async(id) =>{
        await deleteResidencyData(`/certificate/delete/residency?id=${id}`, updateNew)
    }
    /* ********** END FUNCTION ********************************* */



    /* ********** SEARCH RESIDENCY DATA ********************************* */
    const [searchValue, searchEvent] = useSearch()
    const filterResidency = residencyData.filter(residency =>{
        return residency.name.toLowerCase().includes(searchValue)
    })
    /* ********** END FUNCTION ********************************* */

    return (
        <>
            <section className="main-padding">

                <TitleCard 
                    title="residency"
                />

                {/* main */}
                <main className="p-2 mt-3">
                    <div className="d-flex justify-content-end align-items-center mb-4"> 
                        <Search 
                            filterSearch={searchEvent}
                        />
                    </div>

                    {/* manage indigency table */}
                    <ResidencyTable 
                        residencyData={residencyData}
                        loading={loading}
                        filterResidency={filterResidency}
                        openResidencyModal={openResidencyModal}
                        deleteResidency={deleteResidency}
                    />

                </main>

                {/* update indigency modal */}
                <ResidencyUpdateModal 
                    show={show}
                    handleClose={handleClose}
                    dataResidency={dataResidency}
                    handleChange={handleChange}
                    residencyID={residencyID}
                    updateNew={updateNew}
                />
            </section>
        </>
    )
}

export default ResidencyManage;