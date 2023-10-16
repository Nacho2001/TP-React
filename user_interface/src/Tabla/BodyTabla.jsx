import { TableRow, TableBody, TableCell } from "@material-ui/core";
import { BotonBorrar, BotonEditar } from "../Botones";

const BodyTabla = (props) => {
    let listado = props.listaUsuarios;
    return (
        <TableBody>
            {listado.map(usuario => (
                <TableRow key={usuario.id}>
                    <TableCell>{usuario.id}</TableCell>
                    <TableCell>{usuario.username}</TableCell>
                    <TableCell>{usuario.password}</TableCell>
                    <TableCell>{usuario.email}</TableCell>
                    <TableCell><BotonEditar idUsuario={usuario.id}/><BotonBorrar idUsuario={usuario.id}/></TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

export default BodyTabla;