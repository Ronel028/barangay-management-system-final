import Moment from 'react-moment';
import { Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { convertBase64ToImage, numberToCurrency } from '../custom/function'

function DataModal(props){

    return (
        <Modal show={props.show} onHide={props.handleClose} backdrop="static" size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                        <FontAwesomeIcon className='me-2' icon={faInfoCircle}/>
                        More information about {`${props.resident.fname} ${props.resident.lname}`}
                    </h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="row">
                {/* resident left data */}
                <div className="resident__data__left col">
                    <div className="resident__image__container data__image__container border p-1 mb-3">
                        <img className="w-100 h-100" src={convertBase64ToImage(props.resident.photo)} alt="Tuknoy" />
                    </div>
                    <div className="resident__name mb-3">
                        <h6 className="fs-7 fw-bold">Name</h6>
                        <p>{`${props.resident.lname}, ${props.resident.fname} ${props.resident.mname}`}</p>
                    </div>
                    <div className="resident__bdate mb-3">
                        <h6 className="fs-7 fw-bold">Date of Birth</h6>
                        <p><Moment format='LL'>{props.resident.dateOfBirth}</Moment></p>
                    </div>
                    <div className="resident__bplace mb-3">
                        <h6 className="fs-7 fw-bold">Place of Birth</h6>
                        <p>{props.resident.placeOfBirth}</p>
                    </div>
                    <div className="resident__age mb-3">
                        <h6 className="fs-7 fw-bold">Age</h6>
                        <p>{props.resident.age}</p>
                    </div>
                    <div className="resident__gender mb-3">
                        <h6 className="fs-7 fw-bold">Gender</h6>
                        <p>{props.resident.gender}</p>
                    </div>
                    <div className="resident__contact mb-3">
                        <h6 className="fs-7 fw-bold">Contact</h6>
                        <p>{props.resident.contact}</p>
                    </div>
                    <div className="resident__purok mb-3">
                        <h6 className="fs-7 fw-bold">Purok/Sitio</h6>
                        <p>{props.resident.purok}</p>
                    </div>
                </div>

                {/* resident right data */}
                <div className="resident__data__right col">
                    <div className="resident__totalhousehold mb-3">
                        <h6 className="fs-7 fw-bold">Total Family Member</h6>
                        <p>{props.resident.totalFamilyMember}</p>
                    </div>
                    <div className="resident__pwd mb-3">
                        <h6 className="fs-7 fw-bold">Person with Disability</h6>
                        <p>{props.resident.personWithDisability}</p>
                    </div>
                    <div className="resident__relationtohead mb-3">
                        <h6 className="fs-7 fw-bold">Relation to Head</h6>
                        <p>{props.resident.relationToHead}</p>
                    </div>
                    <div className="resident__cstatus mb-3">
                        <h6 className="fs-7 fw-bold">Civil Status</h6>
                        <p>{props.resident.civilStatus}</p>
                    </div>
                    <div className="resident__btype mb-3">
                        <h6 className="fs-7 fw-bold">Blood Type</h6>
                        <p>{props.resident.bloodType}</p>
                    </div>
                    <div className="resident__occupation mb-3">
                        <h6 className="fs-7 fw-bold">Occupation</h6>
                        <p>{props.resident.occupation}</p>
                    </div>
                    <div className="resident__income mb-3">
                        <h6 className="fs-7 fw-bold">Monthly Income</h6>
                        <p>{numberToCurrency(props.resident.monthlyIncome)}</p>
                    </div>
                    <div className="resident__lengthofstay mb-3">
                        <h6 className="fs-7 fw-bold">Length of Stay <small><em>(years)</em></small></h6>
                        <p>
                            {props.resident.lengthOfStay > 1 ? props.resident.lengthOfStay + ' years' 
                                                            :  props.resident.lengthOfStay + ' year'}
                        </p>
                    </div>
                    <div className="resident__religion mb-3">
                        <h6 className="fs-7 fw-bold">Religion</h6>
                        <p>{props.resident.religion}</p>
                    </div>
                    <div className="resident__nationality mb-3">
                        <h6 className="fs-7 fw-bold">Nationality</h6>
                        <p>{props.resident.nationality}</p>
                    </div>
                    <div className="resident__education mb-3">
                        <h6 className="fs-7 fw-bold">Education Attainment</h6>
                        <p>{props.resident.educationAttainment}</p>
                    </div>
                    <div className="resident__houseownership mb-3">
                        <h6 className="fs-7 fw-bold">House Ownership Status</h6>
                        <p>{props.resident.houseOwnership}</p>
                    </div>
                    <div className="resident__formeraddress mb-3">
                        <h6 className="fs-7 fw-bold">Former Address</h6>
                        <p>{props.resident.formerAddress}</p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DataModal