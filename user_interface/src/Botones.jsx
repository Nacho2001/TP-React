import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

export const BotonBorrar = (idUsuario) => {
    return (
        <Button id={idUsuario} variant="outlined" color="error" startIcon={<DeleteIcon/>} onClick={borrarUsuario()}>
        </Button>
    )
}
export const BotonEditar = (idUsuario) => {
    return (
        <Button id={idUsuario} variant="conatained" startIcon={<EditIcon/>} onClick={editarUsuario()}>
        </Button>
    )
}