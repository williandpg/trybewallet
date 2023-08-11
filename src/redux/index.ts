// configure aqui sua store
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import reducerCombine from './reducers';

const store = createStore(reducerCombine, composeWithDevTools(applyMiddleware(thunk)));
if ((window as any).Cypress) {
  ((window as any).store) = store;
}

export default store;
