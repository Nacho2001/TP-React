import { TableHead, TableRow, TableCell } from "@material-ui/core";
import { withStyles, makeStyles } from '@material-ui/core/styles';

const CeldaTabla = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.common.white
    }
}))(TableCell)
const HeadTabla = () => {
    return (
        <TableHead>
            <TableRow>
                <CeldaTabla>ID</CeldaTabla>
                <CeldaTabla>Username</CeldaTabla>
                <CeldaTabla>Password</CeldaTabla>
                <CeldaTabla>Email</CeldaTabla>
                <CeldaTabla>Acciones</CeldaTabla>
            </TableRow>
        </TableHead>
    )
}

export default HeadTabla;