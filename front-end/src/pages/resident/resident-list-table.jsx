import { useState } from 'react'
import axios from 'axios'
import { convertBase64ToImage } from '../../custom/function'
import DataModal from '../../components/data-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function ResidentListTable(props){

    const [resident, setResident] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    // click function for open the modal and display all the data of resident
    const handleShow = async (id) => {
        const getData = await axios.get(`/resident/id?id=${id}`)
        setResident(getData.data[0])
        setShow(true);
    }

    // filter resident data
    const filterResident = props.resident.filter(resident =>{
        return resident.fname.toLowerCase().includes(props.search) || resident.lname.toLowerCase().includes(props.search)
    })

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr className="text-bg-dark fs-7">
                        <th scope="col">Photo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.resident.length > 0 ?
                            filterResident.length > 0 ? 
                                filterResident.map(resident =>{
                                    return <tr key={resident.id} className='align-middle fs-7'>
                                                <td>
                                                    <div className='table__image__container border rounded border-secondary p-1'>
                                                        <img className='w-100 h-100' src={convertBase64ToImage(resident.photo)} alt="..." />
                                                    </div>
                                                </td>
                                                <td>{`${resident.lname}, ${resident.fname} ${resident.mname}`}</td>
                                                <td>{resident.contact}</td>
                                                <td>{resident.age}</td>
                                                <td>{resident.gender}</td>
                                                <td>
                                                    <button 
                                                        className="btn text-bg-warning fw-semibold d-flex align-items-center fs-7"
                                                        onClick={() => handleShow(resident.id)}
                                                    >
                                                        <FontAwesomeIcon className='me-1' icon={faCircleInfo}/>
                                                        More
                                                    </button>
                                                </td>
                                            </tr>
                                })
                            : <tr>
                                <td colSpan='7' className="text-center">
                                    {`${props.search} not found!`}
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

            {/* data modal */}
            <DataModal 
                show={show}
                handleClose={handleClose}
                resident={resident}
            />
        </>
    )
}

export default ResidentListTable