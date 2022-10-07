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

function App(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
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
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;