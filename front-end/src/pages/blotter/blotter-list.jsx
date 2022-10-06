import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Navigation from "../../components/navigation"
import Sidemenu from "../../components/sidemenu"
import Search from '../../components/search'
import BlotterTable from './blotter-list-table'
import BlotterData from './blotter-data-modal'

function BlotterList(){
    return (
        <>
            {/* navigation */}
            <Navigation 
                title="Blotter List"
            />

            {/* side menu */}
            <Sidemenu />

            {/* main section */}
            <section className="blotter__container main-padding">
                
                {/* main */}
                <main className="blotter_list__main p-2 mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-4"> 
                        <button 
                            type="button" 
                            className="btn text-bg-primary fs-7 fw-semibold" 
                            data-bs-toggle="modal" 
                            data-bs-target="#add-blotter"
                        >
                            <FontAwesomeIcon className='me-1' icon={faUserPlus}/>
                            Add Blotter
                        </button>
                        <Search />
                    </div>
                    <BlotterTable />
                </main>

                {/* modal */}
                <div className="modal modal-lg fade" id="add-blotter" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-6 d-flex align-items-center" id="exampleModalLabel">
                                    <FontAwesomeIcon className='me-2' icon={faUserPlus}/>
                                    New Blotter
                                </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form>
                                <div className="modal-body row">

                                    {/* blotter left input */}
                                    <div className="blotter__left col">
                                        <div className="complainant mb-3">
                                            <label className='fs-7 fw-bold' htmlFor="complainant">Complainant</label>
                                            <select 
                                                id="complainant"
                                                className='form-control-1'
                                                name="complainant" 
                                                defaultValue=''
                                            >
                                                <option value='' disabled>--- select name ---</option>
                                                <option>Buknoy</option>
                                                <option>Burnok</option>
                                            </select>
                                        </div>
                                        <div className="complainant__age mb-3">
                                            <label className='fs-7 fw-bold' htmlFor="complainant__age">Age</label>
                                            <input 
                                                type="number" 
                                                placeholder='complainant age' 
                                                className='form-control-1'
                                                name='complainant__age'
                                            />
                                        </div>
                                        <div className="complainant__gender mb-3">
                                            <label className='fs-7 fw-bold' htmlFor="complainant__gender">Gender</label>
                                            <select 
                                                id="complainant__gender"
                                                className='form-control-1'
                                                name="complainant__gender" 
                                                defaultValue=''
                                            >
                                                <option value='' disabled>--- complainant gender ---</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                        <div className="complainant__address mb-3">
                                            <label className='fs-7 fw-bold' htmlFor="complainant__address">Address</label>
                                            <input 
                                                type="text" 
                                                placeholder='complainant address' 
                                                className='form-control-1'
                                                name='complainant__address'
                                            />
                                        </div>
                                    </div>

                                    {/* blotter right input */}
                                    <div className="blotter__right col">
                                        <div className="complainee mb-3">
                                            <label className='fs-7 fw-bold' htmlFor="complainee">Complainee</label>
                                            <select 
                                                id="complainee"
                                                className='form-control-1'
                                                name="complainee" 
                                                defaultValue=''
                                            >
                                                <option value='' disabled>--- select name ---</option>
                                                <option>Buknoy</option>
                                                <option>Burnok</option>
                                            </select>
                                        </div>
                                        <div className="complainee__age mb-3">
                                            <label className='fs-7 fw-bold' htmlFor="complainee__age">Age</label>
                                            <input 
                                                type="number" 
                                                placeholder='complainee age' 
                                                className='form-control-1'
                                                name='complainee__age'
                                            />
                                        </div>
                                        <div className="complainee__gender mb-3">
                                            <label className='fs-7 fw-bold' htmlFor="complainee__gender">Gender</label>
                                            <select 
                                                id="complainee__gender"
                                                className='form-control-1'
                                                name="complainee__gender" 
                                                defaultValue=''
                                            >
                                                <option value='' disabled>--- complainee gender ---</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                        <div className="complainee__address mb-3">
                                            <label className='fs-7 fw-bold' htmlFor="complainee__address">Address</label>
                                            <input 
                                                type="text" 
                                                placeholder='complainee address' 
                                                className='form-control-1'
                                                name='complainee__address'
                                            />
                                        </div>
                                    </div>

                                    {/* blotter bottom input */}
                                    <div className="blotter__bottom">
                                        <div className="complaint mb-3">
                                            <label htmlFor="complaint">Complaint</label>
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                placeholder='complaint'
                                                name='complaint'
                                            />
                                        </div>
                                        <div className="locationOfIncident mb-3">
                                            <label htmlFor="locationOfIncident">Location of Incident</label>
                                            <input 
                                                type="text" 
                                                className='form-control-1' 
                                                placeholder='Location of Incident'
                                                name='locationOfIncident'
                                            />
                                        </div>
                                        <div className="Status">
                                            <label htmlFor="status">Status</label>
                                            <select 
                                                id="status"
                                                className='form-control-1'
                                                defaultValue=''
                                                name="status" 
                                            >
                                                <option value='' disabled>--- select status ---</option>
                                                <option>Solve</option>
                                                <option>UnSolved</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-end p-3">
                                    <button 
                                    type="button" 
                                    className="btn text-bg-primary fs-7 fw-semibold"
                                    >
                                        Save Blotter
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* end modal */}

                {/* blotter data modal */}
                <BlotterData />

            </section>
        </>
    )
}

export default BlotterList