import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import AddRequest from './components/AddRequest.js'
import Searcher from './components/Searcher.js'
import Home from './components/Home.js'
import GroupSearcher from './components/GroupSearcher.js'
import AddGroup from './components/AddGroup.js'
import SendMessage from './components/SendMessage';

function App() { 

  return (     
      <Router>
        <nav>
          <Link to ="/"> Home </Link>
          <Link to="Searcher"> Searcher </Link>
          <Link to="GroupSearcher"> Group Searcher </Link>
          <Link to="AddRequest"> Add Request </Link>
          <Link to="AddGroup"> Add Group </Link>
        </nav>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="AddRequest" element = {<AddRequest />}/>
          <Route path="AddGroup" element = {<AddGroup />}/>
          <Route path="Searcher" element = {<Searcher />}/>
          <Route path="GroupSearcher" element = {<GroupSearcher />}/>
          <Route path="SendMessage" element = {<SendMessage />}/>                         
        </Routes>      
      </Router>
     
    );
}

export default App;