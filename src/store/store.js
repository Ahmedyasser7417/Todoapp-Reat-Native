import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import storageMiddleware from './middleware';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storageMiddleware),
});

export default store;
