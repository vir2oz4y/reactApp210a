import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
const KategoryPage = () => {
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'Name',
            headerName: 'First name',

        },
        {
            field: ' ',
            headerName: ' ',
            width: 200,
            renderCell: (e: any) => {
                return <div style={{ display: 'flex', gap: '1em' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                            >
                        edit
                        </Button>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                    >
                        delite
                        </Button>
                </div>
            }
        },
    ];

    const rows = [
        { id: 1, Name: "category 1" },
        { id: 2, Name: "category 2" },
        { id: 3, Name: "category 3" },
        { id: 4, Name: "category 4" },
        { id: 5, Name: "category 5" },
        { id: 6, Name: "category 6" },
        { id: 7, Name: "category 7" },

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
export default KategoryPage;