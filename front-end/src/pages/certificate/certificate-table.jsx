import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faCertificate, faStamp, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { convertBase64ToImage } from '../../custom/function'

function CertificateTable(props){

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr className="text-bg-dark fs-7">
                        <th scope="col">Photo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.residentData.length > 0 ?
                            props.searchResident.length > 0 ? 
                                props.searchResident.map(resident =>(
                                    <tr key={resident.id} className='align-middle fs-7'>
                                        <td>
                                            <div className='table__image__container border rounded border-secondary p-1'>
                                                <img className='w-100 h-100' src={convertBase64ToImage(resident.photo)} alt={resident.fname} />
                                            </div>
                                        </td>
                                        <td>{`${resident.fname} ${resident.lname}`}</td>
                                        <td>{resident.age}</td>
                                        <td>{resident.gender}</td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="border-0 py-1 px-2 rounded text-bg-warning fs-7 fw-bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Select Certificate
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <button 
                                                        className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                                        name='clearance'
                                                        onClick={() => props.openCertificateModal(resident.id)}
                                                    >
                                                        <FontAwesomeIcon className='me-1' icon={faFile}/>
                                                        Clearance
                                                    </button>
                                                    <button 
                                                        className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                                        name='indigency'
                                                        onClick={() => props.openIndigencyModal(resident.id)}
                                                    >
                                                        <FontAwesomeIcon className='me-1' icon={faCertificate}/>
                                                        Indigency
                                                    </button>
                                                    <button 
                                                        className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                                        name='permit'
                                                        onClick={() => props.openPermitModal(resident.id)}
                                                    >
                                                        <FontAwesomeIcon className='me-1' icon={faStamp}/>
                                                        Business Permit
                                                    </button>
                                                    <button 
                                                        className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                                        name='residency'
                                                        onClick={() => props.openResidencyModal(resident.id)}
                                                    >
                                                        <FontAwesomeIcon className='me-1' icon={faPeopleGroup}/>
                                                        Residency
                                                    </button>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            :   <tr>
                                    <td colSpan='7' className="text-center">
                                        No data found
                                    </td>
                                </tr>  
                        :   props.loading ?   <tr>
                                                <td colSpan='7' className="text-center">
                                                    <div className="w-100 d-flex align-items-center justify-content-center">
                                                        <div className="spinner me-2"></div>
                                                        loading...
                                                    </div>
                                                </td>
                                            </tr>
                                        :   <tr>
                                                <td colSpan='7' className="text-center">
                                                    No data found
                                                </td>
                                            </tr>   
                    }
                </tbody>
            </table>
        </>
    )
}

export default CertificateTable