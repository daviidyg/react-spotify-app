import { createStore, applyMiddleware, Dispatch, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loggerMiddleware = logger as Middleware<object, unknown, Dispatch<any>>;

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, loggerMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
