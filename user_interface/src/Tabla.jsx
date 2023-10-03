import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BotonBorrar } from './Botones';
import { BotonEditar } from "./Botones";

function Tabla(){
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
                <TableBody id="">
                    {/*usuarios.map((usuario) => (
                        <TableRow
                            key={usuario.id}
                        >
                            <TableCell>{usuario.id}</TableCell>
                            <TableCell>{usuario.username}</TableCell>
                            <TableCell>{usuario.password}</TableCell>
                            <TableCell>{usuario.email}</TableCell>
                            <Tablecell><BotonEditar props={usuario.id}/><BotonBorrar props={usuario.id}/></Tablecell>
                        </TableRow>
                    ))*/}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Tabla;