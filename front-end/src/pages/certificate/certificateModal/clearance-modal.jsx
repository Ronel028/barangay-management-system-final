import useInsert from '../../../hooks/useInsert'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../components/loader'
import ErrorCard from '../../../components/errorCard'

function ClearanceModal(props){

    const [insertCertificate, loader, error] = useInsert()
    
    const {
        show, //function is to show modal
        residentData, //array object that carry the resident data
        resetData, // function is to reset the data of input value
        handleClose, // function is to close modal
        handleInput // event for handle the input
    } = props

    // reset the date of input
    const resetClearanceData = () =>{
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

    //******************save clearance to database***********************
    const saveClearance = async (event) =>{
        event.preventDefault()

        await insertCertificate('/certificate/insert', residentData, {
            headers: {
                "Content-Type": "application/json"
            }
        }, handleClose, resetClearanceData)
    }
    //********************END FUNCTION*******************************



    return (
        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton> 
                <Modal.Title>
                    <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                        <FontAwesomeIcon className='me-2' icon={faFile}/>
                        Clearance
                    </h1>
                </Modal.Title>
            </Modal.Header>

            <ErrorCard 
                errorDisplay={error.errorDisplay}
                error={error.error}
            />

            <form>
                <div className="modal-body">

                    <Loader 
                        loader={loader}
                        title="Saving..."
                    />

                    <div>
                        <div className='mb-3'>
                            <label className='fs-7 fw-semibold' htmlFor="clearance__name">Name</label>
                            <input 
                                type="text" 
                                className='form-control-1' 
                                id='clearance__name' 
                                name='name' 
                                value={residentData.name}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="clearance__age">Age</label>
                            <input 
                                type="number" 
                                className='form-control-1' 
                                name='age'
                                value={residentData.age}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="clearance__gender">Gender</label>
                            <input 
                                type="text" 
                                className='form-control-1' 
                                id='clearance__gender' 
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
                                <label className='fs-7 fw-semibold' htmlFor="clearance__ornumber">OR-Number</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    id='clearance__ornumber' 
                                    name='orNumber'
                                    onChange={handleInput}
                                />
                            </div>
                            <div className='col'>
                                <label className='fs-7 fw-semibold' htmlFor="clearance__amount">Amount</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    id='clearance__amount' 
                                    name='amount'
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
                        name="clearance"
                        onClick={saveClearance}
                    >
                        Save Clearance
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default ClearanceModal