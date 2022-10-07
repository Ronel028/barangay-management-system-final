import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPrint } from '@fortawesome/free-solid-svg-icons'

function PermitTable(){
    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr className="text-bg-dark fs-7">
                    <th scope="col">Owner</th>
                    <th scope="col">Business Name</th>
                    <th scope="col">Business Address</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">OR Number</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className='align-middle fs-7'>
                    <td>Ronel Florida</td>
                    <td>Sari sari Store</td>
                    <td>Purok 2</td>
                    <td>03-12-2022</td>
                    <td>03-12-2024</td>
                    <td>24353543</td>
                    <td>20000 pesos</td>
                    <td>
                        <div className="dropdown">
                            <button className="border-0 py-1 px-2 rounded text-bg-warning fs-7 fw-bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Action
                            </button>
                            <ul className="dropdown-menu">
                                <button 
                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#update-permit"
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

export default PermitTable