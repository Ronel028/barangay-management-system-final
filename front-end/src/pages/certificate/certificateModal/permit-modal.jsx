import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStamp } from '@fortawesome/free-solid-svg-icons'

function PermitModal(props){

    return (
        <Modal show={props.show} onHide={props.handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                        <FontAwesomeIcon className='me-2' icon={faStamp}/>
                        Business Permit
                    </h1>
                </Modal.Title>
            </Modal.Header>
            <form>
                <div className="modal-body">
                    <div className='mb-3'>
                        <label className='fs-7 fw-bold' htmlFor="permit__name">Owner/Resident</label>
                        <input 
                            type="text"
                            id='permit__name' 
                            className='form-control-1' 
                            name='ownerName'
                            onChange={props.handleInputPermit}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='fs-7 fw-bold' htmlFor="business__name">Nature of Business</label>
                        <input 
                            type="text" 
                            id='business__name' 
                            className='form-control-1' 
                            name='natureOfBusiness'
                            onChange={props.handleInputPermit}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='fs-7 fw-bold' htmlFor="business__address">Business Address</label>
                        <input 
                            type="text" 
                            id='business__address' 
                            className='form-control-1' 
                            name='businessAddress'
                            onChange={props.handleInputPermit}
                        />
                    </div>
                    <div className='row'>
                        <div className='mb-3 col'>
                            <label className='fs-7 fw-bold' htmlFor="start__date">Start Date</label>
                            <input 
                                type="date" 
                                id='start__date' 
                                className='form-control-1' 
                                name='startDate'
                                onChange={props.handleInputPermit}
                            />
                        </div>
                        <div className='mb-3 col'>
                            <label className='fs-7 fw-bold' htmlFor="end__date">End Date</label>
                            <input 
                                type="date" 
                                id='end__date' 
                                className='form-control-1' 
                                name='endDate'
                                onChange={props.handleInputPermit}
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
                                name='ornumber'
                                onChange={props.handleInputPermit}
                            />
                        </div>
                        <div className="col">
                            <label className='fs-7 fw-bold' htmlFor="permit__amount">Amount</label>
                            <input 
                                type="number" 
                                id='permit__amount' 
                                className='form-control-1' 
                                name='amount'
                                onChange={props.handleInputPermit}
                            />
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end p-3">
                    <button 
                        type="button" 
                        className="btn text-bg-primary fs-7 fw-semibold"
                        onClick={props.savePermit}
                    >
                        Save Permit
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default PermitModal