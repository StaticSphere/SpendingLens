import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';

const configureStore = () => {
    const history = createHistory();
    const middleware = routerMiddleware(history);
    const store = createStore(combineReducers({
        router: routerReducer
    }), applyMiddleware(middleware));

    return { store, history };
};

export default configureStore;