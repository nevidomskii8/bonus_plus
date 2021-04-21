import React, { useEffect } from 'react';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  Records_Page  from './components/Pages/Records_page/Records_page.jsx';
import { TV_Page } from './components/Pages/TV_page/TV_page.jsx';

import { fetchState } from './redux/actions/mainStateActions';
import { useKeyDown } from './helpers/useKeyListener';

export default function Routes() {
  const handleKeyDown = useKeyDown();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchState());
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/tv/:nav">
            <TV_Page />
          </Route>
          <Route exact path="/tv">
            <TV_Page />
          </Route>
          <Route path="/records">
            <Records_Page />
          </Route>
          <Redirect to="/tv" />
        </Switch>
      </div>
    </Router>
  );
}
