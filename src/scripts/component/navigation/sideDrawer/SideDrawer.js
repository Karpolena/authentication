import React from "react";
import PropTypes from "prop-types";

import Logo from "../../logo/Logo";
import NavigationItems from "../navigationItems/NavigationItems";
import Backdrop from "../../UI/backdrop/Backdrop";
import Aux from "../../../hoc/Auxx";

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(" ")}>
                <Logo height="11%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

sideDrawer.propTypes = {
    height: PropTypes.string,
    open: PropTypes.bool,
    closed: PropTypes.func
}

export default sideDrawer;