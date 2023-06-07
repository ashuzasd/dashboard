import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ShowList from './ShowList';
import ShowSummary from './ShowSummary';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ShowList} />
        <Route path="/summary/:id" component={ShowSummary} />
      </Switch>
    </Router>
  );
};

export default App;

