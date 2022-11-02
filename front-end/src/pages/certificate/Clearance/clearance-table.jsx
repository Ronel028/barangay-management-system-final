import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPrint } from '@fortawesome/free-solid-svg-icons'
import { numberToCurrency } from '../../../custom/function'

function ClearanceTable(props){

    // filter clearance data by search
    const filterClearance = props.clearanceData.filter(clearance =>{
        return clearance.name.toLowerCase().includes(props.filterClearance)
    })

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
                    props.clearanceData.length > 0 ?
                        filterClearance.length > 0 ?
                            filterClearance.map(clearance =>(
                                <tr key={clearance.id} className='align-middle fs-7'>
                                    <td>{clearance.name}</td>
                                    <td>{clearance.age}</td>
                                    <td>{clearance.gender}</td>
                                    <td>{clearance.or_number}</td>
                                    <td>{'\u20B1' + numberToCurrency(clearance.amount)}</td>
                                    <td>
                                        <div className="dropdown">
                                            <button className="border-0 py-1 px-2 rounded text-bg-warning fs-7 fw-bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Select Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <button 
                                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                                    onClick={() => props.updateClearance(clearance.id)}
                                                >
                                                    <FontAwesomeIcon className='me-1' icon={faEdit}/>
                                                    Edit
                                                </button>
                                                <button
                                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                                    onClick={() => props.deleteClearance(clearance.id)}
                                                >
                                                    <FontAwesomeIcon className='me-1' icon={faTrash}/>
                                                    Remove
                                                </button>
                                                <Link 
                                                    to={`/certificate/clearance/print/${clearance.id}`}
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
                    : props.loading ?   <tr>
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

export default ClearanceTable