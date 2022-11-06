import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPrint } from '@fortawesome/free-solid-svg-icons'

function IndigencyTable(props){

    const {
        indigencyData, // list of indigency data
        loading, // loading animation for table
        showModal, // show modal function
        filterIndigency, //filter indigency data base on the search value
        deleteIndigency //function for deleting indigency data
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
                    indigencyData.length > 0 ?
                        filterIndigency.length > 0 ?
                            filterIndigency.map(indigency => (
                                <tr key={indigency.id} className='align-middle fs-7'>
                                    <td>{indigency.name}</td>
                                    <td>{indigency.age}</td>
                                    <td>{indigency.gender}</td>
                                    <td>{indigency.or_number}</td>
                                    <td>{'\u20B1' + indigency.amount}</td>
                                    <td>
                                        <div className="dropdown">
                                            <button className="border-0 py-1 px-2 rounded text-bg-warning fs-7 fw-bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Select Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <button 
                                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                                    onClick={() => showModal(indigency.id)}
                                                >
                                                    <FontAwesomeIcon className='me-1' icon={faEdit}/>
                                                    Edit
                                                </button>
                                                <button
                                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                                    onClick={() => deleteIndigency(indigency.id)}
                                                >
                                                    <FontAwesomeIcon className='me-1' icon={faTrash}/>
                                                    Remove
                                                </button>
                                                <Link 
                                                    to={`/certificate/indigency/print/${indigency.id}`} 
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

export default IndigencyTable