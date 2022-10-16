import { convertBase64ToImage } from '../../custom/function'

function OfficialListTable(props){

    const dateFormat = (date)=>{
        return new Date(date).toLocaleDateString()
    }

    //filtering data by name of officials
    const filteredOfficial = props.officials.filter(official =>{
        return official.name.toLowerCase().includes(props.searchOfficials)
    })

    return (
            <table className="table table-hover table-bordered">
                <thead>
                    <tr className="text-bg-dark fs-7">
                        <th scope="col">Photo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Position</th>
                        <th scope="col">Address</th>
                        <th scope="col">Term Start</th>
                        <th scope="col">Term End</th>
                    </tr>
                </thead>
                <tbody>

                    {   
                        (props.officials.length > 0) ?
                            filteredOfficial.length > 0 ? 
                                filteredOfficial.map(official =>{
                                    return <tr className='align-middle fs-7' key={official.id}>
                                                <td>
                                                    <div className='table__image__container border rounded border-secondary p-1'>
                                                        <img className='w-100 h-100' src={convertBase64ToImage(official.photo)} alt={official.name} />
                                                    </div>
                                                </td>
                                                <td>{official.name}</td>
                                                <td>{official.contact}</td>
                                                <td>{official.position}</td>
                                                <td>{official.address}</td>
                                                <td>{dateFormat(official.term_start)}</td>
                                                <td>{dateFormat(official.term_end)}</td>
                                            </tr>
                                })
                            :<tr>
                                <td colSpan='7' className="text-center">
                                    {props.searchOfficials} is not found in the list!
                                </td>
                            </tr>  
                        :props.loading ?<tr>
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
    )
}

export default OfficialListTable