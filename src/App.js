import React from 'react';
import './App.css';
import Navigation from './Navigation';
import { Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './Sign';
import Admin from './Admin';
import Volunteer from './Volunteer';
import Student from './Student';



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
      <Route path='/:id/admin'>
        <Admin/>
      </Route>
      <Route path='/:id/volunteer'>
        <Volunteer/>
      </Route>
      <Route path='/:id/student'>
        <Student/>
      </Route>
    </div>
  );
}

export default App;
