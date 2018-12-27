import  React from "react";
import PropTypes  from "prop-types";
// import burgerLogo from "./images/burger-logo.png"


const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src="./static/burger-logo.png" alt="MyBurger" />
    </div>
);

logo.propTypes = {
    height: PropTypes.string
}

export default logo;