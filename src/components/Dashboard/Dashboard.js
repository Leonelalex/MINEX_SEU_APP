import React, { useEffect, useState } from 'react';

import './Dashboard.css';
import SearchBar from './SearchBar.js';
import { Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { getCasos } from './SEU_Api.js';

const  headCells = [
    {
        id: 'id',
        numeric: true,
        disablePAdding: true,
        label: 'No.',
    },
    {
        id: 'numeroCaso',
        numeric: false,
        disablePAdding: true,
        label: 'Numero Caso',
    },
    {
        id: 'fecha',
        numeric: false,
        disablePAdding: true,
        label: 'Fecha Registro',
    },
    {
        id: 'estado',
        numeric: false,
        disablePAdding: true,
        label: 'Estado',
    },
    {
        id: 'acciones',
        numeric: false,
        disablePAdding: true,
        label: 'Acciones',
    },
];

const handleChangePage = () =>{

};

const handleChangeRowsPerPage = () => {

};

const Dashboard = () => {
    const [data, setData] = useState();

    useEffect(() => {
        getCasos(1,5, localStorage.getItem('token'))
        .then(casos => {setData(casos)});
    }, []);
    
  return (
    <>
    <h1>Casos TICGS</h1>
    <SearchBar />

    {() => {if(data){
            (<div className='gridContainer'>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox 
                                    color="primary"
                                    inputProps={{
                                        'arial-label': 'Select all',
                                    }}
                                />
                            </TableCell>
                            {headCells.map((headCell) => (
                                <TableCell key={headCell.id} align='right'>
                                    {headCell.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                        <TableBody>
                            {data.map((rowData) => (
                                <TableRow key={rowData.idCaso}>
                                    <TableCell padding="checkbox"> 
                                        <Checkbox
                                            color="primary"
                                        />
                                    </TableCell>
                                    <TableCell align='right'>
                                        {rowData.idCaso}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {rowData.numeroCaso}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {rowData.fechaRegistro}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {rowData.cosigoEstado == 1 ? 'Recibido' : 'Enviado'}
                                    </TableCell>
                                    <TableCell align='right'>
                                        <IconButton direction="row">
                                            <AssignmentOutlinedIcon color="primary" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              rowsPerPage={5}
              component="div"
              count={data.length}
              page={1}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>)
    }}}
    </>
  )
};

export default Dashboard;
