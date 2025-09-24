import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import RezeptNeu from './components/RezeptNeu';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/neues-rezept' component={RezeptNeu} />
      </Switch>
    </Router>
  );
}

export default App;