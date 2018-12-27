import React from "react";
import PropTypes from "prop-types";

const drawerToggle = (props) => (
    <div onClick={props.clicked} className="DrawerToggle">
        <div></div>
        <div></div>
        <div></div>
    </div>
);

drawerToggle.propTypes = {
   clicked: PropTypes.func
}

export default drawerToggle;