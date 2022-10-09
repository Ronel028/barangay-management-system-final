import Search from "../../../components/search";
import TitleCard from "../../../components/title";
import IndigencyTable from "./indigency-table";
import IndigencyUpdateModal from "./indigency-update-modal";

function IndigencyManage(){
    return (
        <>
            <section className="main-padding">

                <TitleCard 
                    title="indigency"
                />

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