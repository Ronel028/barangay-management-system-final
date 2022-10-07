import Navigation from "../../../components/navigation";
import Sidemenu from "../../../components/sidemenu";
import Search from "../../../components/search";
import IndigencyTable from "./indigency-table";
import IndigencyUpdateModal from "./indigency-update-modal";

function IndigencyManage(){
    return (
        <>
            {/* navigation */}
            <Navigation 
                title="manage indigency"
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
                    <IndigencyTable />
                </main>

                {/* update indigency modal */}
                <IndigencyUpdateModal />
            </section>
        </>
    )
}

export default IndigencyManage;