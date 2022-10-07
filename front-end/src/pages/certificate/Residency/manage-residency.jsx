import Navigation from "../../../components/navigation";
import Sidemenu from "../../../components/sidemenu";
import Search from "../../../components/search";
import ResidencyTable from "./residency-table";
import ResidencyUpdateModal from "./residency-update-modal";

function ResidencyManage(){
    return (
        <>
            {/* navigation */}
            <Navigation 
                title="manage Residency"
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
                    <ResidencyTable />
                </main>

                {/* update indigency modal */}
                <ResidencyUpdateModal />
            </section>
        </>
    )
}

export default ResidencyManage;