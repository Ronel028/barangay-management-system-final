import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function ClearanceUpdateModal(){
    return (
        <div className="modal fade" id="update-clearance" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                        <FontAwesomeIcon className='me-2' icon={faEdit}/>
                        Update Clearance
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form>
                    <div className="modal-body">
                        <div>
                            <div className='mb-3'>
                                <label className='fs-7 fw-semibold' htmlFor="clearance__name">Name</label>
                                <input 
                                    type="text" 
                                    className='form-control-1' 
                                    id='clearance__name' 
                                    name='clearance_name' 
                                />
                            </div>
                            <div className="mb-3">
                                <label className='fs-7 fw-semibold' htmlFor="clearance__age">Age</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    name='clearance__age'
                                />
                            </div>
                            <div className="mb-3">
                                <label className='fs-7 fw-semibold' htmlFor="clearance__gender">Gender</label>
                                <input 
                                    type="text" 
                                    className='form-control-1' 
                                    id='clearance__gender' 
                                    name='clearance__gender' 
                                />
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label className='fs-7 fw-semibold' htmlFor="clearance__ornumber">OR-Number</label>
                                    <input 
                                        type="number" 
                                        className='form-control-1' 
                                        id='clearance__ornumber' 
                                        name='clearance__ornumber'
                                    />
                                </div>
                                <div className='col'>
                                    <label className='fs-7 fw-semibold' htmlFor="clearance__amount">Amount</label>
                                    <input 
                                        type="number" 
                                        className='form-control-1' 
                                        id='clearance__amount' 
                                        name='clearance__amount'
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
                            Update Clearance
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default ClearanceUpdateModal