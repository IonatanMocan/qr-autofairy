import React from 'react';
import Draft from './pages/Draft';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/draft' exact component={Draft} />
      </Switch>
    </Router>
  );
}

export default App;
