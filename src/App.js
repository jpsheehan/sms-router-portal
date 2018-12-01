import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Grid,
} from '@material-ui/core';

import store from './store';

import DeviceList from './containers/DeviceList';
import Inbox from './containers/Inbox';
import Outbox from './containers/Outbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Grid container direction='row'>
            <Grid item xs={4}>
              <DeviceList />
            </Grid>
            <Grid item xs={4}>
              <Inbox />
            </Grid>
            <Grid item xs={4}>
              <Outbox />
            </Grid>
          </Grid>
        </Provider>
      </div>
    );
  }
}

export default App;
