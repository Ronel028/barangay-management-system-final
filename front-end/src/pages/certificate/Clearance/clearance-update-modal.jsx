import { useState } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../components/loader'
import ErrorCard from '../../../components/errorCard'

function ClearanceUpdateModal(props){

    const [loader, setLoader] = useState(false)
    const [error, setError] = useState({
        errorDisplay: false,
        error: ''
    })

    // *********************UPDATE CLEARANCE**********************************************
    const updateClearance = async(event) =>{
        event.preventDefault()

        setLoader(true)
        const updateClearance = await axios.post(`/certificate/update?id=${props.clearanceID}`, props.clearanceData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setLoader(false)
        if(updateClearance.data.message){
            setError({
                ...error,
                errorDisplay: true,
                error: updateClearance.data.message
            })
            setTimeout(()=>{
                setError({
                    ...error,
                    errorDisplay: false,
                    error: ''
                })
            }, 2000)
        }else{
            props.updateNew(updateClearance.data)
            props.handleClose()
        }
    }
    // *********************END FUNCTION**********************************************

    return (
        <Modal show={props.show} onHide={props.handleClose} backdrop='static'>
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
                                value={props.clearanceData.name}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="clearance__age">Age</label>
                            <input 
                                type="number" 
                                className='form-control-1' 
                                name='age'
                                value={props.clearanceData.age}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='fs-7 fw-semibold' htmlFor="clearance__gender">Gender</label>
                            <input 
                                type="text" 
                                className='form-control-1' 
                                id='clearance__gender' 
                                name='gender'
                                value={props.clearanceData.gender}
                                onChange={props.handleChange} 
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
                                    value={props.clearanceData.orNumber}
                                    onChange={props.handleChange}
                                />
                            </div>
                            <div className='col'>
                                <label className='fs-7 fw-semibold' htmlFor="clearance__amount">Amount</label>
                                <input 
                                    type="number" 
                                    className='form-control-1' 
                                    id='clearance__amount' 
                                    name='amount'
                                    value={props.clearanceData.amount}
                                    onChange={props.handleChange}
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