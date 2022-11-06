import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Moment from 'react-moment'
import { useReactToPrint } from 'react-to-print'
import { dateSuperscript, convertMonths, numberToCurrency } from '../../../custom/function'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function PrintPermit(){

    /* ************* PERMIT DATA STATE ******************************* */
    const [permitData, setPermitData] = useState({
        owner: '',
        natureOfBusiness: '',
        businessAddress: '',
        startDate: '',
        endDate: '',
        orNumber: 0,
        amount: 0
    })
    /* ************* END STATE ******************************* */



    /* ************* PERMIT DATA ID ******************************* */
    const permitID = useParams()
    /* ************* END STATE ******************************* */


    useEffect(() =>{
        const getPermit = async () =>{
            const getPermitData = await axios.get(`/permit/id?id=${permitID.id}`)
            setPermitData({
                ...permitData,
                owner: getPermitData.data[0].owner,
                natureOfBusiness: getPermitData.data[0].natureOfBusiness,
                businessAddress: getPermitData.data[0].businessAddress,
                startDate: getPermitData.data[0].start_date,
                endDate: getPermitData.data[0].end_date,
                orNumber: getPermitData.data[0].orNumber,
                amount: getPermitData.data[0].amount
            })
        }

        getPermit()
    }, [permitID])

    
    const {
        owner,
        natureOfBusiness,
        businessAddress,
        startDate,
        endDate,
        orNumber,
        amount
    } = permitData

    const printDocument = useRef()
    const handlePrint = useReactToPrint({
        content: () => printDocument.current,
        documentTitle: 'Business Permit'
    })

    const handleClick = () =>{
        if(window.confirm("Are you sure that you want to proceed?")){
            handlePrint()
        }
    }

    return (
        <>
            <div className="container px-5" ref={printDocument}>
                {/* header */}
                <div className="text-center border-bottom pb-4 pt-4 mb-5">
                    <h5 className="fs-6 mb-1">Republic of the Philippines</h5>
                    <h5 className="fs-6 mb-1">Province of Occidental Mindoro</h5>
                    <h5 className="fs-6 mb-1">Municipality of Rizal</h5>
                    <h2 className="fs-2 fw-semibold mb-1">Barangay Sto Nino</h2>
                </div>

                {/* title */}
                <div className="text-center mb-5">
                    <h3 className="text-uppercase fs-5 fw-semibold mb-2">Office of the barangay captain</h3>
                    <h1 className="text-uppercase fs-1 fw-bold">Barangay business permit</h1>
                </div> 

                <div className='mb-5'>
                    <div className="row mb-1">
                        <p className="col-3 fw-semibold">Nature of Business:</p>
                        <p className="col">{natureOfBusiness}</p>
                    </div>
                    <div className="row mb-1">
                        <p className="col-3 fw-semibold">Owner:</p>
                        <p className="col">{owner}</p>
                    </div>
                    <div className="row mb-1">
                        <p className="col-3 fw-semibold">Business Location:</p>
                        <p className="col">{businessAddress}</p>
                    </div>
                    <div className="row mb-1">
                        <p className="col-3 fw-semibold">Amount Paid:</p>
                        <p className="col">{numberToCurrency(amount)}</p>
                    </div>
                </div>

                {/* body */}
                <div className="mb-6">
                    <p className="mb-2 fs-6">
                        <span className="ms-5">This</span> Permit is being issued subject to existing rules and regulation,
                        provided however, that the necessary fees are paid to the treasurer of the Barangay assessed.
                    </p>
                    <p className="mb-2">
                        <span className='ms-5'>This</span> is none-transferable and shall be deemed null and void upon
                        failure by the owner to follow the said rules and regulations set forth by the local government
                        Unit of Rizal
                    </p>
                    <p>
                        <span className="ms-5 fw-bold">Issued</span> this <span>{new Date(startDate).getDate()}<sup>{dateSuperscript(new Date(startDate).getDate())}</sup></span> day of 
                        <span> {convertMonths(new Date(startDate).getMonth())}</span>, {new Date(startDate).getFullYear()} at barangay Sto Nino, Rizal Occidental Mindoro 
                    </p>
                </div>

                {/* barangay captain signature */}
                <div className="d-flex flex-column align-items-end mb-5">
                    <div>
                        <h2 className="fs-6 text-uppercase fw-bold">Shuji Hanma</h2>
                        <div className="border-bottom border-dark"></div>
                        <p className="fs-7">Barangay Captain</p>
                    </div>
                </div>

                {/* footer */}
                <div>
                    <div className="row mb-1">
                        <p className="col-2 fw-semibold">OR Number:</p>
                        <p className="col">{orNumber}</p>
                    </div>
                    <div className="row mb-1">
                        <p className="col-2 fw-semibold">Date Issue:</p>
                        <p className="col"><Moment format='LL'>{startDate}</Moment></p>
                    </div>
                    <div className="row mb-1">
                        <p className="col-2 fw-semibold">Valid Until:</p>
                        <p className="col"><Moment format='LL'>{endDate}</Moment></p>
                    </div>
                    <div className="row">
                        <p className="col-2 fw-semibold">Doc. Stamp:</p>
                        <p className="col">Paid</p>
                    </div>
                </div>
            </div>

            <div className='position-absolute top-0 start-0 ms-4 mt-4'>
                <Link 
                    to='/certificate/manage-permit' 
                    className='btn text-bg-primary fs-7 fw-semibold me-2 shadow'
                >
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
                <button 
                    className='btn text-bg-success fs-7 fw-semibold shadow'
                    onClick={handleClick}
                > 
                    <FontAwesomeIcon icon={faPrint}/>
                </button>
            </div>
        </>
    )
}

export default PrintPermit