import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";



const navigationItem = (props) => (    
        <li className="NavigationItem">
            <NavLink 
                to={props.link}
                exact={props.exact}>
                {props.children}
            </NavLink>
        </li>   
);

navigationItem.propTypes = {
    link: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool
}

export default navigationItem;