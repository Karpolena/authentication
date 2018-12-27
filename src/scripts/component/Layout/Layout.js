import React, {Component} from "react";
import PropTypes from "prop-types";

import Aux from "../../hoc/Auxx";
import Toolbar from "../navigation/toolbar/Toolbar";
import SideDrawer from "../../component/navigation/sideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
       
    }
    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
} 

export default Layout;

Layout.propTypes={
    children: PropTypes.node
}
