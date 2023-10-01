import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

export const BotonBorrar = () => {
    return (
        <Button variant="outlined" color="error" startIcon={<DeleteIcon/>}>
        </Button>
    )
}
export const BotonEditar = () => {
    return (
        <Button variant="conatained" startIcon={<EditIcon/>}>
        </Button>
    )
}