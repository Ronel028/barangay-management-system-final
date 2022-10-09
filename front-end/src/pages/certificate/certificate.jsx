import Search from '../../components/search'
import TitleCard from '../../components/title'
import CertificateTable from './certificate-table'
import ClearanceModal from './certificateModal/clearance-modal'
import IndigencyModal from './certificateModal/indigency-modal'
import ResidencyModal from './certificateModal/residency-modal'
import PermitModal from './certificateModal/permit-modal'

function Certificate(){
    return (
        <>
            <section className='certificate__container main-padding'>

                <TitleCard 
                    title="certificate"
                />

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