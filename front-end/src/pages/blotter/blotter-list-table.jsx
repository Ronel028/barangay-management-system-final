import { useState } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import BlotterData from './blotter-data-modal'

function BlotterTable(props){

    //modal show
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [blotterData, setBlotterData] = useState([])

    // show blotter data button
    const showBlotterData = async (id) =>{
        const blotterData = await axios.get(`/blotter/blotter?id=${id}`)
        setBlotterData(blotterData.data[0])
        handleShow();
    }

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr className="text-bg-dark fs-7">
                        <th scope="col">Complainant</th>
                        <th scope="col">Complainee</th>
                        <th scope="col">Complaint</th>
                        <th scope="col">Location of Incident</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        props.blotter.length > 0 ?
                            props.blotter.map(blotter =>(
                                <tr key={blotter.id} className='align-middle fs-7'>
                                    <td>{blotter.complainant_name}</td>
                                    <td>{blotter.complainee_name}</td>
                                    <td>{blotter.complaint}</td>
                                    <td>{blotter.locationOfIncident}</td>
                                    <td>{blotter.status}</td>
                                    <td>
                                        <button 
                                            className="btn text-bg-warning fw-semibold d-flex align-items-center fs-7"
                                            onClick={() => showBlotterData(blotter.id)}
                                        >
                                            <FontAwesomeIcon className='me-1' icon={faCircleInfo}/>
                                            More
                                        </button>
                                    </td>
                                </tr>
                            ))
                        :props.loading ? <tr>
                                            <td colSpan='7' className="text-center">
                                                <div className="w-100 d-flex align-items-center justify-content-center">
                                                    <div className="spinner me-2"></div>
                                                    loading...
                                                </div>
                                            </td>
                                        </tr>
                                        :<tr>
                                            <td colSpan='7' className="text-center">
                                                No data found
                                            </td>
                                        </tr>
                    }
                </tbody>
            </table>

            {/* blotter data modal */}
            <BlotterData 
                handleClose={handleClose}
                show={show}
                blotterData={blotterData}
            />

        </>
    )
}

export default BlotterTable