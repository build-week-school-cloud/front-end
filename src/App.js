import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Sign-Up';
import Admin from './components/Admin';
import Volunteer from './components/Volunteer';
import Student from './components/Student';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route exact path='/'>
        <Login/>
      </Route>
      <Route path='/sign-up'>
        <SignUp/>
      </Route>
      <Route  path='/admin/:id'>
        <Admin/>
      </Route>
      <Route path='/volunteer/:id'>
        <Volunteer/>
      </Route>
      <Route path='/student/:id'>
        <Student/>
      </Route>
      <Test/>
    </div>
  );
}

export default App;
