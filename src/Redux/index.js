import { combineReducers } from "redux";
import ContactDetailsReducer from "./Reducers/ContactDetailsReducer";
import MessageReducer from "./Reducers/MessageReducer";
const allReducers = combineReducers({
  contactDetails: ContactDetailsReducer,
  messageDetails: MessageReducer
 });

export default allReducers;
