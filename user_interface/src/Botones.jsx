import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

export const BotonBorrar = (idUsuario) => {
    return (
        <Button id={idUsuario} variant="outlined" color="error" startIcon={<DeleteIcon/>}>
        </Button>
    )
}
export const BotonEditar = (idUsuario) => {
    return (
        <Button id={idUsuario} variant="conatained" startIcon={<EditIcon/>}>
        </Button>
    )
}