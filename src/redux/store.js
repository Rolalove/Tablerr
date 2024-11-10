import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dashboardReducer from "./reducers/dashboardReducer";
import authReducer from "./reducers/authSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
