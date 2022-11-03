import { Modal } from 'react-bootstrap'
import useInsert from '../../../hooks/useInsert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../components/loader'
import ErrorCard from '../../../components/errorCard'

function ResidencyModal(props){

    const [insertCertificate, loader, error] = useInsert()

    const {
        show, //function is to show modal
        handleClose, // function is to close modal
        residentData, //array object that carry the resident data
        resetData, // function is to reset the data of input value
        handleInput // event for handle the input
    } = props

    // reset data from input
    const resetResidencyData = () =>{
        resetData({
            ...residentData,
            name: '',
            age: 0,
            gender: '',
            types: '',
            orNumber: '',
            amount: '',
            dateIssued: ''
        })
    }

    //******************save residency to database***********************
    const saveResidency = async (event) =>{ 
        event.preventDefault()

        await insertCertificate('/certificate/insert', residentData, {
            headers: {
                "Content-Type": "application/json"
            }
        }, handleClose, resetResidencyData)
    }
    //********************END FUNCTION*******************************

    return (
        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                        <FontAwesomeIcon className='me-2' icon={faPeopleGroup}/>
                        Residency
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

                    {/* loading animation for saving data */}
                    <Loader 
                        loader={loader}
                        title="Saving..."
                    />

                    <div>
                        <div className='mb-3'>
                            <label className='fs-7 fw-semibold' htmlFor="residency__name">Name</label>
                            <input 
                                type="text" 
                                className='form-control-1' 
                                id='residency__name' 
                                name='name' 
                                value={residentData.name}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="residency__age">Age</label>
                            <input 
                                type="number" 
                                className='form-control-1' 
                                name='age'
                                value={residentData.age}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="residency__gender">Gender</label>
                            <input 
                                type="text" 
                                className='form-control-1' 
                                id='residency__gender' 
                                name='gender' 
                                value={residentData.gender}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="dateIssued">Date Issued</label>
                            <input 
                                type="date" 
                                className='form-control-1' 
                                id='dateIssued' 
                                name='dateIssued' 
                                value={residentData.dateIssued}
                                onChange={handleInput}
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
                                    value={residentData.orNumber}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className='col'>
                                <label className='fs-7 fw-semibold' htmlFor="residency__amount">Amount</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    id='residency__amount' 
                                    name='amount'
                                    value={residentData.amount}
                                    onChange={handleInput}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end p-3">
                    <button 
                        type="button" 
                        className="btn text-bg-primary fs-7 fw-semibold"
                        name="residency"
                        onClick={saveResidency}
                    >
                        Save Indigency
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default ResidencyModal