import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Box} from "@mui/material";
import Button from "@mui/material/Button";
import {Category} from "./model";
import AnikeevaPopUp from "../AnikeevaPopUp/AnikeevaPopUp";
import { AnikeevaCreateCategoryPagePopup } from '../AnikeevaPopUp/popups/AnikeevaCreateCategoryPagePopup';
import {AnikeevaEditCategoryPagePopup} from "../AnikeevaPopUp/popups/AnikeevaEditCategoryPagePopup";



const CategoryPage = () => {
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100,
            editable: true,
        },
        {
            field: 'name',
            headerName: 'Category',
            width: 150,
            editable: true,
        },
        {
            field: '',
            headerName: '',
            width: 200,
            renderCell:(e:any) =>{
                return <div style={{display: 'flex', gap:'lem'}}>
                    <Button
                        color = {'primary'}
                        variant = {'contained'}
                        onClick = {()=>setShowEditCategory(e.row)}>

                        EDIT
                    </Button>

                    <Button color ={'primary'} variant = {'contained'} onClick={()=>OneDeleteClick(e.row.id)}>
                        DELETE
                    </Button>
                </div>
            }
        },
    ];

    const OneDeleteClick = (id:number)=>{
        SetCategories(prev => prev.filter(el=>el.id!==id))
    }

    const [categories,SetCategories] = useState<Category[]>([
        { id: 1, name: 'category 1' },
        { id: 2, name: 'category 2' },
        { id: 3, name: 'category 3' },
        { id: 4, name: 'category 4' },
        { id: 5, name: 'category 5' },
        { id: 6, name: 'category 6' },])

    const [ShowCreateCategory, setShowCreateCategory] = useState(false);
    const [EditedCategory, setShowEditCategory] = useState<Category|null>(null);


    const onCreate = (newCategory: Category) => {
        SetCategories(prev => [...prev, newCategory]);
    }
    const onEdit = (category: Category) => {
        SetCategories(prev => {
            const EditCategory = prev.find(el => el.id === category.id)

            if (EditCategory) {
                EditCategory.name = category.name;
            }
            return [...prev]
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
                        onClick={() => setShowCreateCategory(true)}>

                        Добавить категорию
                    </Button>
                </div>
            </div>
            <div>
                {ShowCreateCategory && <AnikeevaCreateCategoryPagePopup
                    open={ShowCreateCategory}
                    onClose={() => setShowCreateCategory(false)}
                    onCreate={(category) => onCreate(category)}

                />}

                {EditedCategory !== null && <AnikeevaEditCategoryPagePopup
                    open={EditedCategory !== null}
                    onClose={()=>setShowEditCategory(null)}
                    category = {EditedCategory}
                    onEdit={(category)=>onEdit(category)}
                    />}

                <Box sx={{height: '70vh', width: '100%'}}>
                    <DataGrid
                        rows={categories}
                        columns={columns}
                    />
                </Box>
            </div>
        </div>
    );
};

export default CategoryPage;