import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Box} from "@mui/material";
import Button from "@mui/material/Button";

const Category = () => {
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100,
            editable: true,
        },
        {
            field: 'name',
            headerName: 'Category',
            width: 150,
            editable: true,
        },
        {
            field: '',
            headerName: '',
            width: 200,
            renderCell:(e:any) =>{
                return <div style={{display: 'flex', gap:'lem'}}>
                    <Button color ={'primary'} variant = {'contained'}>
                        EDIT
                    </Button>
                    <Button color ={'primary'} variant = {'contained'}>
                        DELETE
                    </Button>
                </div>
            }
        },

    ];
    const rows = [
        { id: 1, name: 'category 1' },
        { id: 2, name: 'category 2' },
        { id: 3, name: 'category 3' },
        { id: 4, name: 'category 4' },
        { id: 5, name: 'category 5' },
        { id: 6, name: 'category 6' },

    ];

    return (
        <Box sx={{ height: '70vh', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
            />
        </Box>
    );
};

export default Category;