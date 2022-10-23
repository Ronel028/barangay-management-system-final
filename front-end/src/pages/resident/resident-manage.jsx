import { useState } from 'react'
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import useAxios from '../../hooks/useAxios'
import useSearch from '../../hooks/useSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { convertBase64ToImage, dataURLtoFile } from '../../custom/function'
import Search from '../../components/search'
import TitleCard from '../../components/title'
import Loader from '../../components/loader'

function ResidentManage(){

    // get all data of resident
    const [data, loading, update] = useAxios('/resident')

    //search
    const [search, searchValue] = useSearch()

    //filter resident
    const filterResident = data.filter(resident =>{
        return resident.fname.toLowerCase().includes(search) || resident.lname.toLowerCase().includes(search)
    })

    //  delete function ---------------------------------

    //loading delete
    const [loadingDelete, setLoadingDelete] = useState({
        deleting: false,
        id: null
    })

    const handleDelete = async (id)=>{
        if(window.confirm('Are you sure you to remove this resident?')){
            setLoadingDelete({
                ...loadingDelete,
                deleting: true,
                id: id
            })
            const deleteResident = await axios.delete(`/resident/delete?id=${id}`)
            setLoadingDelete({
                ...loadingDelete,
                deleting: false,
                id: null
            })
            if(deleteResident.data.message){
                return
            }else{
                update(deleteResident.data)
            }
        }else{
            return
        }
    }
    // -------------------------------------------------------

    // update function ---------------------------------------

    // state for handling input data
    const [residentUpdate, setResidentUpdate] = useState({
        lname: '',
        fname: '',
        mname: '',
        dateOfBirth: '',
        placeOfBirth: '',
        age: '',
        gender: '',
        contact: '',
        purok: '',
        totalFamilyMember: '',
        pwd: '',
        relationToHead: '',
        civilStatus: '',
        btype: '',
        occupation: '',
        income: '',
        lengthOfStay: '',
        religion: '',
        nationality: '',
        education: '',
        houseOwnership: '',
        formerAddress: '',
        photo: null
    })

    // resident id
    const [residentID, setResidentID] = useState()

    //loading while updating
    const [loader, setLoader] = useState(false)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    // open modal and get resident by info
    const handleShow = async (id) => {

        setResidentID(id) // get resident id and save to residentID state

        const resident = await axios.get(`/resident/id?id=${id}`)
        setResidentUpdate({
            ...residentUpdate,
            lname: resident.data[0].lname,
            fname: resident.data[0].fname,
            mname: resident.data[0].mname,
            dateOfBirth: new Date(resident.data[0].dateOfBirth).toISOString().slice(0, 10),
            placeOfBirth: resident.data[0].placeOfBirth,
            age: resident.data[0].age,
            gender: resident.data[0].gender,
            contact: resident.data[0].contact,
            purok: resident.data[0].purok,
            totalFamilyMember: resident.data[0].totalFamilyMember,
            pwd: resident.data[0].personWithDisability,
            relationToHead: resident.data[0].relationToHead,
            civilStatus: resident.data[0].civilStatus,
            btype: resident.data[0].bloodType,
            occupation: resident.data[0].occupation,
            income: resident.data[0].monthlyIncome,
            lengthOfStay: resident.data[0].lengthOfStay,
            religion: resident.data[0].religion,
            nationality: resident.data[0].nationality,
            education: resident.data[0].educationAttainment,
            houseOwnership: resident.data[0].houseOwnership,
            formerAddress: resident.data[0].formerAddress,
            photo: dataURLtoFile(convertBase64ToImage(resident.data[0].photo), resident.data[0].fname)
        })
        setShow(true)

    };


    const handleChange = (event) =>{
        const { name, value, files } = event.target
        setResidentUpdate({
            ...residentUpdate,
            [name] : name === 'photo' ? files[0] : value
        })
    }

    const updateResident  = async (event) =>{
        event.preventDefault()

        const residentFormData = new FormData()

        residentFormData.append('lname', residentUpdate.lname)
        residentFormData.append('fname', residentUpdate.fname)
        residentFormData.append('mname', residentUpdate.mname)
        residentFormData.append('dateOfBirth', residentUpdate.dateOfBirth)
        residentFormData.append('placeOfBirth', residentUpdate.placeOfBirth)
        residentFormData.append('age', residentUpdate.age)
        residentFormData.append('gender', residentUpdate.gender)
        residentFormData.append('contact', residentUpdate.contact)
        residentFormData.append('purok', residentUpdate.purok)
        residentFormData.append('totalFamilyMember', residentUpdate.totalFamilyMember)
        residentFormData.append('pwd', residentUpdate.pwd)
        residentFormData.append('relationToHead', residentUpdate.relationToHead)
        residentFormData.append('civilStatus', residentUpdate.civilStatus)
        residentFormData.append('bloodType', residentUpdate.btype)
        residentFormData.append('occupation', residentUpdate.occupation)
        residentFormData.append('monthlyIncome', residentUpdate.income)
        residentFormData.append('lengthOfStay', residentUpdate.lengthOfStay)
        residentFormData.append('religion', residentUpdate.religion)
        residentFormData.append('nationality', residentUpdate.nationality)
        residentFormData.append('educationAttainment', residentUpdate.education)
        residentFormData.append('houseOwnership', residentUpdate.houseOwnership)
        residentFormData.append('formerAddress', residentUpdate.formerAddress)
        residentFormData.append('residentPhoto', residentUpdate.photo)

        setLoader(true)
        const updateResident = await axios.post(`/resident/update?id=${residentID}`, residentFormData, {
            headers : {
                'Content-Type': 'multipart/form-data'
            }
        })
        setLoader(false)

        if(updateResident.data.message){
            return
        }else{
            update(updateResident.data)
            handleClose()
        }
    }

    //--------------------------------------------------------

    return(
        <>
            <section className="officials__manage__container main-padding">

                <TitleCard 
                    title="manage resident"
                />

                {/* main */}
                <main className="officials__manage__main p-2 mt-3">
                    <div className='d-flex justify-content-end align-items-center mb-4'>

                        <Search 
                            filterSearch={searchValue}
                        />

                    </div>
                    {/* table */}
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
                                data.length > 0 ? 
                                    filterResident.length > 0 ?
                                        filterResident.map(resident =>{
                                            return <tr key={resident.id} className='align-middle fs-7'>
                                                        <td>
                                                            <div className='table__image__container border rounded border-secondary p-1'>
                                                                <img className='w-100 h-100' src={convertBase64ToImage(resident.photo)} alt={`${resident.fname} ${resident.lname}`} />
                                                            </div>
                                                        </td>
                                                        <td>{`${resident.fname} ${resident.lname}`}</td>
                                                        <td>{resident.contact}</td>
                                                        <td>{resident.age}</td>
                                                        <td>{resident.gender}</td>
                                                        <td>
                                                            <button 
                                                                className="border-0 py-1 px-2 rounded text-bg-primary me-2" 
                                                                type="button" 
                                                                onClick={() => handleShow(resident.id)}
                                                            >
                                                                <FontAwesomeIcon icon={faEdit}/>
                                                            </button>
                                                            <button 
                                                                className="border-0 py-1 px-2 rounded text-bg-danger" 
                                                                type="button"
                                                                onClick={() => handleDelete(resident.id)}
                                                            >
                                                                <div className={loadingDelete.id === resident.id ? 'spinner-arrow d-flex' : ''}>
                                                                    <FontAwesomeIcon
                                                                        className={loadingDelete.id === resident.id ? 'invisible' : 'visible'}
                                                                        icon={faTrash} 
                                                                    />
                                                                </div>
                                                            </button>
                                                        </td>
                                                    </tr>
                                        })
                                    :   <tr>
                                            <td colSpan='7' className="text-center">
                                                {`${search} not found!`}
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
                    {/* end table */}


                    {/* update resident modal */}
                    <Modal show={show} onHide={handleClose} size='lg'>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                                    <FontAwesomeIcon className='me-2' icon={faPenToSquare}/>
                                    Update Resident
                                </h1>
                            </Modal.Title>
                        </Modal.Header>
                        <form>
                            <div className="modal-body row">

                                <Loader 
                                    loader={loader}
                                    title="Updating..."
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
                                                value={residentUpdate.lname}
                                                onChange={handleChange}
                                            />
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                placeholder='First name'
                                                name='fname'
                                                value={residentUpdate.fname}
                                                onChange={handleChange}
                                            />
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                placeholder='Middle name'
                                                name='mname'
                                                value={residentUpdate.mname}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='resident__bday mb-3'>
                                        <label htmlFor="dateOfBirth" className='fs-7'>Date of Birth</label>
                                        <input 
                                            type="date" 
                                            className='form-control-1' 
                                            id='dateOfBirth' 
                                            name='dateOfBirth'
                                            value={residentUpdate.dateOfBirth}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='resident__bplace mb-3'>
                                        <label htmlFor="placeOfBirth" className='fs-7'>Place of Birth</label>
                                        <input 
                                            type="text" 
                                            className='form-control-1' 
                                            id='placeOfBirth' 
                                            name='placeOfBirth'
                                            value={residentUpdate.placeOfBirth}
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
                                            value={residentUpdate.age}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='resident__gender mb-3'>
                                        <label htmlFor="gender" className='fs-7'>Gender</label>
                                        <select 
                                            className='form-control-1'
                                            id="gender"
                                            name="gender" 
                                            value={residentUpdate.gender}
                                            onChange={handleChange}
                                        >
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
                                            value={residentUpdate.contact}
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
                                            value={residentUpdate.purok}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='resident__totalhousehOld mb-3'>
                                        <label htmlFor="totalFamilyMember" className='fs-7'>Total Family Member</label>
                                        <input 
                                            type="number" 
                                            className='form-control-1' 
                                            id='totalFamilyMember' 
                                            name='totalFamilyMember'
                                            value={residentUpdate.totalFamilyMember}
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
                                            value={residentUpdate.pwd}
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
                                            value={residentUpdate.relationToHead}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='resident__cstatus'>
                                        <label htmlFor="civilStatus" className='fs-7'>Civil Status</label>
                                        <select 
                                            className='form-control-1'
                                            id="civilStatus"
                                            name="civilStatus" 
                                            value={residentUpdate.civilStatus}
                                            onChange={handleChange}
                                        >
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
                                            value={residentUpdate.btype}
                                            onChange={handleChange}
                                        >
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
                                            value={residentUpdate.occupation}
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
                                            value={residentUpdate.income}
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
                                            value={residentUpdate.lengthOfStay}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='resident__religion mb-3'>
                                        <label htmlFor="religion" className='fs-7'>Religion</label>
                                        <select 
                                            className='form-control-1'
                                            id="religion"
                                            name="religion"
                                            value={residentUpdate.religion}
                                            onChange={handleChange}
                                        >
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
                                            value={residentUpdate.nationality}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='resident__education mb-3'>
                                        <label htmlFor="education" className='fs-7'>Educational Attainment</label>
                                        <select 
                                            className='form-control-1'
                                            id="education"
                                            name="education"
                                            value={residentUpdate.education}
                                            onChange={handleChange}
                                        >
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
                                        <label htmlFor="houseOwnership" className='fs-7'>House Ownership</label>
                                        <select 
                                            className='form-control-1'
                                            id="houseOwnership"
                                            name="houseOwnership"
                                            value={residentUpdate.houseOwnership}
                                            onChange={handleChange}
                                        >
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
                                            value={residentUpdate.formerAddress}
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
                    </Modal>
                    {/* end modal */}
                </main>
            </section>
        </>
    )
}

export default ResidentManage