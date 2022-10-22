import { useState } from 'react'
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import useAxios from '../../hooks/useAxios'
import useSearch from '../../hooks/useSearch'
import Search from "../../components/search"
import TitleCard from '../../components/title'
import Loader from '../../components/loader'
import ResidentListTable from './resident-list-table'

function ResidentList(){

    // function and state for handle the close and open of modal using react-bootsrap
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // state for the value of all input field
    const [resident, setResident] = useState({
        lname: '',
        fname: '',
        mname: '',
        bdate: '',
        bplace: '',
        age: '',
        gender: '',
        contact: '',
        purok: '',
        totalFamilyMember: '',
        pwd: '',
        relationToHead: '',
        cstatus: '',
        btype: '',
        occupation: '',
        income: '',
        lenghtOfStay: '',
        religion: '',
        nationality: '',
        education: '',
        houseOwnerShip: '',
        formerAddress: '',
        photo: null
    })

    // state for saving loading
    const [saveLoading, setSaveLoading] = useState(false)

    const handleChange = (event) =>{
        const { name, value, files } = event.target
        setResident({
            ...resident,
            [name]: name === 'photo' ? files[0] : value
        })
    }

    // save resident to database
    const saveResident = async (event) =>{
        event.preventDefault();



        const residentFormData = new FormData()

        residentFormData.append('lname', resident.lname)
        residentFormData.append('fname', resident.fname)
        residentFormData.append('mname', resident.mname)
        residentFormData.append('dateOfBirth', resident.bdate)
        residentFormData.append('placeOfBirth', resident.bplace)
        residentFormData.append('age', resident.age)
        residentFormData.append('gender', resident.gender)
        residentFormData.append('contact', resident.contact)
        residentFormData.append('purok', resident.purok)
        residentFormData.append('totalFamilyMember', resident.totalFamilyMember)
        residentFormData.append('pwd', resident.pwd)
        residentFormData.append('relationToHead', resident.relationToHead)
        residentFormData.append('civilStatus', resident.cstatus)
        residentFormData.append('bloodType', resident.btype)
        residentFormData.append('occupation', resident.occupation)
        residentFormData.append('monthlyIncome', resident.income)
        residentFormData.append('lengthOfStay', resident.lenghtOfStay)
        residentFormData.append('religion', resident.religion)
        residentFormData.append('nationality', resident.nationality)
        residentFormData.append('educationAttainment', resident.education)
        residentFormData.append('houseOwnership', resident.houseOwnerShip)
        residentFormData.append('formerAddress', resident.formerAddress)
        residentFormData.append('residentPhoto', resident.photo)

        setSaveLoading(true)
        const insertResident = await axios.post('/resident/insert', residentFormData, {
            headers : {
                'Content-Type': 'multipart/form-data'
            }
        })
        setSaveLoading(false)
        if(insertResident.data.message){
            console.log(insertResident.data.message)
        }else{
            addNew(insertResident.data)
            handleClose()
        }

    }

    // get all resident data from database
    const [data, loading, addNew] = useAxios('/resident')

    const [search, searchValue] = useSearch()

    return (
        <>
            <section className="resident__list main-padding">

                <TitleCard 
                    title="resident list"
                />

                {/* main */}
                <main className="resident_list__main p-2 mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-4"> 
                        <Button 
                            type="button" 
                            className="btn text-bg-primary fs-7 fw-semibold" 
                            onClick={handleShow}
                        >
                            <FontAwesomeIcon className='me-1' icon={faUserPlus}/>
                            Add Residents
                        </Button>
                        
                        {/* search */}
                        <Search 
                            filterSearch={searchValue}
                        />  

                    </div>

                    <ResidentListTable 
                        resident={data}
                        loading={loading}
                        search={search}
                    />

                </main>

                {/* add resident modal */}
                <Modal show={show} onHide={handleClose} backdrop="static" size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                                <FontAwesomeIcon className='me-2' icon={faUserPlus}/>
                                New Resident
                            </h1>
                        </Modal.Title>
                    </Modal.Header>
                    <form>
                        <div className="modal-body row">

                            <Loader 
                                loader={saveLoading}
                                title="Saving..."
                            />

                            <div className='resident__left col'>
                                <div className='resident_name__container mb-3'>
                                    <label className='fs-7'>Name</label>
                                    <div className='resident__name__input d-flex align-items-center gap-2'>
                                        <input 
                                            type="text" 
                                            className='form-control-1' 
                                            placeholder='Last name'
                                            name='lname'
                                            value={resident.lname}
                                            onChange={handleChange}
                                        />
                                        <input 
                                            type="text" 
                                            className='form-control-1' 
                                            placeholder='First name'
                                            name='fname'
                                            value={resident.fname}
                                            onChange={handleChange}
                                        />
                                        <input 
                                            type="text" 
                                            className='form-control-1' 
                                            placeholder='Middle name'
                                            name='mname'
                                            value={resident.mname}
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
                                        value={resident.bdate}
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
                                        value={resident.bplace}
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
                                        value={resident.age}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='resident__gender mb-3'>
                                    <label htmlFor="gender" className='fs-7'>Gender</label>
                                    <select 
                                        className='form-control-1'
                                        id="gender"
                                        name="gender" 
                                        defaultValue={resident.gender}
                                        onChange={handleChange}
                                    >
                                        <option value={resident.gender} disabled>-- select gender --</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className='resident__contact mb-3'>
                                    <label htmlFor="contact" className='fs-7'>Contact</label>
                                    <input 
                                        type="text" 
                                        className='form-control-1' 
                                        id='contact' 
                                        name='contact'
                                        value={resident.contact}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='resident__purok mb-3'>
                                    <label htmlFor="purok" className='fs-7'>Purok/Sitio</label>
                                    <input 
                                        type="text" 
                                        className='form-control-1' 
                                        id='purok' 
                                        name='purok'
                                        value={resident.purok}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='resident__totalhousehold mb-3'>
                                    <label htmlFor="totalFamilyMember" className='fs-7'>Total Family Member</label>
                                    <input 
                                        type="number" 
                                        className='form-control-1' 
                                        id='totalFamilyMember' 
                                        name='totalFamilyMember'
                                        value={resident.totalFamilyMember}
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
                                        value={resident.pwd}
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
                                        value={resident.relationToHead}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='resident__cstatus'>
                                    <label htmlFor="cstatus" className='fs-7'>Civil Status</label>
                                    <select 
                                        className='form-control-1'
                                        id="cstatus"
                                        name="cstatus" 
                                        defaultValue={resident.cstatus}
                                        onChange={handleChange}
                                    >
                                        <option value={resident.cstatus} disabled>-- select status --</option>
                                        <option>Single</option>
                                        <option>Married</option>
                                    </select>
                                </div>
                            </div>
                            {/* right */}
                            <div className='resident__right col'>
                                <div className='resident__btype mb-3'>
                                    <label htmlFor="btype" className='fs-7'>Blood type</label>
                                    <select 
                                        className='form-control-1'
                                        id="btype"
                                        name="btype" 
                                        defaultValue={resident.btype}
                                        onChange={handleChange}
                                    >
                                        <option value={resident.btype} disabled>-- select Blood-Type --</option>
                                        <option>Not sure</option>
                                        <option>type - O positive</option>
                                        <option>type - O negative</option>
                                        <option>type - A positive</option>
                                        <option>type - A negative</option>
                                        <option>type - B positive</option>
                                        <option>type - B negative</option>
                                        <option>type - AB positive</option>
                                        <option>type - AB negative</option>
                                    </select>
                                </div>
                                <div className='resident__occupation mb-3'>
                                    <label htmlFor="occupation" className='fs-7'>Occupation</label>
                                    <input 
                                        type="text" 
                                        className='form-control-1' 
                                        id='occupation' 
                                        name='occupation'
                                        value={resident.occupation}
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
                                        value={resident.income}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='resident__lenghtOfStay mb-3'>
                                    <label htmlFor="lenghtOfStay" className='fs-7'>Length of Stay <small><em>(years)</em></small></label>
                                    <input 
                                        type="number" 
                                        className='form-control-1' 
                                        id='lenghtOfStay' 
                                        name='lenghtOfStay'
                                        value={resident.lenghtOfStay}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='resident__religion mb-3'>
                                    <label htmlFor="religion" className='fs-7'>Religion</label>
                                    <select 
                                        className='form-control-1'
                                        id="religion"
                                        name="religion"
                                        defaultValue={resident.religion}
                                        onChange={handleChange}
                                    >
                                        <option value={resident.religion} disabled>--- Select Religion ---</option>
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
                                        value={resident.nationality}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='resident__education mb-3'>
                                    <label htmlFor="education" className='fs-7'>Educational Attainment</label>
                                    <select 
                                        className='form-control-1'
                                        id="education"
                                        name="education"
                                        defaultValue={resident.education}
                                        onChange={handleChange}
                                    >
                                        <option value={resident.education} disabled>--- Select ---</option>
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
                                        name="houseOwnerShip"
                                        defaultValue={resident.houseOwnerShip}
                                        onChange={handleChange}
                                    >
                                        <option value={resident.houseOwnerShip} disabled>--- Select ---</option>
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
                                        value={resident.formerAddress}
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
                                        defaultValue={resident.photo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end p-3">
                            <button 
                                type="button" 
                                className="btn text-bg-primary fs-7 fw-semibold"
                                onClick={saveResident}
                            >
                                Add Resident
                            </button>
                        </div>
                    </form>
                </Modal>

            </section>
        </>
    )
}

export default ResidentList