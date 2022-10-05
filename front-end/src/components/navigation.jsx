import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faCaretDown } from '@fortawesome/free-solid-svg-icons'
function Navigation(props){
    return (
        <nav className="navigation__container navbar navbar-expand-lg bg-white py-3 position-fixed top-0 start-0 end-0 shadow-sm">
            <div className="container-fluid">
                <h5 className='navigation__title text-dark text-capitalize'>{props.title}</h5>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="me-5 text-dark d-flex align-items-center">
                        <FontAwesomeIcon className='me-2' icon={faCalendarDays}/>
                        <p className='mb-0 fw-bold'>October 3, 2022</p>
                    </div>
                    <button className="border-0 bg-transparent text-dark fw-semibold fs-9">
                        <FontAwesomeIcon className='me-1' icon={faCaretDown}/>
                        Log out
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation