import { createStore, combineReducers, applyMiddleware } from "redux";

//For async action creators
import ReduxThunk from "redux-thunk";

//For using redux dev tools
import { composeWithDevTools } from "redux-devtools-extension";

//import reducers
import collegesReducer from "./colleges/reducer";
import studentsReducer from "./students/reducer";
import loadingStateReducer from './loadingState/reducer';

export const rootReducer = combineReducers({
    colleges : collegesReducer,
    students: studentsReducer,
    //loadingState manages the loading state of all async https requests throughout the app
    loadingState: loadingStateReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
