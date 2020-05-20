import {createStore} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducers from "./reducers";

const persistConfig = {
    key: 'root2',
    storage,
};

const persistedReducer = persistReducer(
    persistConfig,
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default {store, persistor}