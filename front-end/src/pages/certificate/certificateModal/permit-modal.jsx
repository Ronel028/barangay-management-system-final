import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStamp } from '@fortawesome/free-solid-svg-icons'

function PermitModal(){
    return (
        <div className="modal fade" id="permit" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                            <FontAwesomeIcon className='me-2' icon={faStamp}/>
                            Business Permit
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className='mb-3'>
                                <label className='fs-7 fw-bold' htmlFor="permit__name">Owner/Resident</label>
                                <input 
                                    type="text" 
                                    id='permit__name' 
                                    className='form-control-1' 
                                    name='permit__name'
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='fs-7 fw-bold' htmlFor="business__name">Nature of Business</label>
                                <input 
                                    type="text" 
                                    id='business__name' 
                                    className='form-control-1' 
                                    name='business__name'
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='fs-7 fw-bold' htmlFor="business__address">Business Address</label>
                                <input 
                                    type="text" 
                                    id='business__address' 
                                    className='form-control-1' 
                                    name='business__address'
                                />
                            </div>
                            <div className='row'>
                                <div className='mb-3 col'>
                                    <label className='fs-7 fw-bold' htmlFor="start__date">Start Date</label>
                                    <input 
                                        type="date" 
                                        id='start__date' 
                                        className='form-control-1' 
                                        name='start__date'
                                    />
                                </div>
                                <div className='mb-3 col'>
                                    <label className='fs-7 fw-bold' htmlFor="end__date">End Date</label>
                                    <input 
                                        type="date" 
                                        id='end__date' 
                                        className='form-control-1' 
                                        name='end__date'
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col">
                                    <label className='fs-7 fw-bold' htmlFor="permit__ornumber">OR Number</label>
                                    <input 
                                        type="number" 
                                        id='permit__ornumber' 
                                        className='form-control-1' 
                                        name='permit__ornumber'
                                    />
                                </div>
                                <div className="col">
                                    <label className='fs-7 fw-bold' htmlFor="permit__amount">Amount</label>
                                    <input 
                                        type="number" 
                                        id='permit__amount' 
                                        className='form-control-1' 
                                        name='permit__amount'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end p-3">
                            <button 
                                type="button" 
                                className="btn text-bg-primary fs-7 fw-semibold"
                            >
                                Save Permit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PermitModal