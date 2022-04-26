import React from "react";
import { useState } from 'react';

function SendMessage() {

 const [message, setMessage] = useState('');
 const [email, setEmail] = useState('');

 function handleMessageChange(e)
 {
     setMessage(e.target.value)
 }

 function handleEmailChange(e)
 {
     setEmail(e.target.value)
 }

 function send(){
    setMessage('');
    setEmail('');
 }

  return (
    <div>
      <h1> Contact Form </h1>
      <form>
            <ul>
                <li>
            <label> Email : </label>
            <input type="text" value={email} placeholder="Write an email..." onChange={handleEmailChange}></input>
                </li>
                <li>
            <label> Message : </label>
            <input type="text" value={message} placeholder="Type your message..." onChange={handleMessageChange}></input>
                </li>            
            <button onClick={send}> Send </button>
            </ul>
      </form>
    </div>
  );
}

export default SendMessage;