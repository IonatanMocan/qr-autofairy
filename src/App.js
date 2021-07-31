import React from 'react';
import Draft from './pages/draft/Draft';
import Homepage from './pages/Homepage';
import Design from './pages/Design';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrintAndShare from './pages/PrintAndShare';
import Final from './pages/Final';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/draft' exact component={Draft} />
        <Route path='/design' exact component={Design} />
        <Route path='/print-and-share' exact component={PrintAndShare} />
        <Route path='/final' exact component={Final} />
      </Switch>
    </Router>
  );
}

export default App;
