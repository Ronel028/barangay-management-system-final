import { useState } from 'react'
import axios from 'axios'
import useAxios from '../../hooks/useAxios'
import useSearch from '../../hooks/useSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { convertBase64ToImage, dataURLtoFile } from '../../custom/function'
import Search from '../../components/search'
import TitleCard from '../../components/title'


function OfficialManage(){

    //custom hooks for search
    const [search, searchValue] = useSearch()

    //state for delete loading
    const [loadingDelete, setLoadingDelete] = useState({
        deleting: false,
        id: null
    })

    // format date
    const dateFormat = (date)=>{
        return new Date(date).toLocaleDateString()
    }
    // get data of officials from database
    const [data, loading] = useAxios('/officials')

    // filter official 
    const filterOfficial = data.filter(official =>{
        return official.name.toLowerCase().includes(search)
    })

    //delete officials
    const deleteOfficials = async (id) =>{
        if(window.confirm('Are you sure you to remove this official?')){
            setLoadingDelete({
                ...loadingDelete,
                deleting: true,
                id: id
            })
            const deleteOfficial = await axios.delete(`/officials/delete?id=${id}`)
            setLoadingDelete({
                ...loadingDelete,
                deleting: false,
                id: null
            })
            if(deleteOfficial.data.message === 'success'){
                window.location.reload()
            }
        }else{
            return;
        }
    }

    // --------------------------------------------------------------------------

    // official data update section

    //state for saving official data get from database
    const [official, setOfficial] = useState({
        name: '',
        position: '',
        contact: '',
        term_start: '',
        term_end: '',
        address: '',
        photo: null
    })

    // fetching official data
    const updateOfficial = async (id)=>{
        const getOfficialById = await axios.get(`/officials/data?id=${id}`)
        const { name, position, contact, term_start, term_end, address, photo } = getOfficialById.data[0]
        setOfficial({
            ...official,
            name,
            position,
            contact,
            term_start: new Date(term_start).toISOString().slice(0, 10), 
            term_end: new Date(term_end).toISOString().slice(0, 10),
            address, 
            photo : dataURLtoFile(convertBase64ToImage(photo), name)
        })
    }

    // handle change event
    const handleUpdateChange = (event) =>{
        const { name, value, files  } = event.target
        setOfficial({
            ...official,
            [name]: name === 'photo' ? files[0] : value
        })
    }

    // update
    const updateOfficialData = (event) =>{
        event.preventDefault();
        console.log(official)
    }




    return(
        <>
            <section className="officials__manage__container main-padding">

                <TitleCard title="manage officials"/>

                {/* main */}
                <main className="officials__manage__main p-2 mt-3">
                    <div className='d-flex justify-content-end align-items-center mb-4'>
                        <Search 
                            filterOfficials={searchValue}
                        />
                    </div>
                    {/* table */}
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr className="text-bg-dark fs-7">
                                <th scope="col">Photo</th>
                                <th scope="col">Name</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Position</th>
                                <th scope="col">Term Start</th>
                                <th scope="col">Term End</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.length > 0 ? 
                                        filterOfficial.length > 0 ?
                                            filterOfficial.map(official =>{
                                                return <tr className='align-middle fs-7' key={official.id}>
                                                            <td>
                                                                <div className='table__image__container border rounded border-secondary p-1'>
                                                                    <img className='w-100 h-100' src={convertBase64ToImage(official.photo)} alt={official.name} />
                                                                </div>
                                                            </td>
                                                            <td>{official.name}</td>
                                                            <td>{official.contact}</td>
                                                            <td>{official.position}</td>
                                                            <td>{dateFormat(official.term_start)}</td>
                                                            <td>{dateFormat(official.term_end)}</td>
                                                            <td>
                                                                <button 
                                                                    className="border-0 py-1 px-2 rounded text-bg-primary me-2" 
                                                                    type="button" 
                                                                    data-bs-toggle="modal" 
                                                                    data-bs-target="#update-official"
                                                                    onClick={() => updateOfficial(official.id)}
                                                                >
                                                                    <FontAwesomeIcon icon={faEdit}/>
                                                                </button>
                                                                <button 
                                                                    className="border-0 py-1 px-2 rounded text-bg-danger" 
                                                                    type="button"
                                                                    onClick={() => deleteOfficials(official.id)}
                                                                >
                                                                    <div className={loadingDelete.id === official.id ? 'spinner-arrow d-flex' : ''}>
                                                                        <FontAwesomeIcon
                                                                            className={loadingDelete.id === official.id ? 'invisible' : 'visible'}
                                                                            icon={faTrash} 
                                                                        />
                                                                    </div>
                                                                    
                                                                </button>
                                                            </td>
                                                        </tr>
                                            })
                                        :<tr>
                                            <td colSpan='7' className="text-center">
                                                {search} is not found...
                                            </td>
                                        </tr>
                                    :loading ? <tr>
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


                    {/* modal */}
                    <div className="modal modal fade" id='update-official' data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-6 d-flex align-items-center">
                                        <FontAwesomeIcon className='me-2' icon={faPenToSquare}/>
                                        Update officials
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
                                                onChange={handleUpdateChange}
                                            />
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="position" className='me-4 fw-semibold mb-2 fs-7'>Position</label>
                                            <select 
                                                className="form-control-1 col"
                                                id='position' 
                                                aria-label="Default select example"
                                                name='position'
                                                value={official.position}
                                                onChange={handleUpdateChange}
                                            >
                                                <option>Captain</option>
                                                <option>Kagawad</option>
                                                <option>SK Chairman</option>
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
                                                onChange={handleUpdateChange}
                                            />
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="startTerm" className='me-4 fw-semibold mb-2 fs-7'>Term Start</label>
                                            <input 
                                                type="date" 
                                                id='startTerm' 
                                                className='form-control-1' 
                                                name='term_start'
                                                value={official.term_start}
                                                onChange={handleUpdateChange}
                                            />
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="endTerm" className='me-4 fw-semibold mb-2 fs-7'>Term End</label>
                                            <input 
                                                type="date" 
                                                id='endTerm' 
                                                className='form-control-1' 
                                                name='term_end'
                                                value={official.term_end}
                                                onChange={handleUpdateChange}
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
                                                onChange={handleUpdateChange}
                                            ></textarea>
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="photo" className='me-4 fw-semibold mb-2 fs-7'>Upload photo</label>
                                            <input 
                                                type="file" 
                                                id='photo' 
                                                className='form-control-1'
                                                name='photo'
                                                onChange={handleUpdateChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-end p-2 pe-0">
                                        <button 
                                            type="button" 
                                            className="btn text-bg-primary fs-7 fw-semibold"
                                            onClick={updateOfficialData}
                                        >
                                            Update Official
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* end modal */}
                </main>
            </section>
        </>
    )
}

export default OfficialManage