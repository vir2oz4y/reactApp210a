import React, {useState} from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Box, Button, dividerClasses} from '@mui/material';
import {Category} from "./model";
import KryuchkovPopup from "../../../../Components/Kryuchkov/KryuchkovPopup/KryuchkovPopup";

const CategoryPage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'name',
            headerName: 'First name',
        },
        {
            field: '',
            headerName: '',
            width: 200,
            renderCell: (e: any) => {
                return <div style={{display: 'flex', gap: '1em'}}>
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
        setCategories(prev =>
            prev.filter(el => el.id !== id)
        )
    }

    const [categories, setCategories] = useState<Category[]>([
        {id: 1, name: "category 1"},
        {id: 2, name: "category 2"},
        {id: 3, name: "category 3"},
        {id: 4, name: "category 4"},
        {id: 5, name: "category 5"},
        {id: 6, name: "category 6"},
        {id: 7, name: "category 7"},
    ])


    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <h1>Категории</h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                    >
                        Добавить категорию
                    </Button>
                </div>
            </div>

            <KryuchkovPopup
                open={true}
                onClose={()=>{}}
                title={'Создание категории'}
            >
                <div>
                    СОздание категории
                </div>
            </KryuchkovPopup>

            <Box sx={{height: '70vh', width: '100%'}}>
                <DataGrid
                    rows={categories}
                    columns={columns}
                />
            </Box>
        </div>


    );
};

export default CategoryPage;