import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import usersReducers from '../reducers/UsersReducer'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(
        combineReducers({
        UserState:usersReducers
    }),
    
    composeEnhancers(applyMiddleware(thunk))
    );
    return store
}