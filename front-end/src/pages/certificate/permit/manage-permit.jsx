import Navigation from "../../../components/navigation";
import Sidemenu from "../../../components/sidemenu";
import Search from "../../../components/search";
import PermitTable from "./permit-table";
import PermitUpdateModal from "./permit-update-modal";

function PermitManage(){
    return (
        <>
            {/* navigation */}
            <Navigation 
                title="manage Permit"
            />

            {/* side menu */}
            <Sidemenu />

            {/* main */}
            <section className="main-padding">

                {/* main */}
                <main className="p-2 mt-3">
                    <div className="d-flex justify-content-end align-items-center mb-4"> 
                        <Search />
                    </div>
                    {/* manage indigency table */}
                    <PermitTable />
                </main>

                {/* update indigency modal */}
                <PermitUpdateModal />
            </section>
        </>
    )
}

export default PermitManage;