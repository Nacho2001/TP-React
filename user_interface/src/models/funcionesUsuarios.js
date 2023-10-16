import axios from 'axios';

export const llamadaUsuarios = async () => {
    try {
        const resp = await axios.get("http://localhost:5000/usuarios/")
        let listado = resp.data.usuarios;
        return listado;
    } catch (error) {
        console.error(error)
    }
}

export function borrarUsuario(event){
    event.preventDefault();
    let id = event.target.id;
    axios.delete(`http://localhost:5000/usuarios/${id}`)
    .then(() => {
        alert("Se ha eleminado el usuario con exito")
        llamadaUsuarios();
    })
    .error((error) =>{
        alert("Error al eliminar el usuario");
        console.error(error);
    })
}

export function editarUsuario(event){
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

export function actualizarUsuario(event){
    event.preventDefault();
    let id = event.target.id;
    axios.put(`http://localhost:5000/usuarios/${id}`)
    .then(() => {
        alert("Se ha actualizado el usuario");
        llamadaUsuarios()
    })
    .error((error) => {
        alert("Ocurrió un error al actualizar el usuario");
        console.error(error);
    })
}