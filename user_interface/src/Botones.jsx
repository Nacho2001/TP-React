import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

export const BotonBorrar = (props) => {
    return (
        <Button variant="outlined" value={props.idUsuario} color="secondary" startIcon={<DeleteIcon/>}>
        </Button>
    )
}
export const BotonEditar = (props) => {
    return (
        <Button variant="contained" value={props.idUsuario} startIcon={<EditIcon/>}>
        </Button>
    )
}