import { Modal } from 'react-bootstrap'
import Moment from 'react-moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function BlotterData(props){


    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                        <FontAwesomeIcon className='me-2' icon={faCircleInfo}/>
                        Blotter Information
                    </h1>
                </Modal.Title>
            </Modal.Header>
            
            <div className="modal-body row">

                {/* blotter data left */}
                <div className="col border-end mb-3">
                    <div className="mb-3">
                        <h6 className='fs-7 fw-bold'>Complainant Name</h6>
                        <p>{props.blotterData.complainant_name}</p>
                    </div>
                    <div className="mb-3">
                        <h6 className='fs-7 fw-bold'>complainant Age</h6>
                        <p>{props.blotterData.complainant_age}</p>
                    </div>
                    <div className="mb-3">
                        <h6 className='fs-7 fw-bold'>complainant Gender</h6>
                        <p>{props.blotterData.complainant_gender}</p>
                    </div>
                    <div className="mb-3">
                        <h6 className='fs-7 fw-bold'>complainant Address</h6>
                        <p>{props.blotterData.complainant_address}</p>
                    </div>
                </div>

                {/* blotter data right */}
                <div className=" col">
                    <div className="mb-3">
                        <h6 className='fs-7 fw-bold'>Complainee Name</h6>
                        <p>{props.blotterData.complainee_name}</p>
                    </div>
                    <div className="mb-3">
                        <h6 className='fs-7 fw-bold'>Complainee Age</h6>
                        <p>{props.blotterData.complainee_age}</p>
                    </div>
                    <div className="mb-3">
                        <h6 className='fs-7 fw-bold'>Complainee Gender</h6>
                        <p>{props.blotterData.complainee_gender}</p>
                    </div>
                    <div className="mb-3">
                        <h6 className='fs-7 fw-bold'>Complainee Address</h6>
                        <p>{props.blotterData.complainee_address}</p>
                    </div>
                </div>

                {/* blotter data bottom */}
                <div className="border-top pt-2 row">
                    <div className="mb-3 col-12">
                        <h6 className='fs-7 fw-bold'>Complaint</h6>
                        <p>{props.blotterData.complaint}</p>
                    </div>
                    <div className="mb-3 col-6">
                        <h6 className='fs-7 fw-bold'>Location of Incident</h6>
                        <p>{props.blotterData.locationOfIncident}</p>
                    </div>
                    <div className="mb-3 col-6">
                        <h6 className='fs-7 fw-bold'>Date of Incident</h6>
                        <p>
                            <Moment format='LL'>
                                {props.blotterData.dateOfIncident}
                            </Moment>
                        </p>
                    </div>
                    <div className="mb-3 col-6">
                        <h6 className='fs-7 fw-bold'>Status</h6>
                        <p>{props.blotterData.status}</p>
                    </div>
                    <div className="mb-3 col-6">
                        <h6 className='fs-7 fw-bold'>Date Recorded</h6>
                        <p>
                            <Moment format='LL'>
                                {props.blotterData.dateRecorded}
                            </Moment>
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default BlotterData