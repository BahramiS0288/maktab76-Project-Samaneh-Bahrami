import {Footer} from './components/Footer.component'
import {Header} from './components/Header.component'
import {Outlet} from 'react-router-dom'

function UserLayout() {
    return (
        <>
            <Header />
               <Outlet /> 
            <Footer />   
        </>
    );
}

export {UserLayout};