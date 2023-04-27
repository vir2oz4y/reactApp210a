import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { Category } from './models';
import TelelinskiyPopUp from "../../../../Components/Telelinskiy/TelelinskiyPopUp/TelelinskiyPopUP";
import {TelelinskiyCreateCategoryPopUp} from "./Modals/TelelinskiyCreateCategoryPopUp";
import {TelelinskiyEditCategoryPopUp} from "./Modals/TelelinskiyEditCategoryPopUp";

const CategoryPage=()=>{
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
            field:'',
            headerName:'',
            width:500,
            renderCell:(e:any)=>{
                return <div style={{display:'flex',gap:'1em'}}>
                    <Button
                    color={'primary'}
                    variant={'contained'}
                    onClick={()=>setEditedCategory(e.row)}
                    >
                        Редактировать
                    </Button>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onDeleteClick(e.row.id)}
                    >
                        Удалить
                    </Button>
                </div>
            },
        }
    ];

    const onDeleteClick = (id:number)=>{
    setCategories(prev=>
    prev.filter(el=>el.id != id))
    }

    const [categories,setCategories]=useState<Category[]>([
        { id: 1,name: 'ooooooooooooooooooooooooooooooooooooo 1'},
        { id: 2,name: 'Categoru 4'},
        { id: 3,name: 'Category 3'},
        { id: 4,name: 'Category 4'},
        { id: 5,name: 'Category 5'},
        { id: 6,name: 'Category 6'},
        { id: 7,name: 'Category 7'},
        { id: 8,name: 'Category 8'},
        { id: 9,name: 'Category 9'},
    ]);

    const [showCreateCategory, setShowCreateCategory]=useState(false);
    const [editedCategory, setEditedCategory] = useState<Category|null>(null);

    const onCreate =(newCategory:Category)=>{
        setCategories(prev=>[...prev,newCategory]);
    }

    const onEdit = (category: Category)=>{
        setCategories(prev=>{
            const editCategory = prev.find(el=>el.id === category.id);

            if (editCategory){
                editCategory.name = category.name;
            }

            return [...prev];
        });
    }

    return (
        <div>
            <div style={{display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
            }}
            >
                <h1>
                    Категории
                </h1>
                <div>
                    <Button
                    color={'primary'}
                    variant={'contained'}
                    onClick={()=>setShowCreateCategory(true)}>
                        Добавить категорию
                    </Button>
                </div>
            </div>

            {showCreateCategory && <TelelinskiyCreateCategoryPopUp
                open={true}
                onClose={ ()=> setShowCreateCategory(false)}
                onCreate={(category)=>onCreate(category)}

                />}

            {editedCategory !== null && <TelelinskiyEditCategoryPopUp
                open={editedCategory !==null}
                onClose={()=>setEditedCategory(null)}
                category={editedCategory}
                onEdit={(category)=>onEdit(category)}
            />}

            <Box sx={{height:'100vh',width:'100%'}}>
                <DataGrid
                    rows={categories}
                    columns={columns}
                />
            </Box>
        </div>

    );
}

export default CategoryPage;