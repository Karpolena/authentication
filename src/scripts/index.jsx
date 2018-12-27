import React from "react";
import {render} from "react-dom";
import {HashRouter} from "react-router-dom";
import { Provider } from "react-redux";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";

import App from "./App";
import "../scss/main.scss";
import burgerBuilderReducer from "./store/reducers/burgerBuilder";
import orderReducer from "./store/reducers/order";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)

render(app, document.getElementById("root"));