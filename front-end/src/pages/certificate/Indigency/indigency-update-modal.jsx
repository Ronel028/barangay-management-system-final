import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function IndigencyUpdateModal(){
    return (
        <div className="modal fade" id="update-indigency" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                        <FontAwesomeIcon className='me-2' icon={faEdit}/>
                        Update Indigency
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form>
                    <div className="modal-body">
                        <div>
                            <div className='mb-3'>
                                <label className='fs-7 fw-semibold' htmlFor="indigency__name">Name</label>
                                <input 
                                    type="text" 
                                    className='form-control-1' 
                                    id='indigency__name' 
                                    name='indigency__name' 
                                />
                            </div>
                            <div className="mb-3">
                                <label className='fs-7 fw-semibold' htmlFor="indigency__age">Age</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    name='indigency__age'
                                />
                            </div>
                            <div className="mb-3">
                                <label className='fs-7 fw-semibold' htmlFor="indigency__gender">Gender</label>
                                <input 
                                    type="text" 
                                    className='form-control-1' 
                                    id='indigency__gender' 
                                    name='indigency__gender' 
                                />
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label className='fs-7 fw-semibold' htmlFor="indigency__ornumber">OR-Number</label>
                                    <input 
                                        type="number" 
                                        className='form-control-1' 
                                        id='indigency__ornumber' 
                                        name='indigency__ornumber'
                                    />
                                </div>
                                <div className='col'>
                                    <label className='fs-7 fw-semibold' htmlFor="indigency__amount">Amount</label>
                                    <input 
                                        type="number" 
                                        className='form-control-1' 
                                        id='indigency__amount' 
                                        name='indigency__amount'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end p-3">
                        <button 
                            type="button" 
                            className="btn text-bg-primary fs-7 fw-semibold"
                        >
                            Update Indigency
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default IndigencyUpdateModal