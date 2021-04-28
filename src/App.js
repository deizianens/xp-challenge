import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from './Album';
import Home from './Home';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/album/:name' component={Album} />
    </Switch>
  );
}

export default App;
