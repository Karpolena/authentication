import React, {Component} from "react";
import PropTypes from "prop-types";

import Aux from "../../hoc/Auxx";
import Button from "../UI/button/Button"

class OrderSummary extends Component {  
   
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return  (<li key={igKey}>
                        <span style={{textTransform: "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]} 
                    </li>);
        })
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Chechout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
}

OrderSummary.propTypes = {
     ingredients: PropTypes.object,
     purchaseCanceled: PropTypes.func,
     purchaseContinued: PropTypes.func,
     price: PropTypes.number
}

export default OrderSummary;