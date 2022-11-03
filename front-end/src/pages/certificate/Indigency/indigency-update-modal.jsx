import useUpdateCertificate from '../../../hooks/useUpdateCertificate'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../components/loader'
import ErrorCard from '../../../components/errorCard'

function IndigencyUpdateModal(props){

    const {
        show, //show the modal
        handleClose, //close the modal
        indigencyData, //
        handleChange, // get the value of input
        indigencyId, // indigency id
        updateNew
    } = props


    /* ******************UPDATE INDIGENCY DATA ****************************** */
    const [updateIndigency, loader, error] = useUpdateCertificate()
    const updateIndigencyData = async(event) =>{
        event.preventDefault()

        await updateIndigency(`/certificate/update/indigency?id=${indigencyId}`, indigencyData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }, handleClose, updateNew)
    }
    /* ******************END FUNCTION****************************** */

    return (
        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                        <FontAwesomeIcon className='me-2' icon={faEdit}/>
                        Update Indigency
                    </h1>
                </Modal.Title>
            </Modal.Header>

            {/* error message */}
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
                            <label className='fs-7 fw-semibold' htmlFor="indigency__name">Name</label>
                            <input 
                                type="text" 
                                className='form-control-1' 
                                id='indigency__name' 
                                name='name'
                                value={indigencyData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="indigency__age">Age</label>
                            <input 
                                type="number" 
                                className='form-control-1' 
                                name='age'
                                value={indigencyData.age}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="indigency__gender">Gender</label>
                            <input 
                                type="text" 
                                className='form-control-1' 
                                id='indigency__gender' 
                                name='gender' 
                                value={indigencyData.gender}
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
                                value={indigencyData.dateIssued}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='fs-7 fw-semibold' htmlFor="indigency__ornumber">OR-Number</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    id='indigency__ornumber' 
                                    name='orNumber'
                                    value={indigencyData.orNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='col'>
                                <label className='fs-7 fw-semibold' htmlFor="indigency__amount">Amount</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    id='indigency__amount' 
                                    name='amount'
                                    value={indigencyData.amount}
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
                        onClick={updateIndigencyData}
                    >
                        Update Indigency
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default IndigencyUpdateModal