import Search from "../../../components/search";
import TitleCard from "../../../components/title";
import PermitTable from "./permit-table";
import PermitUpdateModal from "./permit-update-modal";

function PermitManage(){
    return (
        <>
            <section className="main-padding">

                <TitleCard 
                    title="business permit"
                />

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