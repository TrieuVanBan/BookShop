import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import cartsReducer from '../features/cart/cartSlice'
import productsReducer from '../features/products/productsSlice'
import categoriesReducer from '../features/categories/categorySlice'
import usersReducer from '../features/users/userSlice'
import commentReducer from '../features/comment/commentSlice'
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    counter: counterReducer,
    allCart: cartsReducer,
    allProduct: productsReducer,
    allCategory: categoriesReducer,
    allUser: usersReducer,
    comment: commentReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["allCart", 'comment',],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
            },
        }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;