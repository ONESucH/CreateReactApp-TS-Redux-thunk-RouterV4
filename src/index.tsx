import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { store, history } from './store';
import reportWebVitals from './reportWebVitals';
import './index.css';

import App from './App';

render(
 <Provider store={store}>
  <ConnectedRouter history={history}>
   <Switch>
    <Route exact path="/" component={App}/>
    <Route path="*" render={() => (<h1>PAGE NOT FOUND</h1>)}/>
   </Switch>
  </ConnectedRouter>
 </Provider>
 , document.getElementById('root'));

reportWebVitals();
