import './App.css';
import Login from './components/Login/Login';
import Details from './components/Details/Details';
import {
  BrowserRouter as Router,
  Routes  ,
  Route,
} from "react-router-dom";
import { useState } from 'react';
function App() {
  let [user, setUser] = useState('')
  return (
    <Router>  {/* A <Routes > looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes >
          {user && <Route path="/details" element={<Details user={user} />}/>}
          <Route path="/details" element={<Details user={user||'Guest'} />}/>
          <Route path="/" element={<Login setuser={setUser}/>}/>
            
        </Routes  >
    </Router>
  );
}

export default App;
