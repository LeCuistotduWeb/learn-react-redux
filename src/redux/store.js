import {combineReducers, createStore, applyMiddleware} from "redux";
import reducerPhone from "./phone/reducerPhone";
import reducerTv from "./tv/reducerTv";
import reducerComments from "./comments/reducerComments";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  phone: reducerPhone,
  television: reducerTv,
  comments: reducerComments
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
