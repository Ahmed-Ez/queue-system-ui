import React from 'react';
import CardTest from './views/CardTest';
import Login from './views/Login';
import Navbar from './components/Navbar';
import Register from './views/Register';
import Queue from './views/Queue';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import wave from './imgs/wave.png';
const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <img class="wave" src={wave} />
        <Switch>
          <Route path="/queue">
            <Queue />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <CardTest />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
