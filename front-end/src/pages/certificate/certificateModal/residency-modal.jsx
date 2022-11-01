import { Modal } from 'react-bootstrap'
import useInsert from '../../../hooks/useInsert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../components/loader'
import ErrorCard from '../../../components/errorCard'

function ResidencyModal(props){

    const [insertCertificate, loader, error] = useInsert()

    // reset data from input
    const resetData = () =>{
        props.resetData({
            ...props.residentData,
            name: '',
            age: 0,
            gender: '',
            types: '',
            orNumber: '',
            amount: ''
        })
    }

    //******************save residency to database***********************
    const saveResidency = async (event) =>{ 
        event.preventDefault()

        await insertCertificate('/certificate/insert', props.residentData, {
            headers: {
                "Content-Type": "application/json"
            }
        }, props.handleClose, resetData)
    }
    //********************END FUNCTION*******************************

    return (
        <Modal show={props.show} onHide={props.handleClose} backdrop="static">
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
                                value={props.residentData.name}
                                onChange={props.handleInput}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="residency__age">Age</label>
                            <input 
                                type="number" 
                                className='form-control-1' 
                                name='age'
                                value={props.residentData.age}
                                onChange={props.handleInput}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="residency__gender">Gender</label>
                            <input 
                                type="text" 
                                className='form-control-1' 
                                id='residency__gender' 
                                name='gender' 
                                value={props.residentData.gender}
                                onChange={props.handleInput}
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
                                    onChange={props.handleInput}
                                />
                            </div>
                            <div className='col'>
                                <label className='fs-7 fw-semibold' htmlFor="residency__amount">Amount</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    id='residency__amount' 
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