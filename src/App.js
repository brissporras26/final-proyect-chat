import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";
import React, { useState } from "react";



function App() {
  let socket;
  const NODE_API_URL = "localhost:3002/";
  const [loggedIn, setLoggedIn] = useState(false);
  const room = "join_room"; // Reemplaza esto con el nombre de la sala adecuado
  const [message, setMessage] = React.useState("");  //declara una variable de estado llamada message utilizando el hook useState el valor inicial es una cadena vacia, alamacenara el mesnaje que se introduce o recibe
  const [messageList, setMessageList] = React.useState([]); // se utiliza para alamcenar una lista de mensajes en algun componente de react, se puede actualizar agregando o eliminando elementos de esta lista utilizando la funcion setMessageList
  const userName = "nombre_de_usuario"; // Reemplaza "nombre_de_usuario" con el valor adecuado

  //For connection scoket.io  
  React.useEffect(() => {    
    socket = io(NODE_API_URL);  
  }, []);

  //for connection in a room  
  const connectToRoom = () => {    // se define como una funcion de flecha () => { ... }  lo que significa que no tom argumentos
  setLoggedIn(true);      // llama a la funcion setLoggeIn  y le pasa el argumento true, es una funcion que probablemente establece el estado de autenticacion del usuario "logueado"
  socket.emit("join_room", room);  //se utiliza un objeto socket, esto parece estar relacionado con la comunicacion en tiempo real, donde el cliente se esta uniendo a una sala especifica

};

  //for sending message  
const sendMessage = async () => {    
  if (message === "") {    } //verifica si el mensaje no esta vacio, si es asi no hace nada
    else {      //si el mensaje no esta vacio crea un objeto messageContent que contiene informacion del mensaje
      let messageContent = {        
        room: room,     //la sala  o el canal en el que se envia el mensaje    
        content: {          
        author: userName,  //el autor o el emitente del mensaje        
        message: message,     // el contenido del mensaje en si   
      },      
    }; 
      
    await socket.emit("send_message", messageContent); //emite el mensaje utilizando un socket en el evento
    setMessageList([...messageList, messageContent.content]);
    setMessage("");    
  }  
};
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
          <button onClick={connectToRoom}> Join Room </button>
        </div>
        <div id="mensajes">
        
        </div>
      </div>
    </div>
  );
}

export default App;
