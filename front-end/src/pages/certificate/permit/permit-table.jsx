import { Link } from 'react-router-dom'
import { numberToCurrency } from '../../../custom/function'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPrint } from '@fortawesome/free-solid-svg-icons'

function PermitTable(props){

    const {
        permitData, // aray object of business permit data from database
        loading, //loading animation for fetching permit data in database
        filterPermitData, // filter permit data base on search input
        showPermitModal, // show permit update modal
        deletePermit // delete function for deleting permit data from database
    } = props


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
                {
                    permitData.length > 0 ?
                        filterPermitData.length > 0 ?
                            filterPermitData.map(permit =>(
                                <tr key={permit.id} className='align-middle fs-7'>
                                    <td>{permit.owner}</td>
                                    <td>{permit.natureOfBusiness}</td>
                                    <td>{permit.businessAddress}</td>
                                    <td>{new Date(permit.start_date).toLocaleDateString()}</td>
                                    <td>{new Date(permit.end_date).toLocaleDateString()}</td>
                                    <td>{permit.orNumber}</td>
                                    <td>{'\u20B1' + numberToCurrency(permit.amount)}</td>
                                    <td>
                                        <div className="dropdown">
                                            <button className="border-0 py-1 px-2 rounded text-bg-warning fs-7 fw-bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Select Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <button 
                                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                                    onClick={() => showPermitModal(permit.id)}
                                                >
                                                    <FontAwesomeIcon className='me-1' icon={faEdit}/>
                                                    Edit
                                                </button>
                                                <button
                                                    className="dropdown-item fw-semibold d-flex align-items-center fs-7"
                                                    onClick={() => deletePermit(permit.id)}
                                                >
                                                    <FontAwesomeIcon className='me-1' icon={faTrash}/>
                                                    Remove
                                                </button>
                                                <Link 
                                                    to='/certificate/permit/print' 
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

export default PermitTable