import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import useAxios from '../../hooks/useAxios'
import useSearch from '../../hooks/useSearch'
import TitleCard from '../../components/title'
import Search from '../../components/search'
import OfficialListTable from './official-list-table'

function OfficialsList(){

    //state for modal active if have a error
    const [hideModal, setHideModal] = useState(true)
    //stete for value of input search
    const [search, searchValue] = useSearch()

    //state for loading animation in saving
    const [loader, setLoader] = useState(false)

    //state for storing the value from the input
    const [official, setOfficial] = useState({
        name: '',
        position: '',
        contact: '',
        startTerm: '',
        endTerm: '',
        address: '',
        photo: null
    })

    //state for the error message response by the server
    const [errorMessage, setErrorMessage] = useState({
        display: 'none',
        message: ''
    })

    // function for getting all the value from input and save to official state
    const handleChange = (event)=>{
        const { name, value, files } = event.target
        setOfficial({
            ...official,
            [name] : name === 'photo' ? files[0] : value
        })
    }

    // function for saving all the data of officials to database
    const saveOfficials = async (event) =>{
        event.preventDefault()
        const officialsForm = new FormData()
        officialsForm.append('name', official.name)
        officialsForm.append('contact', official.contact)
        officialsForm.append('position', official.position)
        officialsForm.append('termStart', official.startTerm)
        officialsForm.append('termEnd', official.endTerm)
        officialsForm.append('address', official.address)
        officialsForm.append('officialsPhoto', official.photo)
        
        // call endpoint for saving this formdata to database
        setLoader(true)
        const insertOfficials = await axios.post('/officials/insert', officialsForm, {
            headers : {
                'Content-Type': 'multipart/form-data'
            }
        })
        setLoader(false)
        //condition that what will happen the response of the server
        if(insertOfficials.data.message === 'success'){
            window.location.reload()

        }else{
            setHideModal(true)
            setErrorMessage({
                ...errorMessage,
                display: 'block',
                message: insertOfficials.data.message
            })
            setTimeout(()=>{
                setErrorMessage({
                    ...errorMessage,
                    display: 'none',
                    message: ''
                })
            }, 2000)
        }
    }

    // custom hook for getting all data in database
    const [data, loading] = useAxios('/officials')

    return (
        <>
            {/* main section */}
            <section className="officials__container main-padding position-relative">

                <TitleCard 
                    title="Official list"
                />

                <main className="officials__main p-2 mt-3">
                    <div className='d-flex justify-content-between align-items-center align-middle mb-4'>
                        <button type="button" className="btn text-bg-primary fs-7 fw-semibold" data-bs-toggle="modal" data-bs-target="#add-official">
                            <FontAwesomeIcon className='me-1' icon={faUserPlus}/>
                            Add Officials
                        </button>
                        <Search 
                            filterOfficials={searchValue}
                        />
                    </div>
                    
                    <OfficialListTable 
                        officials={data}
                        loading={loading}
                        searchOfficials={search}
                    />

                    {/* modal */}
                    <div className="modal modal fade" id='add-official' data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-6 d-flex align-items-center">
                                        <FontAwesomeIcon className='me-2' icon={faUserPlus}/>
                                        Add new officials
                                    </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div 
                                    className='alert alert-danger rounded-0'
                                    style={{display: errorMessage.display}}
                                >
                                    {errorMessage.message}
                                </div>


                                <form className="modal-body">
                                    <div 
                                        className='align-items-center mb-2'
                                        style={{display: loader ? 'flex' : 'none'}}
                                    >
                                        <div className='spinner me-2'></div>
                                        saving...
                                    </div>
                                    
                                    <div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="name" className='me-4 fw-semibold mb-2 fs-7'>Name <small className='fw-light'><em>(First name, Middle name, Last name)</em></small></label>
                                            <input 
                                                type="text" 
                                                id='name' 
                                                className='form-control-1' 
                                                placeholder='Enter full name...'
                                                name='name'
                                                value={official.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="position" className='me-4 fw-semibold mb-2 fs-7'>Position</label>
                                            <select 
                                                className="form-control-1" 
                                                defaultValue='' 
                                                id='position' 
                                                aria-label="Default select example"
                                                name='position'
                                                onChange={handleChange}
                                            >
                                                <option value='' disabled>---Select position---</option>
                                                <option value="Captain">Captain</option>
                                                <option value="Kagawad">Kagawad</option>
                                                <option value="SK Chairman">SK Chairman</option>
                                            </select>
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="contact" className='me-4 fw-semibold mb-2 fs-7'>Contact</label>
                                            <input 
                                                type="text" 
                                                id='contact' 
                                                className='form-control-1' 
                                                placeholder='Phone number...'
                                                name='contact'
                                                value={official.contact}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="startTerm" className='me-4 fw-semibold mb-2 fs-7'>Term Start</label>
                                            <input 
                                                type="date" 
                                                id='startTerm' 
                                                className='form-control-1' 
                                                name='startTerm'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="endTerm" className='me-4 fw-semibold mb-2 fs-7'>Term End</label>
                                            <input 
                                                type="date" 
                                                id='endTerm' 
                                                className='form-control-1' 
                                                name='endTerm'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="address" className='me-4 fw-semibold mb-2 fs-7'>Address</label>
                                            <textarea 
                                                className="form-control-1" 
                                                id='address' 
                                                aria-label="With textarea"
                                                name='address'
                                                value={official.address}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="photo" className='me-4 fw-semibold mb-2 fs-7'>Upload photo</label>
                                            <input 
                                                type="file" 
                                                id='photo' 
                                                className='form-control-1' 
                                                name='photo'
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-end p-2 pe-0">
                                        <button 
                                            type="button" 
                                            className="btn text-bg-primary fs-7 fw-semibold"
                                            data-bs-dismiss={hideModal ? '' : 'modal'}
                                            onClick={saveOfficials}
                                        >
                                            Add Official
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </main>

            </section>
        </>
    )
}

export default OfficialsList