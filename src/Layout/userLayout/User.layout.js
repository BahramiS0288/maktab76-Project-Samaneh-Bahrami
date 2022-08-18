import {Footer} from './components/Footer.component'
import {Header} from './components/Header.component'
import {Outlet} from 'react-router-dom'

function UserLayout() {
    return (
        <div className='container'>
            <Header />
               <Outlet /> 
            <Footer />   
        </div>
    );
}

export {UserLayout};