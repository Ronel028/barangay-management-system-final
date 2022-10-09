import Search from "../../../components/search";
import TitleCard from "../../../components/title";
import ResidencyTable from "./residency-table";
import ResidencyUpdateModal from "./residency-update-modal";

function ResidencyManage(){
    return (
        <>
            <section className="main-padding">

                <TitleCard 
                    title="residency"
                />

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