import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function ResidentListTable(props){
    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr className="text-bg-dark">
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
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
                    <td>09345652345</td>
                    <td>20</td>
                    <td>Male</td>
                    <td>
                        <button 
                            className="btn text-white text-bg-info d-flex align-items-center fs-7"
                            data-bs-toggle="modal" 
                            data-bs-target="#resident-data"
                        >
                            <FontAwesomeIcon className='me-1' icon={faCircleInfo}/>
                            More
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ResidentListTable