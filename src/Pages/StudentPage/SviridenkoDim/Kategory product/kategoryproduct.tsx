import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';


const kategoryproduct = () => {

    const columns: GridColDef[] = [

        {
            field: 'id',
            headerName: 'ID',
              width: 90,
        },
        {
            field: 'name',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {

            field: 'id',
            renderCell: (e: any) => {
                return <div>
                    <button
                        color={'primary'}
                        variant={'contained'}>

                        Удалить
                        </button>

                    <button>
                        Редактировать
                        </button>
                </div>
            },
        }
        
    ];

    const rows = [
        { id: 1, name: "Category 1" },
        { id: 2, name: "Category 2" },
        { id: 3, name: "Category 3" },
        { id: 4, name: "Category 4" },
        { id: 5, name: "Category 5" },
        { id: 6, name: "Category 6" },
        { id: 7, name: "Category 7" },

    ];


    return (
        <Box sx = {{height: '70vh', width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
            />
        
            </Box>

    );
};

export default kategoryproduct;
   