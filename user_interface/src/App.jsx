import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box } from "@material-ui/core";
import Tabla2 from "./Tabla/Tabla";
import axios from "axios";
import { llamadaUsuarios } from "./models/funcionesUsuarios";

const App = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [usuarios, setUsuarios] = useState([]);
   
    function enviarDatos(event){
        event.preventDefault();
        axios.post("http://localhost:5000/usuarios/", {userName, password, email})
        .then(() => {
            alert("Se han enviado los datos exitosamente!");
            llamadaUsuarios();
        })
        .error((error) => {
            alert("Error al enviar los datos");
            console.error(error);
        })
    }
    
    useEffect(() => {
        const obtenerUsuarios = async () => {
            let users = await llamadaUsuarios()
            users.map(usuario => (
                usuarios.push(usuario)
            ))
        }
        obtenerUsuarios();
    }, [])
    return (
        <div id="app" width="50%" style={{"margin":"5%"}}>
            <h3>Datos de usuario</h3>
            <div>   
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
            </div>
            <div>
                <Tabla2 usuarios={usuarios}/>
            </div>
        </div>
    )
}

export default App;