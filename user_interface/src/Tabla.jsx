import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { BotonBorrar } from './Botones';
import { BotonEditar } from "./Botones";

function Tabla(props){
    return (
        <TableContainer component={Paper} style={{"margin-top":"5%"}}>
            <Table sx={{ minWidth: 700}}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.usuarios.map((usuario) => (
                        <TableRow
                            key={usuario.id}
                        >
                            <TableCell>{usuario.id}</TableCell>
                            <TableCell>{usuario.username}</TableCell>
                            <TableCell>{usuario.password}</TableCell>
                            <TableCell>{usuario.email}</TableCell>
                            <Tablecell><BotonEditar props={usuario.id}/><BotonBorrar props={usuario.id}/></Tablecell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Tabla;