import { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Modal } from 'react-bootstrap'
import useAxios from '../../hooks/useAxios'
import Search from '../../components/search'
import TitleCard from '../../components/title'
import BlotterTable from './blotter-list-table'
import Loader from '../../components/loader'
import ErrorCard from '../../components/errorCard'

function BlotterList(){

    
    //get resident list data
    const [data] = useAxios('/resident')
    const [blotterData, loading, addNewBlotter] = useAxios('/blotter')
    const [saveLoading, setSaveLoading] = useState(false)

    //modal show
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // error response by the server
    const [error, setError] = useState({
        display: false,
        message: ''
    })

    // filter data of blotter
    const [filterData, setFilterData] = useState('')
    const filterBlotter = (event) =>{
        setFilterData(event.target.value)
    }
    
    // search
    const [search, setSearch] = useState({
        search_complainant: '',
        search_complainee: ''
    })
    const handleSearch = (event) =>{
        const { name, value } = event.target
        setSearch({
            ...search,
            [name]: value
        })
    }

    // filter complainant name
    const filterResidentComplainant = data.filter(resident => {
        return resident.fname.toLowerCase().includes(search.search_complainant) || resident.lname.toLowerCase().includes(search.search_complainant)
    })
    // filter complainee name
    const filterResidentComplainee = data.filter(resident => {
        return resident.fname.toLowerCase().includes(search.search_complainee) || resident.lname.toLowerCase().includes(search.search_complainee)
    })

    const [complainantActive, setComplainantActive] = useState(false)
    const [complaineeActive, setComplaineeActive] = useState(false)
    const [addBlotter, setAddBlotter] = useState({
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
        status: '',
        dateOfIncident: ''
    })

    // onClick function to toggle custom dropdown
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
    // --end function------------------------------------

    // get all the input value
    const handleChange = (event) =>{
        const { name, value } = event.target
        setAddBlotter({
            ...addBlotter,
            [name] : value
        })
        setComplainantActive(false)
        setComplaineeActive(false)
    }

    // onClick function for saving new blotter to database
    const saveBlotter = async (event) =>{
        event.preventDefault()

        setSaveLoading(true)
        const saveBlotter = await axios.post('/blotter/insert', addBlotter, {
            headers : {
                'Content-Type': 'application/json'
            }
        })
        setSaveLoading(false)

        if(saveBlotter.data.message){
            setError({
                ...error,
                display: true,
                message: saveBlotter.data.message
            })
            setTimeout(()=>{
                setError({
                    ...error,
                    display: false,
                    message: ''
                })
            }, 2000)
        }else{
            addNewBlotter(saveBlotter.data)
            handleClose()
        }
    }
    // --end function------------------------------------


    return (
        <>
            <section className="blotter__container main-padding">

                <TitleCard 
                    title="blotter list"
                />
                
                {/* main */}
                <main className="blotter_list__main p-2 mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-4"> 
                        <button 
                            type="button" 
                            className="btn text-bg-primary fs-7 fw-semibold" 
                            onClick={handleShow}
                        >
                            <FontAwesomeIcon className='me-1' icon={faUserPlus}/>
                            Add Blotter
                        </button>
                        
                        {/* blotter search */}
                        <Search 
                            filterSearch={filterBlotter}
                        />

                    </div>

                    {/* blotter list table */}
                    <BlotterTable 
                        blotter={blotterData}
                        loading={loading}
                        filterData={filterData}
                    />

                </main>

                {/* modal */}
                <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                                <FontAwesomeIcon className='me-2' icon={faUserPlus}/>
                                New Blotter
                            </h1>
                        </Modal.Title>
                    </Modal.Header>

                    {/* error display */}
                    <ErrorCard 
                        errorDisplay={error.display}
                        error={error.message}
                    />

                    {/* form */}
                    <form>
                        <div className="modal-body row">

                            {/* loader animation while saving*/}
                            <Loader 
                                loader={saveLoading}
                                title="Saving..."
                            />

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
                                            {addBlotter.complainant_name === '' ? '--- Select name ---' : addBlotter.complainant_name}
                                        </button>
                                        <div 
                                            className='position-absolute bg-white border w-100 shadow-lg'
                                            style={{display: complainantActive ? 'block': 'none'}}
                                        >
                                            
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                placeholder='search...'
                                                name='search_complainant'
                                                onChange={handleSearch}
                                            />
                                            {   
                                                data.length > 0 ? 
                                                    filterResidentComplainant.length > 0 ? 
                                                        filterResidentComplainant.map(resident => (
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
                                                    : <label className='fs-7 px-2'>Can't find this resident</label>
                                                : <label className='fs-7 px-2'>No data find</label>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="complainant_age mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainant__age">Age</label>
                                    <input 
                                        type="number" 
                                        placeholder='complainant age' 
                                        className='form-control-1'
                                        name='complainant_age'
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="complainant__gender mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainant__gender">Gender</label>
                                    <select 
                                        id="complainant__gender"
                                        className='form-control-1'
                                        name="complainant_gender" 
                                        defaultValue=''
                                        onChange={handleChange}
                                    >
                                        <option value='' disabled>--- complainant gender ---</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className="complainant__address mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainant__address">Address</label>
                                    <input 
                                        type="text" 
                                        placeholder='complainant address' 
                                        className='form-control-1'
                                        name='complainant_address'
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* blotter right input */}
                            <div className="blotter__right col">
                                <div className="complainee mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainee">Complainee</label>
                                    <div className='position-relative'>
                                        <button 
                                            className='form-control-1 text-start'
                                            name="complainee_name"
                                            onClick={complaineeDropdownButton}
                                        >
                                            {addBlotter.complainee_name === '' ? '--- Select name ---' : addBlotter.complainee_name}
                                        </button>
                                        <div 
                                            className='position-absolute bg-white border w-100 shadow-lg'
                                            style={{display: complaineeActive ? 'block': 'none'}}
                                        >
                                            
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                placeholder='search...'
                                                name='search_complainee'
                                                onChange={handleSearch}
                                            />

                                            {
                                                data.length > 0 ?
                                                    filterResidentComplainee.length > 0 ?
                                                        filterResidentComplainee.map(resident => (
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
                                                    : <label className='fs-7 px-2'>Can't find this resident</label>
                                                : <label className='fs-7 px-2'>No data find</label>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="complainee__age mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainee__age">Age</label>
                                    <input 
                                        type="number" 
                                        placeholder='complainee age' 
                                        className='form-control-1'
                                        name='complainee_age'
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="complainee__gender mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainee__gender">Gender</label>
                                    <select 
                                        id="complainee__gender"
                                        className='form-control-1'
                                        name="complainee_gender" 
                                        defaultValue=''
                                        onChange={handleChange}
                                    >
                                        <option value='' disabled>--- complainee gender ---</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className="complainee__address mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complainee__address">Address</label>
                                    <input 
                                        type="text" 
                                        placeholder='complainee address' 
                                        className='form-control-1'
                                        name='complainee_address'
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* blotter bottom input */}
                            <div className="blotter__bottom">
                                <div className="complaint mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="complaint">Complaint</label>
                                    <input 
                                        type="text" 
                                        className='form-control-1' 
                                        placeholder='complaint'
                                        name='complaint'
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="locationOfIncident mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="locationOfIncident">Location of Incident</label>
                                    <input 
                                        type="text" 
                                        className='form-control-1' 
                                        placeholder='Location of Incident'
                                        name='locationOfIncident'
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="date_incident mb-3">
                                    <label className='fs-7 fw-bold' htmlFor="date_incident">Date of Incident</label>
                                    <input 
                                        type="date" 
                                        className='form-control-1'
                                        name='dateOfIncident'
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="Status">
                                    <label className='fs-7 fw-bold' htmlFor="status">Status</label>
                                    <select 
                                        id="status"
                                        className='form-control-1'
                                        defaultValue=''
                                        name="status" 
                                        onChange={handleChange}
                                    >
                                        <option value='' disabled>--- select status ---</option>
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
                                onClick={saveBlotter}
                            >
                                Save Blotter
                            </button>
                        </div>
                    </form>
                </Modal>
                {/* end modal */}

            </section>
        </>
    )
}

export default BlotterList