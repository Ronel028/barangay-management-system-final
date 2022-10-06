import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
function BlotterTable(){
    return (
            <table className="table table-hover table-bordered">
                <thead>
                    <tr className="text-bg-dark">
                        <th scope="col">Complainant</th>
                        <th scope="col">Complainee</th>
                        <th scope="col">Complaint</th>
                        <th scope="col">Location of Incident</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='align-middle'>
                        <td>Buknoy</td>
                        <td>Tuknoy</td>
                        <td>Nagnakaw ng Pato</td>
                        <td>Sitio tae tae</td>
                        <td>UnSolved</td>
                        <td>
                            <button 
                                className="btn text-bg-warning fw-semibold d-flex align-items-center fs-7"
                                data-bs-toggle="modal" 
                                data-bs-target="#blotter-data-modal" 
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

export default BlotterTable