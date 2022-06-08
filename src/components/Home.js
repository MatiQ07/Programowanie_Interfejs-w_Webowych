/*
import React,{useContext, useState} from "react";
import { UserContext } from "./UserContext";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function Home() {

  const {user, setUser} = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

function handleChangeEmail(e){
    setEmail(e.target.value);
}
function handleChangePassword(e){
    setPassword(e.target.value);
}

const checkData  = (email,password) =>{
  const users = JSON.parse(localStorage.getItem("users"));
  var isUser = false
  for (let size = 0; size < users.length; size++)
  {
    if(users[size][0].email === email)
    {      
      var isEmail = true      
    }
    if(isEmail)
    {
      if(users[size][0].password === password)
      {        
        isUser = true
      }
    }
    isEmail = false    
  }
  return isUser
}

const login = async () => {
      setEmail('');
      setPassword('');
      var logIn = (checkData(email,password)); 
      if(!logIn)
      {        
        return null;
      }
  return{
      username: email,
      email: email,
      password:password     
  };
};

  return (
    <div>
      <h1>Welcome to the home page</h1>         
      
      {user ? <div></div> : <input type="text" className = "search" value={email} onChange={handleChangeEmail} placeholder="email"></input>}
      {user ? <div></div> : <input type="password" className = "search" value={password} onChange={handleChangePassword} placeholder="password"></input>}
      
      {user ? <button className="LoginButton" onClick={ () => {setUser(null);} }>logout</button> :       
      <button className="LoginButton" onClick={async () => {const user = await login(); setUser(user)}}
      
      > login </button>}
      {user ? <div></div> :
      <Link to="/Register"><button className="LoginButton"> Register </button></Link>}     
    </div>
  );
}

export default Home;
*/
import { logout} from "../firebase/users.js";
import React from "react";

function Home() {
  return (
    <div>
      <h1>Welcome to the home page</h1>
      <button className = "LoginButton " onClick={logout}>logout</button>      
    </div>
  );
}


export default Home;