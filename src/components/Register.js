import React,{ useState} from "react";
import {registerWithEmailAndPassword } from "../firebase/users";

function Register() {
  

let [list] = useState(() => {
    const localData = localStorage.getItem("users");
    return localData ? JSON.parse(localData) : []
});

const [login, setLogin] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [formErrors, setFormErrors] = useState({});

function handleChangeLogin(e){
    setLogin(e.target.value);   
}
function handleChangeEmail(e){
    setEmail(e.target.value);
}
function handleChangePassword(e){
    setPassword(e.target.value);
}


function register(){
        
    setLogin('');
    setEmail('');
    setPassword('');

    let newUser = [{login : login, email : email, password : password}]
    setFormErrors(checkData(newUser));        
   
    if(Object.keys(formErrors).length === 0){
        list.push(newUser);
        localStorage.setItem("users", JSON.stringify(list));        
    }
    
}

const checkData = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values[0]["login"]) {
      errors.login = "Username is required!";
    }
    if (!values[0]["email"]) {
      errors.email = "Email is required!";
    } else if (!regex.test(values[0]["email"])) {
      errors.email = "This is not a valid email format!";
    }
    if (!values[0]["password"]) {
      errors.password = "Password is required";
    } else if (values[0]["password"].length < 4) {
        errors.password = "Password must be longer than 4 characters";
      } else if (values[0]["password"].length > 10) {
        errors.password = "Password cannot exceed 10 characters";
      }    
    return errors;
}

  return (
    <div>
      <h1>Register on our page</h1>
      <p>{formErrors.login}</p>     
      <input type="text" className = "search" value={login} onChange={handleChangeLogin} placeholder="login"></input>
      <p>{formErrors.email}</p>
      <input type="text" className = "search" value={email} onChange={handleChangeEmail} placeholder="email"></input>
      <p>{formErrors.password}</p>
      <input type="password" className = "search" value={password} onChange={handleChangePassword} placeholder="password"></input>
      <button onClick={(e)=>{registerWithEmailAndPassword(login,email,password)}} className="LoginButton"> Register </button>      
    </div>
  );
}

export default Register;