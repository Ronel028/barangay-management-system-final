import { Modal } from 'react-bootstrap'
import useUpdateCertificate from '../../../hooks/useUpdateCertificate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../components/loader'
import ErrorCard from '../../../components/errorCard'

function ClearanceUpdateModal(props){

    const {
        show, // show the modal
        handleClose, //close the modal
        clearanceData, // clearance data object from database
        refreshData, // update the state of clearance data to avoid page reload
        handleChange, // change event for handle the user input
        clearanceID // get clearance id from the database
    } = props

    const [clearanceUpdate, loader, error] = useUpdateCertificate()


    // *********************UPDATE CLEARANCE**********************************************
    const updateClearance = async(event) =>{
        event.preventDefault()

        await clearanceUpdate(`/certificate/update/clearance?id=${clearanceID}`, clearanceData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }, handleClose, refreshData)

    }
    // *********************END FUNCTION**********************************************

    
    return (
        <Modal show={show} onHide={handleClose} backdrop='static'>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                        <FontAwesomeIcon className='me-2' icon={faEdit}/>
                        Update Clearance
                    </h1>
                </Modal.Title>
            </Modal.Header>

            {/* error card */}
            <ErrorCard 
                errorDisplay={error.errorDisplay}
                error={error.error}
            />

            <form>
                <div className="modal-body">

                    {/* loader */}
                    <Loader 
                        loader={loader}
                        title="Updating..."
                    />

                    <div>
                        <div className='mb-3'>
                            <label className='fs-7 fw-semibold' htmlFor="clearance__name">Name</label>
                            <input 
                                type="text" 
                                className='form-control-1' 
                                id='clearance__name' 
                                name='name' 
                                value={clearanceData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="clearance__age">Age</label>
                            <input 
                                type="number" 
                                className='form-control-1' 
                                name='age'
                                value={clearanceData.age}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="clearance__gender">Gender</label>
                            <input 
                                type="text" 
                                className='form-control-1' 
                                id='clearance__gender' 
                                name='gender'
                                value={clearanceData.gender}
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="dateIssued">Date Issued</label>
                            <input 
                                type="date" 
                                className='form-control-1' 
                                id='dateIssued' 
                                name='dateIssued'
                                value={clearanceData.dateIssued}
                                onChange={handleChange} 
                            />
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='fs-7 fw-semibold' htmlFor="clearance__ornumber">OR-Number</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    id='clearance__ornumber' 
                                    name='orNumber'
                                    value={clearanceData.orNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='col'>
                                <label className='fs-7 fw-semibold' htmlFor="clearance__amount">Amount</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    id='clearance__amount' 
                                    name='amount'
                                    value={clearanceData.amount}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end p-3">
                    <button 
                        type="button" 
                        className="btn text-bg-primary fs-7 fw-semibold"
                        onClick={updateClearance}
                    >
                        Update Clearance
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default ClearanceUpdateModal