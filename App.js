import React, { Component } from 'react';
import {
  Alert,
  StatusBar,
  View,
} from 'react-native';

import { createStore } from 'redux'
import rootReducer from './src/redux/reducers'
import devToolsEnhancer from 'remote-redux-devtools';
import { Provider } from 'react-redux'
const store = createStore(rootReducer, devToolsEnhancer({ realtime: true }));

import WorldContainer from './src/containers/World/WorldContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <StatusBar hidden />
          <WorldContainer />
        </View>
      </Provider>
    );
  }
}
