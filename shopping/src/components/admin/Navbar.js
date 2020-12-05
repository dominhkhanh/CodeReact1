import React from 'react'
import BarsSolid from '../../assets/icons/bars-solid'

import { NavLink } from 'react-router-dom';
import Home from '../client/Home'

export default function Navbar(props) {
    return <div className="navbar">
        <button onClick={props.toggleSidebar}>
            {/* <BarsSolid/>    */}
            <NavLink style={{ fontSize: '25px' }} className="text-danger " exact to="/Home">
                HOME
            </NavLink>
        </button>
    Admin
</div>
}