import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Navigation from "../../components/navigation"
import Sidemenu from "../../components/sidemenu"
import Search from '../../components/search'
import updateIcon from '../../Images/edit-dark.svg'
function ResidentManage(){

    const handleChange = (event) =>{
        console.log(event.target)
    }

    const updateResident  = (event) =>{
        console.log('Testing')
    }

    return(
        <>
            {/* navigation */}
            <Navigation 
                title="manage officials"
            />

            {/* side menu */}
            <Sidemenu />

            <section className="officials__manage__container main-padding">
                {/* main */}
                <main className="officials__manage__main p-2 mt-3">
                    <div className='d-flex justify-content-end align-items-center mb-4'>
                        <Search />
                    </div>
                    {/* table */}
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
                                <td>22</td>
                                <td>Male</td>
                                <td>
                                    <button 
                                        className="border-0 py-1 px-2 rounded text-bg-primary me-2" 
                                        type="button" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#update-resident"
                                    >
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </button>
                                    <button className="border-0 py-1 px-2 rounded text-bg-danger" type="button">
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* end table */}


                    {/* update resident modal */}
                    <div className="modal modal-lg fade" id="update-resident" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                                        <FontAwesomeIcon className='me-2' icon={faPenToSquare}/>
                                        Update Resident
                                    </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form>
                                    <div className="modal-body row">
                                        <div className='resident__left col'>
                                            <div className='resident_name__container mb-3'>
                                                <label className='fs-7'>Name</label>
                                                <div className='resident__name__input d-flex align-items-center gap-2'>
                                                    <input 
                                                        type="text" 
                                                        className='form-control-1' 
                                                        placeholder='Last name'
                                                        name='lname'
                                                        onChange={handleChange}
                                                    />
                                                    <input 
                                                        type="text" 
                                                        className='form-control-1' 
                                                        placeholder='First name'
                                                        name='fname'
                                                        onChange={handleChange}
                                                    />
                                                    <input 
                                                        type="text" 
                                                        className='form-control-1' 
                                                        placeholder='Middle name'
                                                        name='mname'
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className='resident__bday mb-3'>
                                                <label htmlFor="bdate" className='fs-7'>Date of Birth</label>
                                                <input 
                                                    type="date" 
                                                    className='form-control-1' 
                                                    id='bdate' 
                                                    name='bdate'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='resident__bplace mb-3'>
                                                <label htmlFor="bplace" className='fs-7'>Place of Birth</label>
                                                <input 
                                                    type="text" 
                                                    className='form-control-1' 
                                                    id='bplace' 
                                                    name='bplace'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='resident__age mb-3'>
                                                <label htmlFor="age" className='fs-7'>Age</label>
                                                <input 
                                                    type="number" 
                                                    className='form-control-1' 
                                                    id='age' 
                                                    name='age'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='resident__gender mb-3'>
                                                <label htmlFor="gender" className='fs-7'>Gender</label>
                                                <select 
                                                    className='form-control-1'
                                                    id="gender"
                                                    name="gender" 
                                                    defaultValue=''
                                                    onChange={handleChange}
                                                >
                                                    <option value='' disabled>-- select gender --</option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                            <div className='resident__purok mb-3'>
                                                <label htmlFor="purok" className='fs-7'>Purok/Sitio</label>
                                                <input 
                                                    type="text" 
                                                    className='form-control-1' 
                                                    id='purok' 
                                                    name='purok'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='resident__totalhousehOld mb-3'>
                                                <label htmlFor="totalhousehold" className='fs-7'>Total Household</label>
                                                <input 
                                                    type="number" 
                                                    className='form-control-1' 
                                                    id='totalHousehOld' 
                                                    name='totalHouseold'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='resident__pwd mb-3'>
                                                <label htmlFor="pwd" className='fs-7'>Person with Disability</label>
                                                <input 
                                                    type="text" 
                                                    className='form-control-1' 
                                                    id='pwd' 
                                                    name='pwd'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='resident__relationToHead mb-3'>
                                                <label htmlFor="relationToHead" className='fs-7'>Relation to Head</label>
                                                <input 
                                                    type="text" 
                                                    className='form-control-1' 
                                                    id='relationToHead' 
                                                    name='relationToHead'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='resident__cstatus'>
                                                <label htmlFor="cstatus" className='fs-7'>Civil Status</label>
                                                <input 
                                                    type="text" 
                                                    className='form-control-1' 
                                                    id='cstatus' 
                                                    name='cstatus'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        {/* right */}
                                        <div className='resident__right col'>
                                            <div className='resident__btype mb-3'>
                                                <label htmlFor="btype" className='fs-7'>Blood type</label>
                                                <input 
                                                    type="text" 
                                                    className='form-control-1' 
                                                    id='btype' 
                                                    name='btype'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='resident__occupation mb-3'>
                                                <label htmlFor="occupation" className='fs-7'>Occupation</label>
                                                <input 
                                                    type="text" 
                                                    className='form-control-1' 
                                                    id='occupation' 
                                                    name='occupation'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='resident__income mb-3'>
                                                <label htmlFor="income" className='fs-7'>Monthly Income</label>
                                                <input 
                                                    type="number" 
                                                    className='form-control-1' 
                                                    id='income' 
                                                    name='income'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='resident__lenghtOfStay mb-3'>
                                                <label htmlFor="lenghtOfStay" className='fs-7'>Length of Stay <small><em>(months)</em></small></label>
                                                <input 
                                                    type="number" 
                                                    className='form-control-1' 
                                                    id='lenghtOfStay' 
                                                    name='lenghtOfStay'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='resident__religion mb-3'>
                                                <label htmlFor="religion" className='fs-7'>Religion</label>
                                                <select 
                                                    className='form-control-1'
                                                    id="religion"
                                                    defaultValue=''
                                                    name="religion"
                                                    onChange={handleChange}
                                                >
                                                    <option value='' disabled>--- Select Religion ---</option>
                                                    <option>Roman Catholic</option>
                                                    <option value='Iglesia ni Cristo'>Iglesia ni Cristo</option>
                                                    <option>Seventh Day Adventist</option>
                                                    <option>Born Again</option>
                                                    <option>Muslim</option>
                                                </select>
                                            </div>
                                            <div className='resident__nationality mb-3'>
                                                <label htmlFor="nationality" className='fs-7'>Nationality</label>
                                                <input 
                                                    type="text" 
                                                    className='form-control-1' 
                                                    id='nationality' 
                                                    name='nationality'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='resident__education mb-3'>
                                                <label htmlFor="education" className='fs-7'>Highest Educational Attainment</label>
                                                <select 
                                                    className='form-control-1'
                                                    id="education"
                                                    defaultValue=''
                                                    name="education"
                                                    onChange={handleChange}
                                                >
                                                    <option value='' disabled>--- Select ---</option>
                                                    <option>No Schooling Completed</option>
                                                    <option>Elementary (Undergrad)</option>
                                                    <option>Elementary (Graduate)</option>
                                                    <option>High School (Undergrad)</option>
                                                    <option>Hight School (Graduate)</option>
                                                    <option>College (Undergrad)</option>
                                                    <option>College (Graduate)</option>
                                                    <option>Bachelor's Degree</option>
                                                    <option>Master's Degree</option>
                                                    <option>Doctorate Degree</option>
                                                </select>
                                            </div>
                                            <div className='resident__houseOwnerShip mb-3'>
                                                <label htmlFor="houseOwnerShip" className='fs-7'>House Ownership</label>
                                                <select 
                                                    className='form-control-1'
                                                    id="houseOwnerShip"
                                                    defaultValue=''
                                                    name="houseOwnerShip"
                                                    onChange={handleChange}
                                                >
                                                    <option value='' disabled>--- Select ---</option>
                                                    <option>Own Home</option>
                                                    <option>Rent</option>
                                                    <option>Live with Parents/Relatives</option>
                                                </select>
                                            </div>
                                            <div className='resident__formerAddress mb-3'>
                                                <label htmlFor="formerAddress" className='fs-7'>Former Address</label>
                                                <input 
                                                    type="text" 
                                                    className='form-control-1' 
                                                    id='formerAddress' 
                                                    name='formerAddress'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='resident__photo'>
                                                <label htmlFor="photo" className='fs-7'>Photo</label>
                                                <input 
                                                    type="file" 
                                                    className='form-control-1' 
                                                    id='photo' 
                                                    name='photo'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-end p-3">
                                        <button 
                                            type="button" 
                                            className="btn text-bg-primary fs-7 fw-semibold"
                                            onClick={updateResident}
                                        >
                                            Update Resident
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* end modal */}
                </main>
            </section>
        </>
    )
}

export default ResidentManage