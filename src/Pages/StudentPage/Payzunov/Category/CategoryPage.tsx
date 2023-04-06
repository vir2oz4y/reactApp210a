import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Box} from "@mui/material";
import Button from "@mui/material/Button";
const CategoryPage = () => {

    const columns: GridColDef[] = [
        {   field: 'id',
            headerName: 'ID',
        },

        {
            field: 'name',
            headerName: 'First name',
        },
        {
            field: 'id',
            headerName: '',
            renderCell: (e:any)=> {
                return <div style={{display:'flex', gap:'1em'}}>
                <Button
                    color={'primary'}
                    variant={'contained'}
                >
                    Edit
                </Button>

                <Button
                    color={'primary'}
                    variant={'contained'}
                >
                    Delete
                </Button>
                </div>
            },
        }
];
    const rows = [
        { id: 1, name: "category 1"},
        { id: 2, name: "category 2"},
        { id: 3, name: "category 3"},
        { id: 4, name: "category 4"},
        { id: 5, name: "category 5"},
        { id: 6, name: "category 6"},
        { id: 7, name: "category 7"},
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

export default CategoryPage;