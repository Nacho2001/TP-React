import React, {useState, useEffect} from "react";
import axios from 'axios';
import { TextField } from '@mui/material';
import Tabla from "./Tabla";

const App = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function ObtenerUsuarios(){
        axios.get("http://localhost:5000/usuarios/")
        .then((resp) => {
            let usuarios = resp.data.usuarios
            let app = document.getElementById("App");
            app.appendChild(<Tabla props={usuarios}/>)
        })
    }

    function enviarDatos(event){
        event.preventDefault();
        axios.post("http://localhost:5000/usuarios/", {userName, password, email})
        .then(() => {
            alert("Se han enviado los datos exitosamente!")
            ObtenerUsuarios()
        })
        .error((error) => {
            alert("Error al obtener los datos")
            console.error(error)
        })
    }
    useEffect(() => {
        ObtenerUsuarios();
    }, [])
    return (
        <div id="app">
            Datos de usuario
            <form action="" onSubmit={enviarDatos}>
                <TextField id="username" label="Nombre de usuario" variant="outlined" type='text' onChange={(event) => {setUsername(event.target.value)}}/>
                <TextField id="password" label="Contraseña" variant="outlined" type="password" onChange={(event) => {setPassword(event.target.value)}}/>
                <TextField id="email" label="Correo Electrónico" variant="outlined" type="email" onChange={(event) => {setEmail(event.target.value)}}/>
                <Button id="botonEnviar" variant="outlined">Enviar datos</Button>
            </form>
        </div>
    )
}

export default App;