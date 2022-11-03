import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPrint } from '@fortawesome/free-solid-svg-icons'

function ResidencyTable(props){

    const {
        residencyData, // this object array hold the residency cert, data
        loading, // loading function to display while fetching residency data from database
        filterResidency, // filter residency data using search input
        openResidencyModal //open residency update modal
    } = props

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

                {
                    residencyData.length > 0 ?
                        filterResidency.length > 0 ?
                            filterResidency.map(residency =>(
                                <tr key={residency.id} className='align-middle fs-7'>
                                    <td>{residency.name}</td>
                                    <td>{residency.age}</td>
                                    <td>{residency.gender}</td>
                                    <td>{residency.or_number}</td>
                                    <td>{'\u20B1' + residency.amount}</td>
                                    <td>
                                        <div className="dropdown">
                                            <button className="border-0 py-1 px-2 rounded text-bg-warning fs-7 fw-bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Select Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <button 
                                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                                    onClick={() => openResidencyModal(residency.id)}
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
                                                <Link 
                                                    to='/certificate/residency/print' 
                                                    className='dropdown-item fw-semibold d-flex align-items-center fs-7'
                                                >
                                                    <FontAwesomeIcon className='me-1' icon={faPrint}/>
                                                    Print
                                                </Link>
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
                    : loading ?   <tr>
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
    )
}

export default ResidencyTable