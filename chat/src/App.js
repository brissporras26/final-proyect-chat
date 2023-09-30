import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";
import React from "react";

function App() {
  let socket;
  const NODE_API_URL = "localhost:3002/";
  //For connection scoket.io  
  React.useEffect(() => {    
    socket = io(NODE_API_URL);  
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hola mundo
        </p>
      </header>
    </div>
  );
}

export default App;
