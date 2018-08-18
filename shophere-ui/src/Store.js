import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CombinedReducers from "./CombinedReducers";

const store = createStore(
    CombinedReducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
