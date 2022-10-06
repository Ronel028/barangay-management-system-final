import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
function BlotterData(){
    return (
        <div className="modal fade" id="blotter-data-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                            <FontAwesomeIcon className='me-2' icon={faCircleInfo}/>
                            Blotter Information
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body row">

                        {/* blotter data left */}
                        <div className="blotter__data__left col border-end mb-3">
                            <div className="complainant mb-3">
                                <h6 className='fs-7 fw-bold'>Complainant Name</h6>
                                <p>Buknoy</p>
                            </div>
                            <div className="complainant__data__age mb-3">
                                <h6 className='fs-7 fw-bold'>complainant Age</h6>
                                <p>38</p>
                            </div>
                            <div className="complainant__data__gender mb-3">
                                <h6 className='fs-7 fw-bold'>complainant Gender</h6>
                                <p>Male</p>
                            </div>
                            <div className="complainant__data__address mb-3">
                                <h6 className='fs-7 fw-bold'>complainant Address</h6>
                                <p>Purok 2</p>
                            </div>
                        </div>

                        {/* blotter data right */}
                        <div className="blotter__data__right col">
                            <div className="complainee mb-3">
                                <h6 className='fs-7 fw-bold'>Complainee Name</h6>
                                <p>Tuknoy</p>
                            </div>
                            <div className="complainee__data__age mb-3">
                                <h6 className='fs-7 fw-bold'>Complainee Age</h6>
                                <p>25</p>
                            </div>
                            <div className="complainee__data__gender mb-3">
                                <h6 className='fs-7 fw-bold'>Complainee Gender</h6>
                                <p>Male</p>
                            </div>
                            <div className="complainee__data__address mb-3">
                                <h6 className='fs-7 fw-bold'>Complainee Address</h6>
                                <p>Purok 3</p>
                            </div>
                        </div>

                        {/* blotter data bottom */}
                        <div className="blotter__data_bottom border-top pt-2 row">
                            <div className="complaint__data mb-3 col-6">
                                <h6 className='fs-7 fw-bold'>Complaint</h6>
                                <p>Nagnakaw ng Pato</p>
                            </div>
                            <div className="complaint__locationOfIncident mb-3 col-6">
                                <h6 className='fs-7 fw-bold'>Location of Incident</h6>
                                <p>Sito tae</p>
                            </div>
                            <div className="complaint__status mb-3 col-6">
                                <h6 className='fs-7 fw-bold'>Status</h6>
                                <p>UnSolved</p>
                            </div>
                            <div className="complaint__dateRecorded mb-3 col-6">
                                <h6 className='fs-7 fw-bold'>Date Recorded</h6>
                                <p>January 20, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlotterData