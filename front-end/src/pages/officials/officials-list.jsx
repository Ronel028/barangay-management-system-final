import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import TitleCard from '../../components/title'
import Search from '../../components/search'
import OfficialListTable from './official-list-table'

function OfficialsList(){

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

    const [officials, getOfficials] = useState([]) // state for storing offical data from database

    // function for getting all the value from input and save to official state
    const handleChange = (event)=>{
        const { name, value, files } = event.target
        setOfficial({
            ...official,
            [name] : name === 'photo' ? files[0] : value
        })
    }

    // function for saving all the data of officials to database
    const saveOfficials = (event) =>{
        event.preventDefault()
        console.log(official)
    }

    // fetching data of officials in database
    useEffect(()=>{
        const getOfficialsData = async ()=>{
            const official = await axios.get('/officials')
            getOfficials(official.data)
        }
        getOfficialsData();
    }, [])

    return (
        <>
            {/* main section */}
            <section className="officials__container main-padding">

                <TitleCard 
                    title="Official list"
                />

                <main className="officials__main p-2 mt-3">
                    <div className='d-flex justify-content-between align-items-center align-middle mb-4'>
                        <button type="button" className="btn text-bg-primary fs-7 fw-semibold" data-bs-toggle="modal" data-bs-target="#add-official">
                            <FontAwesomeIcon className='me-1' icon={faUserPlus}/>
                            Add Officials
                        </button>
                        <Search />
                    </div>
                    
                    <OfficialListTable 
                        officials={officials}
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
                                <form className="modal-body">
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