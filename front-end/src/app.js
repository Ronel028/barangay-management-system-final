import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/login/login"

// dashboard
import Dashboard from './pages/dashboard/dashboard';

function App(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;