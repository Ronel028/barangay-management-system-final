import { Outlet, Navigate } from 'react-router-dom'
import Navigation from '../components/navigation'
import Sidemenu from '../components/sidemenu'

function RootLayout(){

    let isLogin = localStorage.getItem('loginStatus')

    return (
        <> 
        
        {
            isLogin ? <>
                <Navigation />
                    <Outlet />
                <Sidemenu />
            </>
            : <Navigate to='/login' />
        }
        </>
    )
}

export default RootLayout