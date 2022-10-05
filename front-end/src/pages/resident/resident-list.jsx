import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Navigation from "../../components/navigation"
import Sidemenu from "../../components/sidemenu"
import Search from "../../components/search"
import ResidentListTable from './resident-list-table'

function ResidentList(){
    return (
        <>
            {/* navigation */}
            <Navigation 
                title="resident list"
            />

            {/* side menu */}
            <Sidemenu />

            <section className="resident__list main-padding">

                {/* main */}
                <main className="resident_list__main p-2 mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-4"> 
                        <button 
                            type="button" 
                            className="btn text-bg-primary fs-7 fw-semibold" 
                            data-bs-toggle="modal" 
                            data-bs-target="#add-resident"
                        >
                            <FontAwesomeIcon className='me-1' icon={faUserPlus}/>
                            Add Residents
                        </button>
                        <Search />
                    </div>
                    <ResidentListTable />
                </main>

                {/* add resident modal */}
                <div className="modal modal-lg fade" id="add-resident" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 d-flex align-items-center" id="exampleModalLabel">
                                    <FontAwesomeIcon className='me-2' icon={faUserPlus}/>
                                    New Resident
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
                                                />
                                                <input 
                                                    type="text" 
                                                    className='form-control-1' 
                                                    placeholder='First name'
                                                    name='fname'
                                                />
                                                <input 
                                                    type="text" 
                                                    className='form-control-1' 
                                                    placeholder='Middle name'
                                                    name='mname'
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
                                            />
                                        </div>
                                        <div className='resident__bplace mb-3'>
                                            <label htmlFor="bplace" className='fs-7'>Place of Birth</label>
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                id='bplace' 
                                                name='bplace'
                                            />
                                        </div>
                                        <div className='resident__age mb-3'>
                                            <label htmlFor="age" className='fs-7'>Age</label>
                                            <input 
                                                type="number" 
                                                className='form-control-1' 
                                                id='age' 
                                                name='age'
                                            />
                                        </div>
                                        <div className='resident__gender mb-3'>
                                            <label htmlFor="gender" className='fs-7'>Gender</label>
                                            <select 
                                                className='form-control-1'
                                                id="gender"
                                                name="gender" 
                                                defaultValue=''
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
                                            />
                                        </div>
                                        <div className='resident__totalhousehold mb-3'>
                                            <label htmlFor="totalhousehold" className='fs-7'>Total Household</label>
                                            <input 
                                                type="number" 
                                                className='form-control-1' 
                                                id='totalhousehold' 
                                                name='totalhousehold'
                                            />
                                        </div>
                                        <div className='resident__pwd mb-3'>
                                            <label htmlFor="pwd" className='fs-7'>Person with Disability</label>
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                id='pwd' 
                                                name='pwd'
                                            />
                                        </div>
                                        <div className='resident__relationtohead mb-3'>
                                            <label htmlFor="relationtohead" className='fs-7'>Relation to Head</label>
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                id='relationtohead' 
                                                name='relationtohead'
                                            />
                                        </div>
                                        <div className='resident__cstatus'>
                                            <label htmlFor="cstatus" className='fs-7'>Civil Status</label>
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                id='cstatus' 
                                                name='cstatus'
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
                                            />
                                        </div>
                                        <div className='resident__occupation mb-3'>
                                            <label htmlFor="occupation" className='fs-7'>Occupation</label>
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                id='occupation' 
                                                name='occupation'
                                            />
                                        </div>
                                        <div className='resident__income mb-3'>
                                            <label htmlFor="income" className='fs-7'>Monthly Income</label>
                                            <input 
                                                type="number" 
                                                className='form-control-1' 
                                                id='income' 
                                                name='income'
                                            />
                                        </div>
                                        <div className='resident__lenghtofstay mb-3'>
                                            <label htmlFor="lenghtofstay" className='fs-7'>Length of Stay <small><em>(months)</em></small></label>
                                            <input 
                                                type="number" 
                                                className='form-control-1' 
                                                id='lenghtofstay' 
                                                name='lenghtofstay'
                                            />
                                        </div>
                                        <div className='resident__religion mb-3'>
                                            <label htmlFor="religion" className='fs-7'>Religion</label>
                                            <select 
                                                className='form-control-1'
                                                id="religion"
                                                defaultValue=''
                                                name="religion"
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
                                            />
                                        </div>
                                        <div className='resident__education mb-3'>
                                            <label htmlFor="education" className='fs-7'>Highest Educational Attainment</label>
                                            <select 
                                                className='form-control-1'
                                                id="education"
                                                defaultValue=''
                                                name="education"
                                            >
                                                <option value='' disabled>--- Select ---</option>
                                                <option>No Schooling Completed</option>
                                                <option>Elementary (undergrad)</option>
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
                                        <div className='resident__houseownershipn mb-3'>
                                            <label htmlFor="houseownership" className='fs-7'>House Ownership</label>
                                            <select 
                                                className='form-control-1'
                                                id="houseownership"
                                                defaultValue=''
                                                name="houseownership"
                                            >
                                                <option value='' disabled>--- Select ---</option>
                                                <option>Own Home</option>
                                                <option>Rent</option>
                                                <option>Live with Parents/Relatives</option>
                                            </select>
                                        </div>
                                        <div className='resident__formeraddress mb-3'>
                                            <label htmlFor="formeraddress" className='fs-7'>Former Address</label>
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                id='formeraddress' 
                                                name='formeraddress'
                                            />
                                        </div>
                                        <div className='resident__photo'>
                                            <label htmlFor="photo" className='fs-7'>Photo</label>
                                            <input 
                                                type="file" 
                                                className='form-control-1' 
                                                id='photo' 
                                                name='photo'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-end p-3">
                                    <button 
                                        type="button" 
                                        className="btn text-bg-primary fs-7 fw-semibold"
                                    >
                                        Add Resident
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResidentList