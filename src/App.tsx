import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"

import {Pokemon} from "./application/controllers/"
import { reducer } from "./application/reducers"

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    // @ts-ignore
    middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))

function App() {
  return (
    <Provider store={store}>
      <Pokemon />
    </Provider>
  );
}

export default App;
