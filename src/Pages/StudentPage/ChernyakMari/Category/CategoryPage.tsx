import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import ChernyakPopup from "../../../../Components/Chernyak/ChernyakPopup/ChernyakPopup";
import {Category} from "./model"
import {ChernyakCreateCategoryPopup} from "./Popup/ChernyakCreateCategoryPopup";
import {ChernyakEditCategoryPopup} from "./Popup/ChernyakEditCategoryPopup";
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
                        delite
                    </Button>
                </div>
            }
        },
    ];

    const onDeleteClick= (id:number)=>{
    setCategories( prev => prev.filter (el => el.id !== id))
    }

    const [categories, setCategories] = useState <Category[]> ( [

        { id: 1, name: "category 1" },
        { id: 2, name: "category 2" },
        { id: 3, name: "category 3" },
        { id: 4, name: "category 4" },
        { id: 5, name: "category 5" },
        { id: 6, name: "category 6" },
        { id: 7, name: "category 7" },

    ])
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




