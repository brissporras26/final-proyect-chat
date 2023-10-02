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
      <div className="container">
        <br/>
        <div className="jumbotron">
          <h1 className="display-4">Enviar mensaje</h1>
          <br/>
          <input id ="nombre" className="form-control" placeholder="Nombre"/>
          <br/>
          <textarea id ="mensaje" className="form-control" placeholder="Su mensaje aquí">
          </textarea>
          <br/>
          <button id="enviar" className="btn btn-success">Enviar</button>
        </div>
        <div id="mensajes">
        
        </div>
      </div>
    </div>
  );
}

export default App;
