import React, { useEffect } from 'react';
import './App.css';
import  {BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from "./StateProvider"
import { auth } from "./firebase"

function App() {
  const [ { user }, dispatch] = useStateValue();
 

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      //the user is logged in 
      dispatch({
        type:"SET USER",
        user: authUser,
      });
    } else {
      //else the user is logged out
      dispatch({
        type:"SET USER",
        user: null,
      });
    }
  });
  
  return ()=> {
    //clean up operation go here
    unsubscribe();
  }
  
}, []);

console.log ("USER IS >>",user);


  return (
    <Router>

      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header />
          <Checkout/>
          </Route>

          <Route path="/login">
          <Login/>
          </Route>

          <Route path="/">
            <Header />
            <Home/>
          </Route>
        </Switch>
   
    </div>

    </Router>
    
  );
}

export default App;
