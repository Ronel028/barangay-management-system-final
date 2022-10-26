import { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import useAxios from '../../hooks/useAxios'
import Search from "../../components/search"
import TitleCard from '../../components/title'

function BlotterManage(){

    // hooks for getting all the data from the database
    const [blotterData, loading, updateNew] = useAxios('/blotter')

    //filter blotter data ------------------------------------------
    const [filterBlotter, setFilterBlotter] = useState('')
    const filterBlotterData = (event) =>{
        setFilterBlotter(event.target.value)
    }

    // filter function
    const blotterFilter = blotterData.filter(blotter =>{
        return blotter.complainant_name.toLowerCase().includes(filterBlotter) || blotter.complainee_name.toLowerCase().includes(filterBlotter)
    })

    //--------------------------------------------------------

    const [complainantActive, setComplainantActive] = useState(false)
    const [complaineeActive, setComplaineeActive] = useState(false)
    const [updateBlotter, setUpdateBlotter] = useState({
        complainant__name: '',
        complainant__age: 0,
        complainant__gender: '',
        complainant__address: '',
        complainee__name: '',
        complainee__age: 0,
        complainee__gender: '',
        complainee__address: '',
        complaint: '',
        locationOfIncident: '',
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

    // function for saving update blotter in database
    const saveUpdateBlotter = ()=>{
        console.log(updateBlotter)
    }
    // --end function---------------------------

    // delete function -------------------------------------------------
    const [loadingDelete, setLoadingDelete] = useState({
        deleting: false,
        id: null
    })
    const deleteBlotter = async (id) =>{
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
    }

    //---------------------------------------------------------------

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
                                                <td>{blotter.locatioOfIncident}</td>
                                                <td>{blotter.status}</td>
                                                <td>
                                                    <button 
                                                        className="border-0 py-1 px-2 rounded text-bg-primary me-2" 
                                                        type="button" 
                                                        data-bs-toggle="modal" 
                                                        data-bs-target="#update-blotter"
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
                <div className="modal modal-lg fade" id="update-blotter" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                                    <FontAwesomeIcon className='me-2' icon={faEdit}/>
                                    Update Blotter
                                </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form>
                                <div className="modal-body row">

                                    {/* blotter left input */}
                                    <div className="blotter__left col">
                                        <div className="complainant mb-3">
                                            <label className='fs-7 fw-bold' htmlFor="complainant">Complainant</label>
                                            <div className='position-relative'>
                                                <button 
                                                    className='form-control-1 text-start'
                                                    name="complainant__name"
                                                    onClick={complainantDropdownButton}
                                                >
                                                    {updateBlotter.complainant__name === '' ? '---select name---' : updateBlotter.complainant__name}
                                                </button>
                                                <div 
                                                    className='position-absolute bg-white border w-100'
                                                    style={{display: complainantActive ? 'block': 'none'}}
                                                >
                                                    
                                                    <input 
                                                        type="text" 
                                                        className='form-control-1' 
                                                        placeholder='search...'
                                                    />
                                                    <div className='test-1 w-100 px-2 hover'>
                                                        <input 
                                                            type="radio"
                                                            className='d-none'
                                                            id="Ronel Florida" 
                                                            name="complainant__name"
                                                            value="Ronel Florida"
                                                            onChange={handleChange}
                                                        />
                                                        <label className='fs-7' htmlFor="Ronel Florida">Ronel Florida</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="complainant__age mb-3">
                                            <label className='fs-7 fw-bold' htmlFor="complainant__age">Age</label>
                                            <input 
                                                type="number" 
                                                placeholder='complainant age' 
                                                className='form-control-1'
                                                name='complainant__age'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="complainant__gender mb-3">
                                            <label className='fs-7 fw-bold' htmlFor="complainant__gender">Gender</label>
                                            <select 
                                                id="complainant__gender"
                                                className='form-control-1'
                                                name="complainant__gender" 
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
                                                name='complainant__address'
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
                                                    name="complainee__name"
                                                    onClick={complaineeDropdownButton}
                                                >
                                                    {updateBlotter.complainee__name === '' ? '--- Select name ---' : updateBlotter.complainee__name}
                                                </button>
                                                <div 
                                                    className='position-absolute bg-white border w-100'
                                                    style={{display: complaineeActive ? 'block': 'none'}}
                                                >
                                                    
                                                    <input 
                                                        type="text" 
                                                        className='form-control-1' 
                                                        placeholder='search...'
                                                    />
                                                    <div className='test-1 w-100 px-2 hover'>
                                                        <input 
                                                            type="radio"
                                                            className='d-none'
                                                            id="johndoe" 
                                                            name="complainee__name"
                                                            value="John Doe" 
                                                            onChange={handleChange}
                                                        />
                                                        <label className='fs-7' htmlFor="johndoe">John Doe</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="complainee__age mb-3">
                                            <label className='fs-7 fw-bold' htmlFor="complainee__age">Age</label>
                                            <input 
                                                type="number" 
                                                placeholder='complainee age' 
                                                className='form-control-1'
                                                name='complainee__age'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="complainee__gender mb-3">
                                            <label className='fs-7 fw-bold' htmlFor="complainee__gender">Gender</label>
                                            <select 
                                                id="complainee__gender"
                                                className='form-control-1'
                                                name="complainee__gender" 
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
                                                name='complainee__address'
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* blotter bottom input */}
                                    <div className="blotter__bottom">
                                        <div className="complaint mb-3">
                                            <label htmlFor="complaint">Complaint</label>
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                placeholder='complaint'
                                                name='complaint'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="locationOfIncident mb-3">
                                            <label htmlFor="locationOfIncident">Location of Incident</label>
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                placeholder='Location of Incident'
                                                name='locationOfIncident'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="Status">
                                            <label htmlFor="status">Status</label>
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
                                        onClick={saveUpdateBlotter}
                                    >
                                        Update Blotter
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* end modal */}

            </section>
        </>
    )
}

export default BlotterManage