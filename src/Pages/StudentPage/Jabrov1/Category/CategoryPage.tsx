import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import {useState} from "react";
import JabrovPopUp from "../JabrovPopUp/JabrovPopUp";
import { JabrovCreateCategoryPopUp } from './popups/JabrovCreateCategoryPopUp';
import { Category } from './model';
import {JabrovEditCategoryPopUp} from "./popups/JabrovEditCategoryPopUp";


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
            width:200,
            renderCell: (e: any) => {
                return <div style={{ display: 'flex', gap:'1em'}}>
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
                        onClick={()=>OneDeleteClick(e.row.id)}>

                        Delete
                    </Button>
                </div>
            }
        },
    ];


    const OneDeleteClick = (id:number) =>{
        setCategories(prev =>
            prev.filter(el=>el.id !==id))

    }

    // @ts-ignore
    const [categories, setCategories] = useState<Category[]>([
        { id: 1, name: "category 1" },
        { id: 2, name: "category 2" },
        { id: 3, name: "category 3" },
        { id: 4, name: "category 4" },
        { id: 5, name: "category 5" },
        { id: 6, name: "category 6" },
        { id: 7, name: "category 7" },])

    const [showCreateCatrgory, setShowCreateCategory] = useState(false);
    const [editedCategory, setShowEditCategory] =  useState<Category|null>(null);

    const onCreate = (newCategory: Category) => {
        setCategories(prev => [...prev, newCategory]);

    }

    const onEdit = (category: Category) => {
        setCategories(prev => {
            const editCategory = prev.find(el=>el.id ===category.id)

            if(editCategory){
                editCategory.name = category.name
            }
            return [...prev]
        });

    }



    return (
        <div>
            <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>

            <h1>
                Категории
            </h1>

                <div>
                    <Button color={'primary'}
                            variant={'contained'}
                            onClick={() => setShowCreateCategory(true)}>
                        Добавить категорию
                    </Button>

                </div>

            </div>

            {showCreateCatrgory && <JabrovCreateCategoryPopUp
                open={true}
                onClose={() => setShowCreateCategory(false)}
                onCreate={(category) => onCreate(category)}
            />
            }
            {editedCategory !== null && <JabrovEditCategoryPopUp
                open={editedCategory !==null}
                onClose={()=>setShowEditCategory(null)}
                category={editedCategory}
                onEdit={(category)=>onEdit(category)}

                />}


        <Box sx={{ height: "70vh", width: "100%" }}>
            <DataGrid
                rows={categories}
                columns={columns}
            />
        </Box>
        </div>
    );
};

export default CategoryPage;