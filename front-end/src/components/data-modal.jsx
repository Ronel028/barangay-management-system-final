import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import sampleImage from '../Images/background-login-page.svg'
function DataModal(props){

    return (
        <div className="modal modal-lg fade" id="resident-data" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                            <FontAwesomeIcon className='me-2' icon={faInfoCircle}/>
                            More information about Ronel Florida
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body row">
                        {/* resident left data */}
                        <div className="resident__data__left col">
                            <div className="resident__image__container data__image__container border p-1 mb-3">
                                <img className="w-100 h-100" src={sampleImage} alt="Tuknoy" />
                            </div>
                            <div className="resident__name mb-3">
                                <h6 className="fs-7 fw-bold">Name</h6>
                                <p>Florida, Ronel Jontila</p>
                            </div>
                            <div className="resident__bdate mb-3">
                                <h6 className="fs-7 fw-bold">Date of Birth</h6>
                                <p>July 28, 2000</p>
                            </div>
                            <div className="resident__bplace mb-3">
                                <h6 className="fs-7 fw-bold">Place of Birth</h6>
                                <p>Sitio Kalikasan Sto nino, Rizal Occidental Mindoro</p>
                            </div>
                            <div className="resident__age mb-3">
                                <h6 className="fs-7 fw-bold">Age</h6>
                                <p>22</p>
                            </div>
                            <div className="resident__gender mb-3">
                                <h6 className="fs-7 fw-bold">Gender</h6>
                                <p>Male</p>
                            </div>
                            <div className="resident__purok mb-3">
                                <h6 className="fs-7 fw-bold">Purok/Sitio</h6>
                                <p>Sitio Kalikasan</p>
                            </div>
                            <div className="resident__totalhousehold mb-3">
                                <h6 className="fs-7 fw-bold">Total Household</h6>
                                <p>5</p>
                            </div>
                        </div>

                        {/* resident right data */}
                        <div className="resident__data__right col">
                            <div className="resident__pwd mb-3">
                                <h6 className="fs-7 fw-bold">Person with Disability</h6>
                                <p>No</p>
                            </div>
                            <div className="resident__relationtohead mb-3">
                                <h6 className="fs-7 fw-bold">Relation to Head</h6>
                                <p>Older Brother</p>
                            </div>
                            <div className="resident__cstatus mb-3">
                                <h6 className="fs-7 fw-bold">Civil Status</h6>
                                <p>Single</p>
                            </div>
                            <div className="resident__btype mb-3">
                                <h6 className="fs-7 fw-bold">Blood Type</h6>
                                <p>AB</p>
                            </div>
                            <div className="resident__occupation mb-3">
                                <h6 className="fs-7 fw-bold">Occupation</h6>
                                <p>Software Developer</p>
                            </div>
                            <div className="resident__income mb-3">
                                <h6 className="fs-7 fw-bold">Monthly Income</h6>
                                <p>20000</p>
                            </div>
                            <div className="resident__lengthofstay mb-3">
                                <h6 className="fs-7 fw-bold">Length of Stay <small><em>(months)</em></small></h6>
                                <p>12</p>
                            </div>
                            <div className="resident__religion mb-3">
                                <h6 className="fs-7 fw-bold">Religion</h6>
                                <p>Roman Catholic</p>
                            </div>
                            <div className="resident__nationality mb-3">
                                <h6 className="fs-7 fw-bold">Nationality</h6>
                                <p>Pilipino</p>
                            </div>
                            <div className="resident__education mb-3">
                                <h6 className="fs-7 fw-bold">Highest Education Attainment</h6>
                                <p>Bachelor's Degree</p>
                            </div>
                            <div className="resident__houseownership mb-3">
                                <h6 className="fs-7 fw-bold">House Ownership Status</h6>
                                <p>Leave with Parents/Relative</p>
                            </div>
                            <div className="resident__formeraddress mb-3">
                                <h6 className="fs-7 fw-bold">Former Address</h6>
                                <p>To the moon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataModal