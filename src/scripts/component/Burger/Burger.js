import React from "react";
import PropTypes from "prop-types";


import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
    // console.log(props);
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
       
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className="Burger">
        <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
        <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};


burger.propTypes = {
    ingredients: PropTypes.object
} 

export default burger;