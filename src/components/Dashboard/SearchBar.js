import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, {useState} from 'react'


const SearchBar = () => {

    const [IdEstado, setIdEstado] = useState(1);

    const handleChange = (event) => {
        setIdEstado(event.target.value);
    };
    
  return (
    <>
        <form className='searchContainer'>
            <div className='inputSearch'>
               <TextField id="NoCaso" label="Numero Caso" size='small'/>
            </div>
            <div className='inputSearch'>
                <TextField id="IdConsulado" label="Codigo Consulado" size='small'/>
            </div>
            <div className='inputSearch'>
                <Select id='idEstado' value={IdEstado} label="Estado"
                        size='small' onChange={handleChange}> 
                    <MenuItem value={1}>Recibido</MenuItem>
                    <MenuItem value={2}>Enviado</MenuItem>
                </Select>
            </div>
            <div className='inputSearch'>
                <TextField id='fechaIni' label="Fecha Inicio" size='small'/>
                <TextField id='fechaFin' label="Fecha Fin" size='small'/>
            </div>
            <div className='inputSearch'>
                <Button variant="contained">Buscar</Button>
            </div>
        </form>
    </>
  )
};

export default SearchBar;
