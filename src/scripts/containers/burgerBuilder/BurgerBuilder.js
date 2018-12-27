import React, { Component } from "react";
import { connect } from "react-redux";  
import PropTypes from "prop-types";


import Aux from "../../hoc/Auxx";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/buildControls/BuildControls";
import Modal from "../../component/UI/modal/Modal"
import OrderSummary from "../../component/orderSummary/OrderSummary";
import Spinner from "../../component/UI/Spinner/Spinner";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";



class BurgerBuilder extends Component {
    state = {
        purchasing: false
       
    }
    componentDidMount () {
        console.log(this.props);
        // axios.get("https://react-my-burger-67b16.firebaseio.com/ingredients.json")---in BurgerBuilder/actions
        // .then(response => {
        //     this.setState({ingredients: response.data})
        // })
        // .catch(error => {
        //     this.setState({error: true})
        // })

        this.props.onInitIngredients();
    }

    updatePurchaseState (ingredients) {       
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);
        return sum > 0;
    }
    

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
       
        // const queryParams = [];     -- передача параметров происходит через redux
        // for (let i in this.state.ingredients) {
        //     queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
        // }
        // queryParams.push("price=" + this.state.totalPrice)
        // const queryString = queryParams.join("&");

        // this.props.history.push({
        //     pathname: "/checkout",
        //     search: "?" + queryString
        // }); 
        this.props.onInitPurchase();
        this.props.history.push("/checkout"); 
    }

    render () {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        
        
        let burger = this.props.error ? <p>ingredients can not be loaded!</p> : <Spinner />;
        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        price={this.props.price}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
            )
            orderSummary = <OrderSummary 
                ingredients={this.props.ings}
                price={this.props.price}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
            />;
        }
        // if (this.state.loading) {
        //     orderSummary = <Spinner />;
        // }
        
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> 
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice, 
        error: state.burgerBuilder.error 
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));

BurgerBuilder.propTypes = {
    onIngredientAdded: PropTypes.func,
    onIngredientRemoved: PropTypes.func,
    onInitIngredients: PropTypes.func,
    onInitPurchase: PropTypes.func,
    history: PropTypes.object,
    ings: PropTypes.array,
    price: PropTypes.number,
    error: PropTypes.object
}