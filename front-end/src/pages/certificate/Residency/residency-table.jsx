import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPrint } from '@fortawesome/free-solid-svg-icons'

function ResidencyTable(){
    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr className="text-bg-dark fs-7">
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">OR Number</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className='align-middle fs-7'>
                    <td>Ronel Florida</td>
                    <td>20</td>
                    <td>Male</td>
                    <td>53453345</td>
                    <td>50 pesos</td>
                    <td>
                        <div className="dropdown">
                            <button className="border-0 py-1 px-2 rounded text-bg-warning fs-7 fw-bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Action
                            </button>
                            <ul className="dropdown-menu">
                                <button 
                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#update-residency"
                                >
                                    <FontAwesomeIcon className='me-1' icon={faEdit}/>
                                    Edit
                                </button>
                                <button
                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                >
                                    <FontAwesomeIcon className='me-1' icon={faTrash}/>
                                    Remove
                                </button>
                                <button 
                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                >
                                    <FontAwesomeIcon className='me-1' icon={faPrint}/>
                                    Print
                                </button>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ResidencyTable