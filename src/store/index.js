import {createStore, combineReducers} from 'redux';
import initialData from './initialData';
import {counterReducer} from './reducers';

const reducers = combineReducers({
    counter: counterReducer
})

export const store = createStore(
    (state, action) => reducers(state, action),
    initialData
)
