import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Navigation.css';
import Home from './Home';
import Administrator from './Administrator';
import Volunteer from './Volunteer';
import Student from './Student';
import Login from './LogIn';
import SignUp from './SignUp';


function App() {
  return (
    <div className="App">
    <div className="title"> School in the Cloud</div>
    {/* <Header></Header> */}
    <Router>
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/administrator">Administrator</Link>
        <Link className="link" to="/volunteers">Volunteers</Link>
        <Link className="link" to="/students">Students</Link>
        <Link className="link" to="/logIn">Log In</Link>
        <Link className="link" to="/signUp">Sign up</Link>
      </nav>
        <Route exact path="/" component={Home} />
        <Route path="/administrator" component={Administrator} />
        <Route path="/volunteers" component={Volunteer} />
        <Route path="/students" component={Student} />
        <Route path="/logIn" component={Login} />
        <Route path="/signUp" component={SignUp} />
    </Router>
    
    </div>
  );
}

export default App;
