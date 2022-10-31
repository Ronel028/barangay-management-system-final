import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'

function IndigencyModal(props){

    return (
        <Modal show={props.show} onHide={props.handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                        <FontAwesomeIcon className='me-2' icon={faCertificate}/>
                        Indigency
                    </h1>
                </Modal.Title>
            </Modal.Header>
            <form>
                <div className="modal-body">
                    <div>
                        <div className='mb-3'>
                            <label className='fs-7 fw-semibold' htmlFor="indigency__name">Name</label>
                            <input 
                                type="text" 
                                className='form-control-1' 
                                id='indigency__name' 
                                name='name' 
                                value={props.residentData.name}
                                onChange={props.handleInput}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="indigency__age">Age</label>
                            <input 
                                type="number" 
                                className='form-control-1' 
                                name='age'
                                value={props.residentData.age}
                                onChange={props.handleInput}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="indigency__gender">Gender</label>
                            <input 
                                type="text" 
                                className='form-control-1' 
                                id='indigency__gender' 
                                name='gender' 
                                value={props.residentData.gender}
                                onChange={props.handleInput}
                            />
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='fs-7 fw-semibold' htmlFor="indigency__ornumber">OR-Number</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    id='indigency__ornumber' 
                                    name='ornumber'
                                    onChange={props.handleInput}
                                />
                            </div>
                            <div className='col'>
                                <label className='fs-7 fw-semibold' htmlFor="indigency__amount">Amount</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    id='indigency__amount' 
                                    name='amount'
                                    onChange={props.handleInput}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end p-3">
                    <button 
                        type="button" 
                        className="btn text-bg-primary fs-7 fw-semibold"
                        name="indigency"
                        onClick={props.saveCertificate}
                    >
                        Save Indigency
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default IndigencyModal