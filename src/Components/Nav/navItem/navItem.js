import React from 'react';
import { NavLink } from 'react-router-dom';
import './navItem.css'
const NavigationItem = ( props ) => (
    <li >
        <NavLink className = "navItem"
            to={props.link}
            exact={props.exact}
            activeClassName = "activeClass">{props.children}</NavLink>
    </li>
);

export default NavigationItem;