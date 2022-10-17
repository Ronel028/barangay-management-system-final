import useAxios from "../../hooks/useAxios"
import TitleCard from "../../components/title"
import ResidentImage from '../../Images/people-fill.svg'
import BlotterIcon from '../../Images/blotter-icon.svg'
import CertificateIcon from '../../Images/open-folder.svg'
import OfficialIcon from '../../Images/buildings.svg'
function Dashboard(){

    const [official] = useAxios('/officials') // get all official data
    const [resident] = useAxios('/resident') // get all resident data

    return (
        <>
            <section className="dashboard__container main-padding">

                <TitleCard 
                    title="dashboard"
                />
                <main className="dashboard__main p-2 mt-3">
                    <div className="dashboard__card d-flex px-0 shadow mb-3 rounded">
                        <div className="dashboard__image bg-primary rounded-start d-flex align-items-center justify-content-center">
                            <div className="w-50 h-50 m-auto">
                                <img className="w-100 h-100" src={ResidentImage} alt="resident" />
                            </div>
                        </div>
                        <div className="dashboard__title p-2">
                            <h4 className="fs-7 fw-semibold text-nowrap">TOTAL RESIDENT</h4>
                            <p className="fs-4 text-secondary">{resident.length}</p>
                        </div>  
                    </div>

                    <div className="dashboard__card d-flex px-0 shadow mb-3 rounded">
                        <div className="dashboard__image bg-primary rounded-start d-flex align-items-center justify-content-center">
                            <div className="w-50 h-50 m-auto">
                                <img className="w-100 h-100" src={BlotterIcon} alt="blotter" />
                            </div>
                        </div>
                        <div className="dashboard__title p-2">
                            <h4 className="fs-7 fw-semibold text-nowrap">TOTAL BLOTTER</h4>
                            <p className="fs-4 text-secondary">10</p>
                        </div>  
                    </div>

                    <div className="dashboard__card d-flex px-0 shadow mb-3 rounded">
                        <div className="dashboard__image bg-primary rounded-start d-flex align-items-center justify-content-center">
                            <div className="w-50 h-50 m-auto">
                                <img className="w-100 h-100" src={CertificateIcon} alt="certificate" />
                            </div>
                        </div>
                        <div className="dashboard__title p-2">
                            <h4 className="fs-7 fw-semibold text-nowrap">TOTAL CERTIFICATE</h4>
                            <p className="fs-4 text-secondary">20</p>
                        </div>  
                    </div>

                    <div className="dashboard__card d-flex px-0 shadow mb-3 rounded">
                        <div className="dashboard__image bg-primary rounded-start d-flex align-items-center justify-content-center">
                            <div className="w-50 h-50 m-auto">
                                <img className="w-100 h-100" src={OfficialIcon} alt="officials" />
                            </div>
                        </div>
                        <div className="dashboard__title p-2">
                            <h4 className="fs-7 fw-semibold text-nowrap">TOTAL OFFICIAL</h4>
                            <p className="fs-4 text-secondary">{official.length}</p>
                        </div>  
                    </div>
                    
                </main>
            </section>
        </>
    )
}

export default Dashboard