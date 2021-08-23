import {combineReducers, createStore, applyMiddleware} from 'redux';
import productReducer from './reducers/products';
import thunk from "redux-thunk";
import categoryReducer from './reducers/categorys';
import AlertReducer from './reducers/alert';

const allReducer = combineReducers({
    products : productReducer,
    categorys : categoryReducer,
    Alert : AlertReducer
});

const store = createStore(
    allReducer,
    applyMiddleware(thunk)
    )

    export default store;