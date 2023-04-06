import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';

const Category=()=>{
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'Name',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field:'',
            headerName:'',
            width:500,
            renderCell:(e:any)=>{
                return <div style={{display:'flex',gap:'1em'}}>
                    <Button
                    color={'primary'}
                    variant={'contained'}
                    >
                        Редактировать
                    </Button>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                    >
                        Удалить
                    </Button>
                </div>
            },
        }
    ];

    const rows = [
        { id: 1,Name: 'Category 1'},
        { id: 2,Name: 'Category 2'},
        { id: 3,Name: 'Category 3'},
        { id: 4,Name: 'Category 4'},
        { id: 5,Name: 'Category 5'},
        { id: 6,Name: 'Category 6'},
        { id: 7,Name: 'Category 7'},
        { id: 8,Name: 'Category 8'},
        { id: 9,Name: 'Category 9'},
    ];
    return (
        <Box sx={{height:'100vh',width:'100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
            />
        </Box>
    );
}

export default Category;