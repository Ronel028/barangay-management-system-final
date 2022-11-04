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

    const [clearanceData, loading, refreshData] = useAxios('/certificate/clearance') // custom hooks for getting all data from database
    

    /* *********STATE FOR MODAL********* */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /* *********END STATE********* */


    //**********update clearance data ***********************************
    const [clearanceID, setClearanceID] = useState() // state for storing clearance id
    const [clearance, setClearance, setCertificate] = useGetDataById() //custom hooks for get date of certificate by id
    const updateClearance = async(id) =>{
        setClearanceID(id)
        await setCertificate(`/certificate/id?id=${id}`)
        handleShow()
    }
    //**********END FUNCTION ***************************************




    //*****************DELETE CLEARANCE DATA ***********************************
    const [deleteClearanceData] = useDeleteCertificate()
    const deleteClearance = async(id) =>{
        await deleteClearanceData(`/certificate/delete/clearance?id=${id}`, refreshData)
    }
    //******************END FUNCTION ***************************************




    // ******************CHANGE EVENT FOR INPUT******************************
    const handleChange = (event) =>{
        const { name, value } = event.target
        setClearance({
            ...clearance,
            [name]: value
        })
    }
    //******************END FUNCTION ***************************************


    // filter clearance data by search
    const [search, handleSearch] = useSearch() //custom hooks for getting the value of input search
    const filterClearance = clearanceData.filter(clearance =>{
        return clearance.name.toLowerCase().includes(search)
    })

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
                        filterClearance={filterClearance}
                        updateClearance={updateClearance}
                        deleteClearance={deleteClearance}
                    />

                </main>

                {/* update modal */}
                <ClearanceUpdateModal 
                    show={show}
                    handleClose={handleClose}
                    clearanceData={clearance}
                    refreshData={refreshData}
                    handleChange={handleChange}
                    clearanceID={clearanceID}
                />
            </section>
        </>
    )
}

export default ClearanceManage;