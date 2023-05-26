import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button, dividerClasses } from '@mui/material';
import { Category } from "./models";
import MuseichukDY, { IPopup } from "../../../../Components/Museichuk/MuseichukDY/MuseichukDY";
import { Museichuk_Create_Category_Popup } from './modals/Museichuk_Create_Category_Popup';
import { MuseichukEditCategoryPopup } from "./modals/MuseichukEditCategoryPopup";
import { MuseichukAxios } from '../MuseichukIO';

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
                return <div style={{ display: 'flex', gap: '1em' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setEditedCategory(e.row)}
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

        MuseichukAxios.delete(`https://canstudy.ru/orderapi/category/${id}`)
            .then(() => {
                setCategories(prev =>
                    prev.filter(el => el.id !== id)
                )
            })
    }

    const [categories, setCategories] = useState<Category[]>([])


    useEffect(() => {
        MuseichukAxios.get<{ items: Category[] }>(
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
                        onClick={() => setShowCreateCategory(true)}
                    >
                        Добавить категорию
                    </Button>
                </div>
            </div>

            {showCreateCategory && <Museichuk_Create_Category_Popup
                open={showCreateCategory}
                onClose={() => setShowCreateCategory(false)}
                onCreate={(category) => onCreate(category)}
            />}

            {editedCategory !== null && <MuseichukEditCategoryPopup
                open={editedCategory !== null}
                onClose={() => setEditedCategory(null)}
                category={editedCategory}
                onEdit={(category) => onEdit(category)}
            />}

            <Box sx={{ height: '70vh', width: '100%' }}>
                <DataGrid
                    rows={categories}
                    columns={columns}
                />
            </Box>
        </div>


    );
};

export default CategoryPage;