import React from "react";

import NavigationItem from "./navigationItem/NavigationItem";

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>Burger Build</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;