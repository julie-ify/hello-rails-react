import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initialState = {
  greetings: []
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "GET_MESSAGES_SUCCESS":
      return {
        greetings: action.json.greetings
      }
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  );
  return store;
}
