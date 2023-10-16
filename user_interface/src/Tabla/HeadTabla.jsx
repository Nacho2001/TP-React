import { TableHead, TableRow, TableCell } from "@material-ui/core";

const HeadTabla = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Acciones</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default HeadTabla;