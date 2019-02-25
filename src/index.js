import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { history } from './store/history';
import { ConnectedNavigation } from './components/Navigation';
import { ConnectTaskDetail } from './components/TaskDetail';

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <ConnectedNavigation />
      <div>
        <Route exact path="/dashboard" render={() => <App />} />
        <Route
          exact
          path="/task/:id"
          render={({ match }) => <ConnectTaskDetail match={match} />}
        />
      </div>
    </Provider>
  </Router>,
  document.getElementById('root')
);
