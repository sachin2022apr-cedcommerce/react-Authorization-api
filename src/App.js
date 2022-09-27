import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import { useState } from 'react';

function App() {
  // store all session token
  var [successToken, setSuccessToken] = useState({});
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home successToken={successToken}
        setSuccessToken={setSuccessToken} />} />
        <Route path="/login" element={<Login setSuccessToken={setSuccessToken}  successToken={successToken}/>} />
      </Routes>
    </div>
  );
}

export default App;


