import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import SesPopUp from './sesNV/Ses';
import { Category } from './model';
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

    const onDeleteClick = (id: number) => {
        setCategories(prev =>
            prev.filter(el => el.id !== id))
    }
    const [CategoryPage, setCategories] = useState<Category[]>([
        { id: 1, name: "category 1" },
        { id: 2, name: "category 2" },
        { id: 3, name: "category 3" },
        { id: 4, name: "category 4" },
        { id: 5, name: "category 5" },
        { id: 6, name: "category 6" },
        { id: 7, name: "category 7" },

    ])
    return (
        <div>
            <div>
                <h1>Категории</h1>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}>
                        Добавить категорию
                    </Button>
                </div>
            </div>;
            <SesPopUp
                open={true}
                onClose={() => { }}
                title={'создание категории'}>
                <div>
                    Создание категории
                </div>
            </SesPopUp>

            <Box sx={{ height: '65vh', width: '100%' }}>
                <DataGrid
                    rows={CategoryPage}
                    columns={columns}
                />
            </Box>
        </div>
    )
}
export default KategoryPage;