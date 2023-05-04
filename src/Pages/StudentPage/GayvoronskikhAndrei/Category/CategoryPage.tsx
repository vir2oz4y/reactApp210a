import React, {useEffect, useState} from 'react';
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import {Box, Button} from '@mui/material';
import {Category} from "./model";
import GayvoronskikhPopUp from "../../../../Components/Gayvoronskikh/GayvoronskikhPopUp/GayvoronskikhPopUp";
import { GayvoronskikhCreateCategoryPopUp } from './Modals/GayvoronskikhCreateCategoryPopUp';
import { GayvoronskikhAxios } from '../GayvoronskikhAndrei';

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
                return <div style={{display: 'flex', gap: '1em'}}>
                    <Button color={'primary'} variant={'contained'}>Edit</Button>
                    <Button color={'primary'} variant={'contained'}
                            onClick={() => onDeleteClick(e.row.id)}>Delete</Button>
                </div>
            },
        }
    ];
    const onDeleteClick = (id: number) => {

        GayvoronskikhAxios.delete(`https://canstudy.ru/orderapi/category/${id}`)
            .then(() => {
                setCategories(prev =>
                    prev.filter(el => el.id !== id)
                )
            })
    }

    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        GayvoronskikhAxios.get<{ items: Category[] }>(
            'https://canstudy.ru/orderapi/category/list'
        )
            .then((response) => {
                setCategories(response.data.items);
            })
    }, [])

    const [showCreateCategory, setShowCreateCategory] = useState(false);

    const [editedCategory, setEditedCategory] = useState<Category | null>(null);


    const onCreate = (newCategory: Category) => {
        setCategories(prev => [...prev, newCategory]);
    }

    const onEdit = (category: Category) => {
        setCategories(prev => {
            const editCategory = prev.find(el => el.id === category.id);

            if (editCategory) {
                editCategory.name = category.name;
            }

            return [...prev];
        });
    }

    return (
        <div>
            <div style={{display:'flex',
            justifyContent:'space-between',
            alignItems:'center'}}>
                <h1>Категории</h1>
                <Button color={'primary'} variant={'contained'} onClick={() => setShowCreateCategory(true) }>Добавить Категорию</Button>
            </div>

            {showCreateCategory && <GayvoronskikhCreateCategoryPopUp
                open={showCreateCategory}
                onClose={() => setShowCreateCategory(false)}
                onCreate={(category) => onCreate(category)}

            />}

            
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