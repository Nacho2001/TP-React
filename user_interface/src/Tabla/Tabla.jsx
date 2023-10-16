import React from "react";
import { TableContainer, Table } from "@material-ui/core";
import HeadTabla from "./HeadTabla";
import BodyTabla from "./BodyTabla";

const Tabla2 = (props) => {
    return (
        <TableContainer>
            <Table>
                <HeadTabla/>
                <BodyTabla listaUsuarios={props.usuarios}/>
            </Table>
        </TableContainer>
    )
}

export default Tabla2;