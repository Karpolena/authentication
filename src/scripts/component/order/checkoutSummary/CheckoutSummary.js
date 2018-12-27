import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/button/Button";
import PropTypes from "prop-types";

const checkoutSummary  = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastest well!</h1>
            <div style={{width: "100%", margin: "auto"}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );   
} 

export default checkoutSummary;

checkoutSummary.propTypes = {
    ingredients: PropTypes.array,
    checkoutCancelled: PropTypes.func,
    checkoutContinued: PropTypes.func
}