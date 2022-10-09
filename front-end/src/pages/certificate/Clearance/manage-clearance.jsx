import Search from "../../../components/search";
import TitleCard from "../../../components/title";
import ClearanceTable from "./clearance-table";
import ClearanceUpdateModal from "./clearance-update-modal";

function ClearanceManage(){
    return (
        <>
            <section className="main-padding">

                <TitleCard 
                    title="Clearance"
                />

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