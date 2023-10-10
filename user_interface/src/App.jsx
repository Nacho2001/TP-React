import React, {useState, useEffect} from "react";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Tabla from "./Tabla";
import Button from '@material-ui/core/Button';
import { Box } from "@material-ui/core";


const App = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [usuarios, setUsuarios] = useState({});

    function ObtenerUsuarios(){
        axios.get("http://localhost:5000/usuarios/")
        .then((resp) => {
            setUsuarios(resp.data.usuarios);
            console.log(usuarios);
            /*let divTabla = document.getElementById("divTabla");
            divTabla.appendChild(<Tabla props={usuarios}/>);*/
        })
        .error((error) => { console.error(error)})
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
                <Box>
                    <Box>
                        <TextField id="username" style={{"margin":"5%"}} label="Nombre de usuario"  color="secondary" type='text' focused onChange={(event) => {setUsername(event.target.value)}}/>
                    </Box>
                    <Box>
                        <TextField id="password" style={{"margin":"5%"}} label="Contraseña" type="password" color="secondary" focused onChange={(event) => {setPassword(event.target.value)}}/>
                    </Box>
                    <Box>
                        <TextField id="email" style={{"margin":"5%"}} label="Correo Electrónico" type="email" color="secondary" focused onChange={(event) => {setEmail(event.target.value)}}/>
                    </Box>
                </Box>
                <Button id="botonEnviar" style={{"margin":"5%"}} color="secondary" variant="contained">Enviar datos</Button>
            </form>
            <Tabla props={usuarios}/>
        </div>
    )
}

export default App;