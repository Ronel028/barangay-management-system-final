import { useState } from 'react';
import useAxios from '../../../hooks/useAxios'
import useGetDataById from '../../../hooks/getDataById';
import useDeleteCertificate from '../../../hooks/useDeleteCertificate';
import Search from "../../../components/search";
import TitleCard from "../../../components/title";
import IndigencyTable from "./indigency-table";
import IndigencyUpdateModal from "./indigency-update-modal";

function IndigencyManage(){

    const [indigencyData, loading, updateNew] = useAxios('/certificate/indigency')


    // open and close modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // get indigency data by id
    const [indigencyId, setIndigencyId] = useState()
    const [indigency, setIndigency, getIndigency] = useGetDataById()
    const handleShowModal = async(id) =>{
        setIndigencyId(id)
        await getIndigency(`/certificate/id?id=${id}`)
        handleShow()
    }


    // get input value
    const handleChange = (event) =>{
        const { name, value } = event.target
        setIndigency({
            ...indigency,
            [name] : value
        })
    }


    // delete indigency data
    const [removeIndigency] = useDeleteCertificate()
    const deleteIndigency = (id) =>{
        removeIndigency(`/certificate/delete/indigency?id=${id}`, updateNew)
    }


    // event for search indigency
    const [searchValue, setSearchValue] = useState('')
    const handleSearch = (event) =>{
        setSearchValue(event.target.value)
    }
    const filterIndigency = indigencyData.filter(indigency =>{
        return indigency.name.toLowerCase().includes(searchValue)
    })

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
                            filterSearch={handleSearch}
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