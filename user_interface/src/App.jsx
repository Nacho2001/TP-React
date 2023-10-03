import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Stack, TextField } from '@mui/material';
import Tabla from "./Tabla";
import { Button } from '@mui/material';


const App = () => {
    let listaUsuarios = [];
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function ObtenerUsuarios(){
        axios.get("http://localhost:5000/usuarios/")
        .then((resp) => {
            let usuarios = resp.data.usuarios
            listaUsuarios = usuarios;
        })
        //.error((error) => { console.error(error)})
    }

    function enviarDatos(event){
        event.preventDefault();
        axios.post("http://localhost:5000/usuarios/", {userName, password, email})
        .then(() => {
            alert("Se han enviado los datos exitosamente!");
            ObtenerUsuarios();
        })
        .error((error) => {
            alert("Error al enviar los datos");
            console.error(error);
        })
    }
    function borrarUsuario(event){
        event.preventDefault();
        let id = event.target.id;
        axios.delete(`http://localhost:5000/usuarios/${id}`)
        .then(() => {
            alert("Se ha eleminado el usuario con exito")
            ObtenerUsuarios();
        })
        .error((error) =>{
            alert("Error al eliminar el usuario");
            console.error(error);
        })
    }
    function editarUsuario(event){
        event.preventDefault();
        let id = event.target.id
        let username = document.getElementById("username");
        let password = document.getElementById("password");
        let email = document.getElementById("email");
        let boton = document.getElementById("botonEnviar");
        axios.get(`http://localhost:5000/usuarios/${id}`)
        .then((resp) => {
            let usuario = resp.data.usuario;
            username.value = usuario.username;
            password.value = usuario.password;
            email.value = usuario.email;
            boton.value = "Actualizar";
            boton.setAttribute("onClick","actualizarUsuario(event)");
        })
        .error((error) => { console.error(error) })
    }
    function actualizarUsuario(event){
        event.preventDefault();
        let id = event.target.id;
        axios.put(`http://localhost:5000/usuarios/${id}`)
        .then(() => {
            alert("Se ha actualizado el usuario");
            ObtenerUsuarios()
        })
        .error((error) => {
            alert("Ocurrió un error al actualizar el usuario");
            console.error(error);
        })
    }
    useEffect(() => {
        ObtenerUsuarios();
    }, [])
    return (
        <div id="app" style={{"margin":"5%"}}>
            <h3>Datos de usuario</h3>
            <form action="" onSubmit={enviarDatos}>
                <Stack spacing={5}>
                    <TextField id="username" label="Nombre de usuario" variant="outlined" color="warning" type='text' focused onChange={(event) => {setUsername(event.target.value)}}/>
                    <TextField id="password" label="Contraseña" variant="outlined" type="password" color="warning" focused onChange={(event) => {setPassword(event.target.value)}}/>
                    <TextField id="email" label="Correo Electrónico" variant="outlined" type="email" color="warning" focused onChange={(event) => {setEmail(event.target.value)}}/>
                    <Button id="botonEnviar" variant="outlined">Enviar datos</Button>
                </Stack>
            </form>
            <Tabla/>
        </div>
    )
}

export default App;