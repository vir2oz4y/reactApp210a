import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { Category } from "./model";
import AleshinPopup from '../../../../Components/Aleshin/AleshinPopup/AleshinPopup';

const CategoryPage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'name',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: '',
            headerName: '',
            width: 200,
            renderCell: (e: any) => {
                return <div style={{ display: 'flex', gap:'1em' } }>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                    >
                        Edit
                    </Button>

                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onDeleteClick(e.row.id)}
                    >
                        Delete
                    </Button>
                </div>
            },
        }
    ];


    const onDeleteClick = (id: number) => {
        setCategories(  prev =>
            prev.filter(el => el.id !== id)
        )
    }

    const [categories, setCategories] = useState<Category[]>([
            { id: 1, name: 'category 1' },
            { id: 2, name: 'category 2' },
            { id: 3, name: 'category 3' },
            { id: 4, name: 'category 4' },
            { id: 5, name: 'category 5' },
            { id: 6, name: 'category 6' },
            { id: 7, name: 'category 7' },
        ])

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',

                } }>
                <div>
                    <h1> Категории </h1>

                    <div>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                        >
                            Add category
                        </Button>
                    </div>
                </div>

                <AleshinPopup
                    open={true}
                    onClose={() => {}}
                    title={'Create category' }
                >
                    <div>
                        Create category
                    </div>
                </AleshinPopup>

                <Box sx={{ height: '70vh', width: '100%' }}>
                    <DataGrid
                        rows={categories}
                        columns={columns}
                    />
                </Box>
             </div>
        </div>
    )
}

export default CategoryPage;