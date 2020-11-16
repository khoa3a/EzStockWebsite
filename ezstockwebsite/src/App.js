import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import StockPage from './feature/stock/stock.page';
import HomePage from './feature/home/home.page';
import LoginPage from './feature/login/login.page';

import { PrivateRoute } from './non-feature/components/private.route';
import { PublicRoute } from './non-feature/components/public.route';
import { getToken, removeUserSession, setUserSession } from './non-feature/helpers/session.helper';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:83/api/account/verifyToken?token=${token}`)
      .then(response => {
        if(response.data.isSuccess === true) {
          setUserSession(token, response.data.username);
          setAuthLoading(false);
        }
      }).catch(error => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/stock">Stock Info</NavLink><small>(Access with token only)</small>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <PublicRoute path="/login" component={LoginPage} />
              <PrivateRoute path="/stock" component={StockPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
