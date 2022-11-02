import { useState } from 'react'
import useAxios from '../../../hooks/useAxios'
import useSearch from '../../../hooks/useSearch';
import useGetDataById from '../../../hooks/getDataById';
import useDeleteCertificate from '../../../hooks/useDeleteCertificate';
import Search from "../../../components/search";
import TitleCard from "../../../components/title";
import ClearanceTable from "./clearance-table";
import ClearanceUpdateModal from "./clearance-update-modal";

function ClearanceManage(){

    const [clearanceID, setClearanceID] = useState()
    const [clearanceData, loading, updateNew] = useAxios('/certificate/clearance')
    const [search, handleSearch] = useSearch()
    const [clearance, setClearance, setCertificate] = useGetDataById()

    // open and close modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //**********update clearance data ***********************************
    const updateClearance = async(id) =>{
        setClearanceID(id)
        await setCertificate(`/certificate/id?id=${id}`)
        handleShow()
    }
    //**********END FUNCTION ***************************************



    //**********delete clearance data ***********************************
    const [deleteClearanceData] = useDeleteCertificate()
    const deleteClearance = async(id) =>{
        await deleteClearanceData(`/certificate/delete/clearance?id=${id}`, updateNew)
    }
    //**********END FUNCTION ***************************************



    // ******************Change event for Input******************************
    const handleChange = (event) =>{
        const { name, value } = event.target
        setClearance({
            ...clearance,
            [name]: value
        })
    }
    //**********END FUNCTION ***************************************

    return (
        <>
            <section className="main-padding">

                <TitleCard 
                    title="Clearance"
                />

                {/* main */}
                <main className="p-2 mt-3">
                    <div className="d-flex justify-content-end align-items-center mb-4"> 

                        <Search 
                            filterSearch={handleSearch}
                        />

                    </div>
                    {/* manage clearance table */}
                    <ClearanceTable 
                        loading={loading}
                        clearanceData={clearanceData}
                        filterClearance={search}
                        updateClearance={updateClearance}
                        deleteClearance={deleteClearance}
                    />

                </main>

                {/* update modal */}
                <ClearanceUpdateModal 
                    show={show}
                    handleClose={handleClose}
                    clearanceData={clearance}
                    updateNew={updateNew}
                    handleChange={handleChange}
                    clearanceID={clearanceID}
                />
            </section>
        </>
    )
}

export default ClearanceManage;