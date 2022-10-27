import { useState } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { convertDateToIsoString } from '../../custom/function'
import useAxios from '../../hooks/useAxios'
import Search from "../../components/search"
import TitleCard from '../../components/title'

function BlotterManage(){

    // hooks for getting all the data from the database
    const [blotterData, loading, updateNew] = useAxios('/blotter')

    // get the resident data
    const [resident] = useAxios('/resident')


    //---------------------FILTER BLOTTER DATA FUNCTION----------------------------
    const [filterBlotter, setFilterBlotter] = useState('')
    const filterBlotterData = (event) =>{
        setFilterBlotter(event.target.value)
    }

    // filter function
    const blotterFilter = blotterData.filter(blotter =>{
        return blotter.complainant_name.toLowerCase().includes(filterBlotter) || blotter.complainee_name.toLowerCase().includes(filterBlotter)
    })

    //---------------------END FILTER BLOTTER DATA FUNCTION----------------------------

    

    //---------------------DELETE FUNCTION----------------------------
    const [loadingDelete, setLoadingDelete] = useState({
        deleting: false,
        id: null
    })
    // delete function
    const deleteBlotter = async (id) =>{
        if(window.confirm('Are you sure you to remove this resident?')){
            setLoadingDelete({
                ...loadingDelete,
                deleting: true,
                id: id
            })
            const deleteBlotter = await axios.delete(`/blotter/delete?id=${id}`)
            setLoadingDelete({
                ...loadingDelete,
                deleting: false,
                id: null
            })
    
            if(deleteBlotter.data.message){
                return
            }else{
                updateNew(deleteBlotter.data)
            }
        }else{
            return
        }
    }
    //---------------------END DELETE FUNCTION----------------------------


    //---------------------MODAL FUNCTIONS----------------------------

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // search compalinant/complainee name
    const [search, setSearch] = useState({
        complainant_name: '',
        complainee_name: ''
    })
    const searchName = (event) =>{
        const { name, value } = event.target
        setSearch({
            ...search,
            [name] : value
        })
    }   

    // filter name
    const filterComplainantName = resident.filter(resident =>{
        return resident.fname.toLowerCase().includes(search.complainant_name) || resident.lname.toLowerCase().includes(search.complainant_name)
    })
    const filterComplainaneeName = resident.filter(resident =>{
        return resident.fname.toLowerCase().includes(search.complainee_name) || resident.lname.toLowerCase().includes(search.complainee_name)
    })
    //---------------------END MODAL FUNCTIONS----------------------------




    //---------------------UPDATE FUNCTION----------------------------

    const [complainantActive, setComplainantActive] = useState(false)
    const [complaineeActive, setComplaineeActive] = useState(false)
    const [updateBlotter, setUpdateBlotter] = useState({
        complainant_name: '',
        complainant_age: 0,
        complainant_gender: '',
        complainant_address: '',
        complainee_name: '',
        complainee_age: 0,
        complainee_gender: '',
        complainee_address: '',
        complaint: '',
        locationOfIncident: '',
        dateOfIncident: '',
        status: ''
    })

    // function for setting a update dropdown button both complainant name and complainee name
    const complainantDropdownButton = (event) =>{
        event.preventDefault()
        setComplainantActive((currentState) =>{
            if(currentState === false){
                return true
            }else{
                return false
            }
        })
    }
    const complaineeDropdownButton = (event) =>{
        event.preventDefault()
        setComplaineeActive((currentState) =>{
            if(currentState === false){
                return true
            }else{
                return false
            }
        })
    }
    //---end function-------------------------------------------

    // function for getting input value
    const handleChange = (event) =>{
        const { name, value } = event.target
        setUpdateBlotter({
            ...updateBlotter,
            [name] : value
        })
        setComplainantActive(false)
        setComplaineeActive(false)
    }
    // --end function----------------------------------

     // --get update data by id----------------------------------
    const handleUpdate = async (id) =>{
        const blotterData = await axios.get(`/blotter/blotter?id=${id}`)
        setUpdateBlotter({
            ...updateBlotter,
            complainant_name: blotterData.data[0].complainant_name,
            complainant_age: blotterData.data[0].complainant_age,
            complainant_gender: blotterData.data[0].complainant_gender,
            complainant_address: blotterData.data[0].complainant_address,
            complainee_name: blotterData.data[0].complainee_name,
            complainee_age: blotterData.data[0].complainee_age,
            complainee_gender: blotterData.data[0].complainee_gender,
            complainee_address:  blotterData.data[0].complainee_address,
            complaint:  blotterData.data[0].complaint,
            locationOfIncident:  blotterData.data[0].locationOfIncident,
            dateOfIncident: convertDateToIsoString(blotterData.data[0].dateOfIncident),
            status:  blotterData.data[0].status
        })
        handleShow()
    }
    // --end function----------------------------------

    // function for saving update blotter in database
    const saveUpdateBlotter = ()=>{
        console.log(updateBlotter)
    }
    // --end function---------------------------

    //---------------------END UPDATE FUNCTION----------------------------

    return (
        <>
            <section className="blotter__manage__container main-padding">

                <TitleCard 
                    title="manage blotter"
                />

                 {/* main */}
                <main className="blotter_list__main p-2 mt-3">
                    <div className="d-flex justify-content-end align-items-center mb-4"> 

                        {/* search */}
                        <Search 
                            filterSearch={filterBlotterData}
                        />

                    </div>

                    {/* table */}
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr className="text-bg-dark fs-7">
                            <th scope="col">Complainant</th>
                            <th scope="col">Complainee</th>
                            <th scope="col">Complaint</th>
                            <th scope="col">Location of Incident</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blotterData.length > 0 ? 
                                    blotterFilter.length > 0 ?
                                        blotterFilter.map(blotter =>(
                                            <tr key={blotter.id} className='align-middle fs-7'>
                                                <td>{blotter.complainant_name}</td>
                                                <td>{blotter.complainee_name}</td>
                                                <td>{blotter.complaint}</td>
                                                <td>{blotter.locationOfIncident}</td>
                                                <td>{blotter.status}</td>
                                                <td>
                                                    <button 
                                                        className="border-0 py-1 px-2 rounded text-bg-primary me-2" 
                                                        type="button" 
                                                        onClick={() => handleUpdate(blotter.id)}
                                                    >
                                                        <FontAwesomeIcon icon={faEdit}/>
                                                    </button>
                                                    <button 
                                                        className="border-0 py-1 px-2 rounded text-bg-danger" 
                                                        type="button"
                                                        onClick={() => deleteBlotter(blotter.id)}
                                                    >
                                                        <div className={loadingDelete.id === blotter.id ? 'spinner-arrow d-flex' : ''}>
                                                            <FontAwesomeIcon
                                                                className={loadingDelete.id === blotter.id ? 'invisible' : 'visible'}
                                                                icon={faTrash} 
                                                            />
                                                        </div>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    :<tr>
                                        <td colSpan='7' className="text-center">
                                            {filterBlotter} not found!
                                        </td>
                                    </tr>
                                : loading ? <tr>
                                                <td colSpan='7' className="text-center">
                                                    <div className="w-100 d-flex align-items-center justify-content-center">
                                                        <div className="spinner me-2"></div>
                                                        loading...
                                                    </div>
                                                </td>
                                            </tr>
                                        :   <tr>
                                                <td colSpan='7' className="text-center">
                                                    No data found
                                                </td>
                                            </tr>
                            }
                        </tbody>
                    </table>
                    {/* end table */}
                </main>

                {/* modal */}
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                                <FontAwesomeIcon className='me-2' icon={faEdit}/>
                                Update Blotter
                            </h1>
                        </Modal.Title>
                    </Modal.Header>
                    <form>
                        <div className="modal-body row">

                            {/* blotter left input */}
                            <div className="blotter__left col">
                                <div className="complainant mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainant">Complainant</label>
                                    <div className='position-relative'>
                                        <button 
                                            className='form-control-1 text-start'
                                            name="complainant_name"
                                            onClick={complainantDropdownButton}
                                        >
                                            {updateBlotter.complainant_name === '' ? '---select name---' : updateBlotter.complainant_name}
                                        </button>
                                        <div 
                                            className='position-absolute bg-white border w-100'
                                            style={{display: complainantActive ? 'block': 'none'}}
                                        >
                                            
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                placeholder='search...'
                                                name='complainant_name'
                                                onChange={searchName}
                                            />
                                            {   
                                                resident.length > 0 ?
                                                    filterComplainantName.length > 0 ?
                                                        filterComplainantName.map(resident =>(
                                                            <div key={resident.id} className='test-1 w-100 px-2 hover'>
                                                                <input 
                                                                    type="radio"
                                                                    className='d-none'
                                                                    id={`${resident.fname} ${resident.lname}`} 
                                                                    name="complainant_name"
                                                                    value={`${resident.fname} ${resident.lname}`}
                                                                    onChange={handleChange}
                                                                />
                                                                <label 
                                                                    className='fs-7' 
                                                                    htmlFor={`${resident.fname} ${resident.lname}`}
                                                                    >
                                                                        {`${resident.fname} ${resident.lname}`}
                                                                </label>
                                                            </div>
                                                        ))
                                                    :   <label className='fs-7 px-2'>
                                                            No Data found
                                                        </label>
                                                :   <label className='fs-7 px-2'>
                                                            No Data found
                                                    </label>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainant__age">Age</label>
                                    <input 
                                        type="number" 
                                        placeholder='complainant age' 
                                        className='form-control-1'
                                        name='complainant_age'
                                        value={updateBlotter.complainant_age}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainant_gender">Gender</label>
                                    <select 
                                        id="complainant_gender"
                                        className='form-control-1'
                                        name="complainant_gender" 
                                        value={updateBlotter.complainant_gender}
                                        onChange={handleChange}
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainant_address">Address</label>
                                    <input 
                                        type="text" 
                                        placeholder='complainant address' 
                                        className='form-control-1'
                                        name='complainant_address'
                                        value={updateBlotter.complainant_address}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* blotter right input */}
                            <div className="col">
                                <div className="complainee mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainee">Complainee</label>
                                    <div className='position-relative'>
                                        <button 
                                            className='form-control-1 text-start'
                                            name="complainee_name"
                                            onClick={complaineeDropdownButton}
                                        >
                                            {updateBlotter.complainee_name === '' ? '--- Select name ---' : updateBlotter.complainee_name}
                                        </button>
                                        <div 
                                            className='position-absolute bg-white border w-100'
                                            style={{display: complaineeActive ? 'block': 'none'}}
                                        >
                                            
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                placeholder='search...'
                                                name='complainee_name'
                                                onChange={searchName}
                                            />
                                            {
                                                resident.length > 0 ?
                                                    filterComplainaneeName.length > 0 ?
                                                        filterComplainaneeName.map(resident =>(
                                                            <div key={resident.id} className='test-1 w-100 px-2 hover'>
                                                                <input 
                                                                    type="radio"
                                                                    className='d-none'
                                                                    id={`${resident.lname} ${resident.fname}`}
                                                                    name="complainee_name"
                                                                    value={`${resident.fname} ${resident.lname}`} 
                                                                    onChange={handleChange}
                                                                />
                                                                <label 
                                                                    className='fs-7' 
                                                                    htmlFor={`${resident.lname} ${resident.fname}`}
                                                                >
                                                                    {`${resident.fname} ${resident.lname}`}
                                                                </label>
                                                            </div>

                                                        ))
                                                    :   <label className='fs-7 px-2'>
                                                            No data found
                                                        </label>
                                                :   <label className='fs-7 px-2'>
                                                        No data found
                                                    </label>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainee_age">Age</label>
                                    <input 
                                        type="number" 
                                        placeholder='complainee age' 
                                        className='form-control-1'
                                        name='complainee_age'
                                        value={updateBlotter.complainee_age}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainee_gender">Gender</label>
                                    <select 
                                        id="complainee_gender"
                                        className='form-control-1'
                                        name="complainee_gender"
                                        value={updateBlotter.complainee_gender}
                                        onChange={handleChange}
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainee_address">Address</label>
                                    <input 
                                        type="text" 
                                        placeholder='complainee address' 
                                        className='form-control-1'
                                        name='complainee_address'
                                        value={updateBlotter.complainee_address}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* blotter bottom input */}
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="complaint">Complaint</label>
                                    <input 
                                        type="text" 
                                        className='form-control-1' 
                                        placeholder='complaint'
                                        name='complaint'
                                        value={updateBlotter.complaint}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="locationOfIncident">Location of Incident</label>
                                    <input 
                                        type="text" 
                                        className='form-control-1' 
                                        placeholder='Location of Incident'
                                        name='locationOfIncident'
                                        value={updateBlotter.locationOfIncident}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="dataOfIncident">Date of Incident</label>
                                    <input 
                                        type="date" 
                                        placeholder='complainant address' 
                                        className='form-control-1'
                                        name='dateOfIncident'
                                        value={updateBlotter.dateOfIncident}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="Status">
                                    <label htmlFor="status">Status</label>
                                    <select 
                                        id="status"
                                        className='form-control-1'
                                        name="status" 
                                        value={updateBlotter.status}
                                        onChange={handleChange}
                                    >
                                        <option>Solve</option>
                                        <option>UnSolved</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end p-3">
                            <button 
                                type="button" 
                                className="btn text-bg-primary fs-7 fw-semibold"
                                onClick={saveUpdateBlotter}
                            >
                                Update Blotter
                            </button>
                        </div>
                    </form>
                </Modal>
                {/* end modal */}

            </section>
        </>
    )
}

export default BlotterManage