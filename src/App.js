import React from 'react';
import './App.css';
import Navigation from './Navigation';
import { Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './Sign';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/sign-up'>
        <SignUp/>
      </Route>
      <Route path='/adminstration'>
        <Administration/>
      </Route>
      <Route path='/'>
        <SignUp/>
      </Route>
      <Route path='/sign-up'>
        <SignUp/>
      </Route>
    </div>
  );
}

export default App;
