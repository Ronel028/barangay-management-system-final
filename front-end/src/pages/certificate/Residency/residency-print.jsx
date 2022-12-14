import { useRef, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import Moment from 'react-moment'
import usePrintData from '../../../hooks/usePrintData'
import { dateSuperscript, convertMonths } from '../../../custom/function'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function PrintResidency(){

     /* ******************** CUSTOM HOOK FOR GETTING CERTIFICATE ID *****************************/
    const [residencyData, getResidencyData] = usePrintData()
     /* ******************** END FUNCTION *****************************/


    /* ******************** GET ID FROM URL *****************************/
    const residencyID = useParams()
    /* ******************** END FUNCTION *****************************/

    

    useEffect(()=>{
        const getResidency = async() =>{
            await getResidencyData(`/certificate/id?id=${residencyID.id}`)
        }
        getResidency()
    }, [residencyID])



    /* ******************** DESTRUCTURING DATA *****************************/
    const {
        name,
        age, 
        gender,
        dateIssued,
        orNumber
    } = residencyData
    /* ******************** END FUNCTION *****************************/


    const printDocument = useRef()
    const handlePrint = useReactToPrint({
        content: () => printDocument.current,
        documentTitle: 'Residency'
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
                <div className="text-center mb-6">
                    <h3 className="text-uppercase fs-5 fw-semibold mb-2">Office of the barangay captain</h3>
                    <h1 className="text-uppercase fs-1 fw-bold">Certificate of residency</h1>
                </div> 

                {/* body */}
                <div className="mb-6">
                    <h3 className="text-uppercase fs-6 fw-bold mb-3">to whom in may concern</h3>
                    <p className="mb-2 fs-6">
                        <span className="ms-5">This</span> is to certify that <span>{name}</span>, <span>{age}</span> years old, <span>{gender}</span> is a 
                        <span className='fw-bold text-uppercase'> permanent resident</span> of Barangay Sto nino, Rizal Occidental Mindoro.
                    </p>
                    <p className="mb-2">
                        <span className='ms-5'>Based</span> on records of this office, she has been residing at Barangay Sto nino, Rizal 
                        Occidental Mindoro
                    </p>
                    <p>
                        <span className="ms-5 fw-bold">Issued</span> this <span>{new Date(dateIssued).getDate()}<sup>{dateSuperscript(new Date(dateIssued).getDate())}</sup></span> day of <span>{convertMonths(new Date(dateIssued).getMonth())}</span>, {new Date(dateIssued).getFullYear()} at barangay
                        Sto Nino, Rizal Occidental Mindoro upon request of the interested party for whatever legal
                        purpose it may serve.
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
                        <p className="col"><Moment format='LL'>{dateIssued}</Moment></p>
                    </div>
                    <div className="row">
                        <p className="col-2 fw-semibold">Doc. Stamp:</p>
                        <p className="col">Paid</p>
                    </div>
                </div>
            </div>

            <div className='position-absolute top-0 start-0 ms-4 mt-4'>
                <Link 
                    to='/certificate/manage-residency' 
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

export default PrintResidency