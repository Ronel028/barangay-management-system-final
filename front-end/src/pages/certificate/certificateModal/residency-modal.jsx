import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

function ResidencyModal(){
    return (
        <div className="modal fade" id="residency" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                        <FontAwesomeIcon className='me-2' icon={faPeopleGroup}/>
                        Residency
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form>
                    <div className="modal-body">
                        <div>
                            <div className='mb-3'>
                                <label className='fs-7 fw-semibold' htmlFor="residency__name">Name</label>
                                <input 
                                    type="text" 
                                    className='form-control-1' 
                                    id='residency__name' 
                                    name='residency__name' 
                                />
                            </div>
                            <div className="mb-3">
                                <label className='fs-7 fw-semibold' htmlFor="residency__age">Age</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    name='residency__age'
                                />
                            </div>
                            <div className="mb-3">
                                <label className='fs-7 fw-semibold' htmlFor="residency__gender">Gender</label>
                                <input 
                                    type="text" 
                                    className='form-control-1' 
                                    id='residency__gender' 
                                    name='residency__gender' 
                                />
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label className='fs-7 fw-semibold' htmlFor="residency__ornumber">OR-Number</label>
                                    <input 
                                        type="number" 
                                        className='form-control-1' 
                                        id='residency__ornumber' 
                                        name='residency__ornumber'
                                    />
                                </div>
                                <div className='col'>
                                    <label className='fs-7 fw-semibold' htmlFor="residency__amount">Amount</label>
                                    <input 
                                        type="number" 
                                        className='form-control-1' 
                                        id='residency__amount' 
                                        name='residency__amount'
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
                            Save Indigency
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default ResidencyModal