import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation'
import Sidemenu from '../components/sidemenu'

function RootLayout(){
    return (
        <>
            <Navigation />
            <Outlet />
            <Sidemenu />
        </>
    )
}

export default RootLayout