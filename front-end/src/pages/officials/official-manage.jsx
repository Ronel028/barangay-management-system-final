import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Search from '../../components/search'
import TitleCard from '../../components/title'

function OfficialManage(){
    return(
        <>
            <section className="officials__manage__container main-padding">

                <TitleCard title="manage officials"/>

                {/* main */}
                <main className="officials__manage__main p-2 mt-3">
                    <div className='d-flex justify-content-end align-items-center mb-4'>
                        <Search />
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
                            <tr className='align-middle fs-7'>
                                <td>
                                    <div className='table__image__container border rounded border-secondary p-1'>
                                        <img className='w-100 h-100' src="" alt="..." />
                                    </div>
                                </td>
                                <td>Ronel Florida</td>
                                <td>09345652345</td>
                                <td>Captain</td>
                                <td>07-29-2022</td>
                                <td>07-29-2024</td>
                                <td>
                                    <button 
                                        className="border-0 py-1 px-2 rounded text-bg-primary me-2" 
                                        type="button" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#update-official"
                                    >
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </button>
                                    <button className="border-0 py-1 px-2 rounded text-bg-danger" type="button">
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </td>
                            </tr>
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
                                            />
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="position" className='me-4 fw-semibold mb-2 fs-7'>Position</label>
                                            <select 
                                                className="form-control-1 col" 
                                                defaultValue='' 
                                                id='position' 
                                                aria-label="Default select example"
                                            >
                                                <option value='' disabled>---Select position---</option>
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
                                            />
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="startTerm" className='me-4 fw-semibold mb-2 fs-7'>Term Start</label>
                                            <input 
                                                type="date" 
                                                id='startTerm' 
                                                className='form-control-1' 
                                            />
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="endTerm" className='me-4 fw-semibold mb-2 fs-7'>Term End</label>
                                            <input 
                                                type="date" 
                                                id='endTerm' 
                                                className='form-control-1' 
                                            />
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="address" className='me-4 fw-semibold mb-2 fs-7'>Address</label>
                                            <textarea 
                                                className="form-control-1" 
                                                id='address' 
                                                aria-label="With textarea"
                                            ></textarea>
                                        </div>
                                        <div className='align-items-center mb-3'>
                                            <label htmlFor="photo" className='me-4 fw-semibold mb-2 fs-7'>Upload photo</label>
                                            <input 
                                                type="file" 
                                                id='photo' 
                                                className='form-control-1'
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-end p-2 pe-0">
                                        <button 
                                            type="button" 
                                            className="btn text-bg-primary fs-7 fw-semibold"
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