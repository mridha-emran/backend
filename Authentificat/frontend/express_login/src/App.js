import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Signup from './conponente/Signup';
import Login from './conponente/Login';
import Admin from './conponente/Admin';

function App() {
  return (
    <BrowserRouter> 
    <div className="container">
        <nav> 
            <ul>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/admin">Admin</Link></li>
            
            </ul>
        </nav>

        <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            
        </Switch>
    </div>
</BrowserRouter>
  );
}

export default App;
