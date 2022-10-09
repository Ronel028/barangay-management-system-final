import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns, faUserTie, faPeopleRoof, faScaleBalanced, faCertificate, faBarsProgress, faCircle } from '@fortawesome/free-solid-svg-icons'
import BrgyLogo from '../Images/Barangay-logo.png'

function Sidemenu(){

    const [openMenu, setOpenMenu] = useState({
        official: false,
        resident: false,
        blotter: false,
        manage__certificate: false
    })

    //function to change the state by clicking the click event in official, resident and blotter
    const changeMenuState = (official, resident, blotter, certificate) =>{
        setOpenMenu({
            ...openMenu,
            official: official,
            resident: resident,
            blotter: blotter,
            manage__certificate: certificate
        })
    }

    // click event to make the submenu open
    const handleClick = (event) =>{
        const { name } = event.target
        switch(name){
            case 'official':
                changeMenuState(true, false, false, false)
                break
            case 'resident':
                changeMenuState(false, true, false, false)
                break
            case 'blotter': 
                changeMenuState(false, false, true, false)
                break
            case 'manage__certificate':
                changeMenuState(false, false, false, true)
                break
            default: 
                changeMenuState(false, false, false, false)
        }
    }

    return (
        <aside className="sidemenu__container py-4 bg-dark h-auto min-vh-100 position-fixed top-0">
            <div className="sidemenu__content px-2 d-flex flex-column gap-3">
                {/* barangay image container */}
                <div className="logo__container w-75 h-70 rounded-circle border border-white border-opacity-25 p-1 align-self-center mb-4">
                    <img className='img-fluid rounded-circle' src={BrgyLogo} alt="barangay-logo"/>
                </div>

                {/* dashboard part */}
                <ul className='sidemenu__dashboard list-unstyled d-flex flex-column gap-3'>
                    <p className='text-white fw-bolder'>MAIN</p>
                    <li>
                        <Link className='sidemenu__link text-decoration-none text-white fs-7 fw-normal' to='/'>
                            <FontAwesomeIcon icon={faTableColumns}/>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <button 
                            className='bg-transparent border-0 text-white fw-normal fs-7'
                            name='official'
                            onClick={handleClick}
                        >
                            <FontAwesomeIcon icon={faUserTie}/>
                            Officials
                        </button>
                        <ul 
                            className='sidemenu_subcontent list-unstyled ms-4 mt-2 flex-column gap-2'
                            style={{display: openMenu.official ? 'flex' : 'none'}}
                        >
                            <li className='text-white'>
                                <FontAwesomeIcon className='fs-8' icon={faCircle}/>
                                <Link className='text-decoration-none text-white fw-normal' to='/officials-list'>Officials List</Link>
                            </li>
                            <li className='text-white'>
                                <FontAwesomeIcon className='fs-8' icon={faCircle}/>
                                <Link className='text-decoration-none text-white fw-normal' to='/officials-manage'>Manage Official</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button 
                            className='bg-transparent border-0 text-white fw-normal fs-7'
                            name='resident'
                            onClick={handleClick}
                        >
                            <FontAwesomeIcon icon={faPeopleRoof}/>
                            Resident
                        </button>
                        <ul 
                            className='sidemenu_subcontent list-unstyled ms-4 mt-2 flex-column gap-2'
                            style={{display: openMenu.resident ? 'flex' : 'none'}}
                        >
                            <li className='text-white'>
                                <FontAwesomeIcon className='fs-8' icon={faCircle}/>
                                <Link className='text-decoration-none text-white fw-normal' to='/resident-list'>Resident List</Link>
                            </li>
                            <li className='text-white'>
                                <FontAwesomeIcon className='fs-8' icon={faCircle}/>
                                <Link className='text-decoration-none text-white fw-normal' to='/resident-manage'>Manage Resident</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button 
                            className='bg-transparent border-0 text-white fw-normal fs-7 '
                            name='blotter'
                            onClick={handleClick}
                        >
                            <FontAwesomeIcon icon={faScaleBalanced}/>
                            Blotter
                        </button>
                        <ul 
                            className='sidemenu_subcontent list-unstyled ms-4 mt-2 flex-column gap-2'
                            style={{display: openMenu.blotter ? 'flex' : 'none'}}
                        >
                            <li className='text-white'>
                                <FontAwesomeIcon className='fs-8' icon={faCircle}/>
                                <Link className='text-decoration-none text-white fw-normal' to='/blotter-list'>Blotter List</Link>
                            </li>
                            <li className='text-white'>
                                <FontAwesomeIcon className='fs-8' icon={faCircle}/>
                                <Link className='text-decoration-none text-white fw-normal' to='/manage-blotter'>Manage Blotter</Link>
                            </li>
                        </ul>
                    </li>
                </ul>

                {/* certificate */}
                <ul className='sidemenu__certificate list-unstyled d-flex flex-column gap-3'>
                    <p className='text-white fw-bolder'>CERTIFICATE</p>
                    <li>
                        <Link className='sidemenu__cert text-decoration-none text-white fw-normal fs-7' to='/certificate'>
                            <FontAwesomeIcon icon={faCertificate}/>
                            Certificate
                        </Link>
                    </li>
                    <li>
                        <button 
                            className='bg-transparent border-0 text-white fw-normal fs-7 '
                            name='manage__certificate'
                            onClick={handleClick}
                        >
                            <FontAwesomeIcon icon={faBarsProgress}/>
                            Manage Certificate
                        </button>

                        <ul 
                            className='sidemenu_subcontent list-unstyled ms-4 mt-2 flex-column gap-2'
                            style={{display: openMenu.manage__certificate ? 'flex' : 'none'}}
                        >
                            <li className='text-white'>
                                <FontAwesomeIcon className='fs-8' icon={faCircle}/>
                                <Link className='text-decoration-none text-white fw-normal' to='/certificate/manage-clearance'>Clearance</Link>
                            </li>
                            <li className='text-white'>
                                <FontAwesomeIcon className='fs-8' icon={faCircle}/>
                                <Link className='text-decoration-none text-white fw-normal' to='/certificate/manage-indigency'>Indigency</Link>
                            </li>
                            <li className='text-white'>
                                <FontAwesomeIcon className='fs-8' icon={faCircle}/>
                                <Link className='text-decoration-none text-white fw-normal' to='/certificate/manage-permit'>Business Permit</Link>
                            </li>
                            <li className='text-white'>
                                <FontAwesomeIcon className='fs-8' icon={faCircle}/>
                                <Link className='text-decoration-none text-white fw-normal' to='/certificate/manage-residency'>Residency</Link>
                            </li>
                        </ul>

                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidemenu;