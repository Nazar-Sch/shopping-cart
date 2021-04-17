import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store, Reducer } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './redux/reducer'

export const store: Store<TState, TAction> & {
  dispatch: DispatchType
}  = createStore(reducer as Reducer<TState, TAction>, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
