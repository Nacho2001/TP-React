import React, {useState} from 'react';
import { TextField } from '@mui/material';

const Formulario = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <div>
                Datos de usuario
                <div>
                    <TextField id="username" label="Nombre de usuario" variant="outlined" type='text' onChange={(event) => {setUsername(event.target.value)}}/>
                    <TextField id="password" label="Contraseña" variant="outlined" type="password" onChange={(event) => {setPassword(event.target.value)}}/>
                    <TextField id="email" label="Correo Electrónico" variant="outlined" type="email" onChange={(event) => {setEmail(event.target.value)}}/>
                </div>
            </div>
        </>
    )
}

export default Formulario;