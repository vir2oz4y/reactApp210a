import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import {useEffect, useState} from 'react';
import { Category } from './models';
import {SviridenkoCreateCategory} from "./Modals/SviridenkoCreateCategory";
import {TelelinskiyEditCategoryPopUp} from "./Modals/SviridenkoEditCategory";
import {SviridenkoAxios} from "../SviridenkoDimPage";

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
        SviridenkoAxios.delete(`https://canstudy.ru/orderapi/category/${id}`)
            .then(()=>{
                setCategories(prev=>
                    prev.filter(el=>el.id !== id)
                )
            })
    }

    const [categories,setCategories]=useState<Category[]>([]);

    useEffect(() => {
        SviridenkoAxios.get<{
            items: Category[]
        }>(
            'https://canstudy.ru/orderapi/category/list'
        )
            .then((response)=>{
                setCategories(response.data.items)
            })
    },[])

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

            {showCreateCategory && <SviridenkoCreateCategory
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