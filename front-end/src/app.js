import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/login/login"

// dashboard
import Dashboard from './pages/dashboard/dashboard';

// officials
import OfficialList from './pages/officials/officials-list'
import OfficialManage from './pages/officials/official-manage';

//resident
import ResidentList from './pages/resident/resident-list';

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
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;