import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import globalComponent from './global-components-context';

import ErrorHandler from './ErrorHandler'
import Login from './Login'
import Navbar from './Navbar'
import PostAch from './PostAch'
import PostCc from './PostCc'
import CallRisk from './CallRisk'
import CreateJwt from './CreateJwt'
import DeleteJwt from './DeleteJwt'

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [error, setError] = useState("");

    useEffect(() => {
      // Check for error messages
      setInterval(function(){
         let message = ErrorHandler.getErrorMessage()

         setError(prev => message)
      }, 1000);
    }, [])

    return (
      <>
        { error && <div className='overlay'> { error } </div>  }
        { isLoggedIn ? (
          <>
            <aside className="Nav">
              <Router>
                <Navbar setIsLoggedIn={setIsLoggedIn} />
              </Router>
            </aside>
            <div className="Content">
              <h2>Welcome!</h2>
              <div>
                <PostAch />
                <PostCc />
                <CallRisk />
                <CreateJwt />
                <DeleteJwt />
              </div>
            </div>
          </>
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn}/>
        )}
      </>
    )
}

export default App;
