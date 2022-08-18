import { NavLink } from "react-router-dom";


export function Header(){

    return(
        <>
        <NavLink to='/admin'> مدیریت </NavLink>
        <NavLink to='/admin'> سبد خرید  </NavLink>
        </>
    )
}