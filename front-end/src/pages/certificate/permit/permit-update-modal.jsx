import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

function PermitUpdateModal(props){

    const {
        show, 
        handleClose,
        businessPermitData,
        handleChange
    } = props


    const updateBusinessPermit = (event) =>{
        event.preventDefault()
        console.log(businessPermitData)
    }

    return (
        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                        <FontAwesomeIcon className='me-2' icon={faEdit}/>
                        Update Business Permit
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
                            value={businessPermitData.ownerName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='fs-7 fw-bold' htmlFor="business__name">Nature of Business</label>
                        <input 
                            type="text" 
                            id='business__name' 
                            className='form-control-1' 
                            name='natureOfBusiness'
                            value={businessPermitData.natureOfBusiness}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='fs-7 fw-bold' htmlFor="business__address">Business Address</label>
                        <input 
                            type="text" 
                            id='business__address' 
                            className='form-control-1' 
                            name='businessAddress'
                            value={businessPermitData.businessAddress}
                            onChange={handleChange}
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
                                value={businessPermitData.startDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-3 col'>
                            <label className='fs-7 fw-bold' htmlFor="end__date">End Date</label>
                            <input 
                                type="date" 
                                id='end__date' 
                                className='form-control-1' 
                                name='endDate'
                                value={businessPermitData.endDate}
                                onChange={handleChange}
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
                                name='orNumber'
                                value={businessPermitData.orNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col">
                            <label className='fs-7 fw-bold' htmlFor="permit__amount">Amount</label>
                            <input 
                                type="number" 
                                id='permit__amount' 
                                className='form-control-1' 
                                name='amount'
                                value={businessPermitData.amount}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end p-3">
                    <button 
                        type="button" 
                        className="btn text-bg-primary fs-7 fw-semibold"
                        onClick={updateBusinessPermit}
                    >
                        Update Permit
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default PermitUpdateModal