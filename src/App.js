import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Grid,
} from '@material-ui/core';

import store from './store';

import DeviceList from './containers/DeviceList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Grid container direction='column'>
            <Grid item xs={4}>
              <DeviceList />
            </Grid>
          </Grid>
        </Provider>
      </div>
    );
  }
}

export default App;
