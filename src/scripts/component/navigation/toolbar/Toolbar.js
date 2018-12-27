import React from "react";
import PropTypes from "prop-types";

import Logo from "../../logo/Logo";
import NavigationItems from "../navigationItems/NavigationItems";
import DrawerToggle from "../sideDrawer/drawerToggle/DrawerToggle";


const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Logo height="80% "/>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

toolbar.propTypes = {
    drawerToggleClicked: PropTypes.func
}

export default toolbar;