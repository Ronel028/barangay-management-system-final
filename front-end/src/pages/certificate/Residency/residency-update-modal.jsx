import { Modal } from 'react-bootstrap'
import useUpdateCertificate from '../../../hooks/useUpdateCertificate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../components/loader'
import ErrorCard from '../../../components/errorCard'

function ResidencyUpdateModal(props){

    const [updateIndigency, loader, error] = useUpdateCertificate()

    const {
        show, //show residency cert. Modal
        handleClose, // close resident cert. modal
        dataResidency, //data object for residency cert.
        handleChange, // change event for handle input
        residencyID, // residency cert. data id from database
        updateNew // use to update current data of residency to avoid reload page
    } = props


    /* **************** UPDATE RESIDENCY DATA FROM DATABASE ************************************* */
    const updateResidency = async(event) =>{
        event.preventDefault()
        await updateIndigency(`/certificate/update/residency?id=${residencyID}`, dataResidency, {
            headers: {
                'Content-Type': 'application/json'
            }
        }, handleClose, updateNew)
    }
    /* **************************** END FUNCTION ************************************* */

    return (
        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                        <FontAwesomeIcon className='me-2' icon={faEdit}/>
                        Update Residency
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
                            <label className='fs-7 fw-semibold' htmlFor="residency__name">Name</label>
                            <input 
                                type="text" 
                                className='form-control-1' 
                                id='residency__name' 
                                name='name' 
                                value={dataResidency.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="residency__age">Age</label>
                            <input 
                                type="number" 
                                className='form-control-1' 
                                name='age'
                                value={dataResidency.age}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="residency__gender">Gender</label>
                            <input 
                                type="text" 
                                className='form-control-1' 
                                id='residency__gender' 
                                name='gender' 
                                value={dataResidency.gender}
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
                                value={dataResidency.dateIssued}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <label className='fs-7 fw-semibold' htmlFor="residency__ornumber">OR-Number</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    id='residency__ornumber' 
                                    name='orNumber'
                                    value={dataResidency.orNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='col'>
                                <label className='fs-7 fw-semibold' htmlFor="residency__amount">Amount</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    id='residency__amount' 
                                    name='amount'
                                    value={dataResidency.amount}
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
                        onClick={updateResidency}
                    >
                        Update Residency
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default ResidencyUpdateModal