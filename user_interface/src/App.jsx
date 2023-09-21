import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function envioDatos(event){
    event.preventDefault();
    axios.post("http://localhost:5000/usuarios/", { username, password, email})
    .then((resp) => {
      alert("Datos enviados a la base");
      obtenerDatos()
    })
    .catch((error) => {
      alert("Error al cargar los datos");
      console.error(error);
    })
  }
  
  function obtenerDatos(){
    axios.get("http://localhost:5000/usuarios/")
    .then((resp) => { 
      let usuarios = resp.data.usuarios
      let tabla = document.getElementById("tabla")
      usuarios.map(user => {
        let userFila = document.createElement("tr")
        let userName = document.createElement("td");
        let clave = document.createElement("td");
        let mail = document.createElement("td");
        userName.innerText = user.username;
        clave.innerText = user.password;
        mail.innerText = user.email;
        userFila.appendChild(userName)
        userFila.appendChild(clave)
        userFila.appendChild(mail)
        tabla.appendChild(userFila);
        /*item.innerText = `Nombre: ${user.username}; Contraseña: ${user.password}; Email: ${user.email};`
        lista.appendChild(item)*/
      })
    })
    .catch((error) => { console.error(error)})
  }
  /*function ListaUsuarios(users){
    console.log(users);
    /*const listado = props.usuarios.map(userSingle => {
      <li>Nombre: {userSingle.username}; Contraseña: {userSingle.password}; Email: {userSingle.email}</li>
    })
    return listado
  }*/
  function editarDatos(event){
    event.preventDefault();
    axios.get(`http://localhost:5000/usuarios/`)
  }
  useEffect(() => {
    obtenerDatos()
  }, [])
  return (
    <>
      <div className='divGen'>
        <form action="" onSubmit={envioDatos}>
          <div className='divCampo'>
            <label htmlFor="">Nombre de Usuario</label><br />
            <input type="text" name="username" id="username" value={username} onChange={(event) => {setUsername(event.target.value);}}/>
          </div>
          <div className='divCampo'>
            <label htmlFor="">Contraseña</label><br />
            <input type="text" name="password" id="password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
          </div>
          <div className='divCampo'>
            <label htmlFor="">Email</label><br />
            <input type="email" name="email" id="email" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
          </div>
          <button className='button'>Enviar</button>
        </form>
      </div>
      <h3>Lista usuarios</h3>
      <ul id="listado">
        </ul>
      <table id="tabla">
        <tr>
          <th>Usuario</th>
          <th>Contraseña</th>
          <th>Email</th>
        </tr>
      </table>
      <div className='divGen'>

      </div>
    </>
  )
}

export default App
