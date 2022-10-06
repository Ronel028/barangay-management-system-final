import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faCertificate, faStamp, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

function CertificateTable(){
    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr className="text-bg-dark">
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className='align-middle'>
                    <td>
                        <div className='table__image__container border rounded border-secondary p-1'>
                            <img className='w-100 h-100' src="" alt="..." />
                        </div>
                    </td>
                    <td>Ronel Florida</td>
                    <td>20</td>
                    <td>Male</td>
                    <td>
                        <div className="dropdown">
                            <button className="border-0 py-1 px-2 rounded text-bg-warning fs-7 fw-bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Certificate
                            </button>
                            <ul className="dropdown-menu">
                                <button 
                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#clearance"
                                >
                                    <FontAwesomeIcon className='me-1' icon={faFile}/>
                                    Clearance
                                </button>
                                <button 
                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#indigency"
                                >
                                    <FontAwesomeIcon className='me-1' icon={faCertificate}/>
                                    Indigency
                                </button>
                                <button 
                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#business-permit"
                                >
                                    <FontAwesomeIcon className='me-1' icon={faStamp}/>
                                    Business Permit
                                </button>
                                <button 
                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#residency"
                                >
                                    <FontAwesomeIcon className='me-1' icon={faPeopleGroup}/>
                                    Residency
                                </button>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default CertificateTable