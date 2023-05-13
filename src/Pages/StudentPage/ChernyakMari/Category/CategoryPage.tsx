import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import {Category} from "./model"
import {ChernyakCreateCategoryPopup} from "./Popup/ChernyakCreateCategoryPopup";
import {ChernyakEditCategoryPopup} from "./Popup/ChernyakEditCategoryPopup";
import {chernyakAxios} from "../ChernyakM";
const CategoryPage = () => {
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
            field: ' ',
            headerName: ' ',
            width: 200,
            renderCell: (e: any) => {
                return <div style={{ display: 'flex', gap: '1em' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>setEditedCategory(e.row)}
                    >
                        Edit
                    </Button>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onDeleteClick (e.row.id)}

                    >
                        Delete
                    </Button>
                </div>
            }
        },
    ];

    const onDeleteClick = (id: number) => {

        chernyakAxios.delete(`https://canstudy.ru/orderapi/category/${id}`)
            .then(() => {
                setCategories(prev =>
                    prev.filter(el => el.id !== id)
                )
            })
    }

    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        chernyakAxios.get<{ items: Category[] }>(
            'https://canstudy.ru/orderapi/category/list'
        )
            .then((response) => {
                setCategories(response.data.items);
            })
    },[])

    const[showCreateCategory, setShowCreateCategory] = useState(false);

    const[editedCategory, setEditedCategory] = useState<Category|null>(null)
    const onCreate = (newCategory: Category) =>{
        setCategories(prev => [...prev,newCategory]);
    }

    const onEdit = (category: Category) => {
        setCategories(prev => {
            const editCategory = prev.find(el=>el.id === category.id);

            if (editCategory){
                editCategory.name = category.name
            }
            return [...prev]
        })
    }
    return (
        <div>
            <div style={{
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
                        onClick={()=>setShowCreateCategory(true)}
                    >
                        Добавить категорию
                    </Button>
                </div>
            </div>
            {showCreateCategory && <ChernyakCreateCategoryPopup
                open={showCreateCategory}
                onClose={() => setShowCreateCategory(false)}
            onCreate={(category) => onCreate(category)}/>}

            {editedCategory !== null && <ChernyakEditCategoryPopup
                open={editedCategory !== null}
                onClose={() => setEditedCategory(null)}
                category = {editedCategory}
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




