import Navigation from "../../../components/navigation";
import Sidemenu from "../../../components/sidemenu";
import Search from "../../../components/search";
import ClearanceTable from "./clearance-table";
import ClearanceUpdateModal from "./clearance-update-modal";

function ClearanceManage(){
    return (
        <>
            {/* navigation */}
            <Navigation 
                title="manage clearance"
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
                    {/* manage clearance table */}
                    <ClearanceTable />
                </main>

                {/* update modal */}
                <ClearanceUpdateModal />
            </section>
        </>
    )
}

export default ClearanceManage;