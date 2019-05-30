import React from 'react';
import { createAppContainer } from 'react-navigation';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import configureStore from './src/components/configureStore';
import config from './config';
import AppNavigator from './src/navigation';

const store = configureStore();
// Adding AppContainer to have a navigation
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp(config);
  }

  render() {
    //const store = configureStore(reducers, {}, applyMiddleware(ReduxThunk)); -> Moved to configureStore.js
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
