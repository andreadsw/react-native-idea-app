/*
configureStore.js is created because of issue with
reload the simulator with DevTools for UI inspections.
Message error: <Provider> does not support changing `store` on the fly in react-native + redux
The solution is found on following links:
https://stackoverflow.com/questions/46046909/provider-does-not-support-changing-store-on-the-fly-in-reactnative-redux
https://www.youtube.com/watch?v=t2WXfAqLXJw

*/

import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(reducers,{},applyMiddleware(ReduxThunk));

  if (module.hot) {
    // console.log('in module.hot');
    console.log(reducers);
    module.hot.accept( () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer)
    });
  }
    return store;
}
