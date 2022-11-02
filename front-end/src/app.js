import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/login/login"

// dashboard
import Dashboard from './pages/dashboard/dashboard';

// officials
import OfficialList from './pages/officials/officials-list'
import OfficialManage from './pages/officials/official-manage';

//resident
import ResidentList from './pages/resident/resident-list';
import ResidentManage from './pages/resident/resident-manage';

// blotter
import BlotterList from './pages/blotter/blotter-list';
import BlotterManage from './pages/blotter/blotter-manage';

// certificate
import Certificate from './pages/certificate/certificate';
import ClearanceManage from './pages/certificate/Clearance/manage-clearance';
import IndigencyManage from './pages/certificate/Indigency/manage-indigency';
import PermitManage from './pages/certificate/permit/manage-permit';
import ResidencyManage from './pages/certificate/Residency/manage-residency';

// print certificate
import PrintClearance from './pages/certificate/Clearance/clearance-print';
import IndigencyPrint from './pages/certificate/Indigency/indigency-print';
import ResidentPrint from './pages/certificate/Residency/residency-print';
import PermitPrint from './pages/certificate/permit/permit-print';

import RootLayout from './Layout/RootLayout';

function App(){

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={ <Login /> } />

                    <Route element={<RootLayout />}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/officials-list" element={<OfficialList />} />
                        <Route path='/officials-manage' element={<OfficialManage />}/>
                        <Route path='/resident-list' element={<ResidentList />}/>
                        <Route path='/resident-manage' element={<ResidentManage />}/>
                        <Route path='/blotter-list' element={<BlotterList />}/>
                        <Route path='/manage-blotter' element={<BlotterManage />}/>
                        <Route path='/certificate' element={<Certificate />}/>
                        <Route path='/certificate/manage-clearance' element={<ClearanceManage />} />
                        <Route path='/certificate/manage-indigency' element={<IndigencyManage />} />
                        <Route path='/certificate/manage-permit' element={<PermitManage />} />
                        <Route path='/certificate/manage-residency' element={<ResidencyManage />} />
                    </Route>

                    <Route path='/certificate/clearance/print/:id' element={<PrintClearance />} /> {/* route for printing clearance */}
                    <Route path='/certificate/indigency/print/:id' element={<IndigencyPrint />} /> {/* route for printing indigency */}
                    <Route path='/certificate/permit/print/:id' element={<PermitPrint />} /> {/* route for printing business permit */}
                    <Route path='/certificate/residency/print/:id' element={<ResidentPrint />} /> {/* route for printing residency */}
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;