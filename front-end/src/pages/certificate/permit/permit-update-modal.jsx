import { useState } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../components/loader'
import ErrorCard from '../../../components/errorCard'

function PermitUpdateModal(props){

    /* ***************** LOADER AND ERROR STATE *************************** */
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState({
        errorDisplay: false,
        error: ''
    })
    /* *********************** END STATE *************************** */

    const {
        show, // show update modal
        handleClose, //close update modal
        businessPermitData, //array object of permit data
        handleChange, // onChange event function for input
        permitID, // permit id from database
        refreshData // function to refresh data of permit data to avoid reload page
    } = props


    /* ***************** UPDATE BUSINESS PERMIT DATA IN DATABASE ******************* */
    const updateBusinessPermit = async(event) =>{
        event.preventDefault()
        
        setLoader(true)
        const updatePermit = await axios.post(`/permit/update?id=${permitID}`, businessPermitData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        setLoader(false)

        if(updatePermit.data.message){
            setError({
                ...error,
                errorDisplay: true,
                error: updatePermit.data.message
            })
            setTimeout(()=>{
                setError({
                    ...error,
                    errorDisplay: false,
                    error: ''
                })
            }, 2000)
        }else{
            refreshData(updatePermit.data)
            handleClose()
        }
    }
    /* ***************** END FUNCTION ******************* */


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

            {/* display error if have */}
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