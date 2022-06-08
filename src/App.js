import './App.css';
import React, { useState, useMemo} from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import AddRequest from './components/AddRequest.js'
import Searcher from './components/Searcher.js'
import Home from './components/Home.js'
import GroupSearcher from './components/GroupSearcher.js'
import AddGroup from './components/AddGroup.js'
import SendMessage from './components/SendMessage';
import Profile from './components/Profile'
import Register from './components/Register'
import { UserContext } from './components/UserContext';
import Login from './components/Login';

import {auth} from "./firebase/init";
import {useAuthState} from "react-firebase-hooks/auth"
import { getAuth, updateProfile } from "firebase/auth";


function App() {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({user, setUser}), [user,setUser]);
 
  const [userr] = useAuthState(auth)

  return (     
      <Router>
        <nav>
          <Link to ="/"> Home </Link>
          <Link to="Searcher"> Searcher </Link>
          <Link to="GroupSearcher"> Group Searcher </Link>
          <Link to="AddRequest"> Add Request </Link>
          <Link to="AddGroup"> Add Group </Link>
          <Link to="Login"> Login </Link>
          {userr ? <div className="LoggedIn">{userr.displayName} is logged in</div> : <div></div>}
        </nav>
        <UserContext.Provider value={value}>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="Login" element = {<Login />}/>
          <Route path="AddRequest" element = {<AddRequest />}/>
          <Route path="AddGroup" element = {<AddGroup />}/>
          <Route path="Searcher" element = {<Searcher />}/>
          <Route path="GroupSearcher" element = {<GroupSearcher />}/>
          <Route path="SendMessage" element = {<SendMessage />}/>
          <Route path="Profile" element = {<Profile />}/>
          <Route path="Register" element = {<Register />}/>                     
        </Routes> 
        </UserContext.Provider>     
      </Router>
     
    );
}

export default App;