import React from 'react';
import Start from './components/start/start.component';
import { Route, Switch } from 'react-router';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="app-container py-5">
        <Switch>
          <Route path='/' component={Start} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
