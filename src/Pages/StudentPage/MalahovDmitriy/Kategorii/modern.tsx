import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const CategoryPage = () => {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'id',
            headerName: 'ID',
            width: 90,
        },
        {
            field: 'name',
            headerName: 'name',
            width: 150,
            editable: true,
        },
    ];

    const rows = [
        { id: 1, name: 'category 1' },
        { id: 2, name: 'category 2' },
        { id: 3, name: 'category 3' },
        { id: 4, name: 'category 4' },
        { id: 5, name: 'category 5' },
        { id: 6, name: 'category 6' },
        { id: 7, name: 'category 7' },
    ];
    return(
           <Box sx={{ height: '20vh', width: '100%' }}>
                <DataGrid
                    rows={rows}
                columns={columns}
            />
           </Box>
    )
}
export default CategoryPage;