import React from "react";
import ReactDOM from "react-dom";

// import the Router component
import history from "./history";
import { Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import initial from "./Data/initial";
import reducer from "./Data/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// import the App component
import App from "./App";

// set up the store and the dev tools. 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initial, composeEnhancers(applyMiddleware(thunk)));



// wrap the app in Router
// pass our articles through to App using props
ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history } >
            <App />
        </Router>
    </Provider>,
    document.getElementById("root"),
);