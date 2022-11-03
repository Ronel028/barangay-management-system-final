import { useState } from 'react';
import useAxios from '../../../hooks/useAxios'
import useGetDataById from '../../../hooks/getDataById';
import useDeleteCertificate from '../../../hooks/useDeleteCertificate';
import useSearch from '../../../hooks/useSearch'
import Search from "../../../components/search";
import TitleCard from "../../../components/title";
import IndigencyTable from "./indigency-table";
import IndigencyUpdateModal from "./indigency-update-modal";

function IndigencyManage(){

    const [indigencyData, loading, updateNew] = useAxios('/certificate/indigency')


    /* ****************STATE FOR MODAL************************** */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /* ****************END STATE************************** */



    /* ****************FUNCTION TO GET DATA BY ID************************** */
    const [indigencyId, setIndigencyId] = useState()
    const [indigency, setIndigency, getIndigency] = useGetDataById()
    const handleShowModal = async(id) =>{
        setIndigencyId(id)
        await getIndigency(`/certificate/id?id=${id}`)
        handleShow()
    }
    /* ****************END FUNCTION************************** */



     /* ************ FUNCTION TO GET INPUT VALUE ********************* */
    const handleChange = (event) =>{
        const { name, value } = event.target
        setIndigency({
            ...indigency,
            [name] : value
        })
    }
     /* *************END FUNCTION***************************** */


    
    /* **************** DELETE INDIGENCY DATE ***************************** */
    const [removeIndigency] = useDeleteCertificate()
    const deleteIndigency = async(id) =>{
        await removeIndigency(`/certificate/delete/indigency?id=${id}`, updateNew)
    }
    /* *************END FUNCTION***************************** */



    /* *************EVENT FOR SEARCH DATA ***************************** */
    const [searchValue, setSearchValue] = useSearch()
    const filterIndigency = indigencyData.filter(indigency =>{
        return indigency.name.toLowerCase().includes(searchValue)
    })
    /* *************END FUNCTION***************************** */

    return (
        <>
            <section className="main-padding">

                <TitleCard 
                    title="indigency"
                />

                {/* main */}
                <main className="p-2 mt-3">
                    <div className="d-flex justify-content-end align-items-center mb-4"> 
                        <Search 
                            filterSearch={setSearchValue}
                        />
                    </div>

                    {/* manage indigency table */}
                    <IndigencyTable 
                        indigencyData={indigencyData}
                        loading={loading}
                        showModal={handleShowModal}
                        deleteIndigency={deleteIndigency}
                        filterIndigency={filterIndigency}
                    />

                </main>

                {/* update indigency modal */}
                <IndigencyUpdateModal 
                    show={show}
                    handleClose={handleClose}
                    indigencyData={indigency}
                    handleChange={handleChange}
                    indigencyId={indigencyId}
                    updateNew={updateNew}
                />

            </section>
        </>
    )
}

export default IndigencyManage;