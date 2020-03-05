import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Sign-Up';
import Admin from './components/Admin';
import Volunteer from './components/Volunteer';
import Student from './components/Student';
import Test from './components/Test';
import PrivateRoute from './components/PrivateRoute';

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
      {/* <Route  path='/admin/:id'>
        <Admin/>
      </Route>
      <Route path='/volunteer/:id'>
        <Volunteer/>
      </Route>
      <Route path='/student/:id'>
        <Student/>
      </Route> */}
      <Switch>
        <PrivateRoute path='/administrator' component={Admin} />
        <PrivateRoute path='/volunteer' component={Volunteer} />
        <PrivateRoute path='/student' component={Student} />
      </Switch>      
    </div>
  );
}

export default App;
