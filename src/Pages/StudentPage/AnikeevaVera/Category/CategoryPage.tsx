import React, {useEffect, useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import AnikeevaPopUp from "../AnikeevaPopUp/AnikeevaPopUp";
import { AnikeevaCreateCategoryPagePopup } from '../AnikeevaPopUp/Popups/AnikeevaCreateCategoryPopup';
import { AnikeevaEditCategoryPagePopup } from '../AnikeevaPopUp/Popups/AnikeevaEditCategoryPopup';
import { Category } from './model';
import { AnikeevaAxios } from '../AnikeevaVeraPage';


const CategoryPage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'name',
            headerName: 'first name',
            width: 150,
            editable: true,
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
                        onClick = {()=>setShowEditCategory(e.row)}
                    >
                        Edit
                    </Button>

                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => OneDeleteClick(e.row.id)}
                    >
                        Delete
                    </Button>
                </div>
            },
        }

    ];

    const OneDeleteClick = (id: number) => {

        AnikeevaAxios.delete(`https://canstudy.ru/orderapi/category/${id}`)
            .then(() => {
                setCategories(prev => prev.filter(el => el.id !== id)
                )
            })
    }
    const [categories, setCategories] = useState<Category[]>([

    ])

    useEffect(() => {
        AnikeevaAxios.get<{ items: Category[] }>(
            'https://canstudy.ru/orderapi/category/list'
        )
            .then((response) => {
                setCategories(response.data.items);
            })
    }, [])

    const [ShowCreateCategory, setShowCreateCategory] = useState(false);
    const [editedCategory, setShowEditCategory] = useState <Category|null>(null);


    const onCreate = (newCategory: Category) => {
        setCategories(prev => [...prev, newCategory]);
    }
    const onEdit = (category: Category) => {
        setCategories(prev => {
            const editCategory = prev.find(el => el.id === category.id)

            if(editCategory) {
                editCategory.name = category.name;
            }
            return [...prev];
        });
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>
                    Категории
                </h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setShowCreateCategory(true)}
                    >
                        Добавить категорию
                    </Button>
                </div>

            </div>

            {ShowCreateCategory && <AnikeevaCreateCategoryPagePopup
                open={ShowCreateCategory}
                onClose={() => setShowCreateCategory(false)}
                onCreate={(category) => onCreate(category)}

            />}

            {editedCategory !== null && <AnikeevaEditCategoryPagePopup
                open={editedCategory !== null}
                onClose={()=> setShowEditCategory(null)}
                category={editedCategory}
                onEdit={(category)=>onEdit(category)}
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


