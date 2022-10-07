import Navigation from '../../components/navigation'
import Sidemenu from '../../components/sidemenu'
import Search from '../../components/search'
import CertificateTable from './certificate-table'
import ClearanceModal from './certificateModal/clearance-modal'
import IndigencyModal from './certificateModal/indigency-modal'
import ResidencyModal from './certificateModal/residency-modal'
import PermitModal from './certificateModal/permit-modal'

function Certificate(){
    return (
        <>
            {/* navigation */}
            <Navigation 
                title="certificate"
            />

            {/* side menu */}
            <Sidemenu />

            {/* main section*/}
            <section className='certificate__container main-padding'>
                {/* main */}
                <main className="blotter_list__main p-2 mt-3">
                    <div className="d-flex justify-content-end align-items-center mb-4"> 
                        <Search />
                    </div>
                    {/* certificate table */}
                    <CertificateTable />
                </main>

                {/* clearance modal */}
                <ClearanceModal />

                {/* indigenct modal */}
                <IndigencyModal />

                {/* permit modal */}
                <PermitModal />

                {/* residency */}
                <ResidencyModal />

            </section>
        </>
    )
}

export default Certificate