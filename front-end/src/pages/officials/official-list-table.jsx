
function OfficialListTable(){
    return (
            <table className="table table-hover table-bordered">
                <thead>
                    <tr className="text-bg-dark">
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
                    <tr className='align-middle'>
                        <td>
                            <div className='table__image__container border rounded border-secondary p-1'>
                                <img className='w-100 h-100' src="" alt="..." />
                            </div>
                        </td>
                        <td>Ronel Florida</td>
                        <td>09345652345</td>
                        <td>Captain</td>
                        <td>Sitio kalikasan, Sto nino, Rizal Occidental Mindoro</td>
                        <td>07-29-2022</td>
                        <td>07-29-2024</td>
                    </tr>
                    <tr className='align-middle'>
                        <td>
                            <div className='table__image__container border rounded border-secondary p-1'>
                                <img src="" alt="..." />
                            </div>
                        </td>
                        <td>Ronel Florida</td>
                        <td>09451234354</td>
                        <td>Kagawad</td>
                        <td>Sitio kalikasan, Sto nino, Rizal Occidental Mindoro</td>
                        <td>07-29-2022</td>
                        <td>07-29-2024</td>
                    </tr>
                </tbody>
            </table>
    )
}

export default OfficialListTable