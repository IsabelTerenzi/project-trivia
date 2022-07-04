import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/feedback" component={ Feedback } />
        <Route path="/game" component={ Game } />
        <Route path="/settings" component={ Settings } />
        <Route exact path="/" component={ Login } />
        <Route path="/ranking" component={ Ranking } />
      </Switch>
    </div>
  );
}
