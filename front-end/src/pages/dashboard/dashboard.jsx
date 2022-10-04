import Navigation from "../../components/navigation"
import Sidemenu from "../../components/sidemenu"
import TitleCard from "../../components/titlecard"
import ResidentImage from '../../Images/people-fill.svg'
function Dashboard(){
    return (
        <>
            {/* navigation */}
            <Navigation />

            {/* side menu */}
            <Sidemenu />
            <section className="dashboard__container main-padding">
                <TitleCard 
                    title="Dashboard"
                />
                <main className="dashboard__main px-4 py-2 mt-3 row gap-3">

                    <div className="dashboard__resident d-flex px-0 shadow mb-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard__image bg-primary d-flex align-items-center justify-content-center">
                            <div className="w-50 h-50 m-auto">
                                <img className="w-100 h-100" src={ResidentImage} alt="resident" />
                            </div>
                        </div>
                        <div className="dashboard__title p-2">
                            <h4 className="fs-6 fw-semibold text-nowrap">TOTAL RESIDENT</h4>
                            <p>40</p>
                        </div>  
                    </div>

                    <div className="dashboard__resident d-flex px-0 shadow mb-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard__image bg-primary d-flex align-items-center justify-content-center">
                            <div className="w-50 h-50 m-auto">
                                <img className="w-100 h-100" src={ResidentImage} alt="resident" />
                            </div>
                        </div>
                        <div className="dashboard__title p-2">
                            <h4 className="fs-6 fw-semibold text-nowrap">TOTAL RESIDENT</h4>
                            <p>40</p>
                        </div>  
                    </div>

                    <div className="dashboard__resident d-flex px-0 shadow mb-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard__image bg-primary d-flex align-items-center justify-content-center">
                            <div className="w-50 h-50 m-auto">
                                <img className="w-100 h-100" src={ResidentImage} alt="resident" />
                            </div>
                        </div>
                        <div className="dashboard__title p-2">
                            <h4 className="fs-6 fw-semibold text-nowrap">TOTAL RESIDENT</h4>
                            <p>40</p>
                        </div>  
                    </div>

                    <div className="dashboard__resident d-flex px-0 shadow mb-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard__image bg-primary d-flex align-items-center justify-content-center">
                            <div className="w-50 h-50 m-auto">
                                <img className="w-100 h-100" src={ResidentImage} alt="resident" />
                            </div>
                        </div>
                        <div className="dashboard__title p-2">
                            <h4 className="fs-6 fw-semibold text-nowrap">TOTAL RESIDENT</h4>
                            <p>40</p>
                        </div>  
                    </div>
                    
                </main>
            </section>
        </>
    )
}

export default Dashboard