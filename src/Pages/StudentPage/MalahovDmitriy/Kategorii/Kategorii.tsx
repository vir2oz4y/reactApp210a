import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import MalahovDY, {IPopup} from "../../../../Components/Malahov/MalahovDY/MalahovDY";
import {Category} from "./models";
import { Malahov_creat_categori_prefab } from './modals/Malahov_creat_categori_prefab';
import { Malahov_Edit_categori_prefab } from './modals/Malahov_Edit_categori_prefab';
import { MalahovAxios} from '../MalahovDmitriy';

type Props = IPopup & {
    category: Category,
    onEdit: (newCategory: Category) => void;
}
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
            editable: true,
        },
        {
            field: ' ',
            headerName: ' ',    
            width:200,
            renderCell: (e: any) => {
                return <div style={{display:'flex', gap: '1em'}}>
                    <Button color={'primary'}
                        variant={'contained'}
                        onClick={()=>seteditedCategoru(e.row)}>
                        Edit
                        </Button>
                    <Button color={'primary'}
                        variant={'contained'}
                        onClick={()=>onDeleteClick(e.row.id)}>
                        Delete
                        </Button>
                </div>
            }
        },
    ];

    const  onDeleteClick = (id:number)=>{
        MalahovAxios.delete(`https://canstudy.ru/orderapi/category/${id}`)
            .then(() => {
                setCategories(prev =>
                    prev.filter(el => el.id !== id)
                )
            })
    }
    //@ts
    const [CategoryPage, setCategories] = useState<Category[]>([])

    useEffect(() => {
        MalahovAxios.get<{ items: Category[] }>(
            'https://canstudy.ru/orderapi/category/list'
        )
            .then((response) => {
                setCategories(response.data.items);
            })
    },[])

    const [showCreateCaregory, setShowCreateCaregory] = useState(false);
    const [editedCategoru, seteditedCategoru] = useState<Category|null>(null);

    const onCreate = (newCategory: Category)=>{
        setCategories(prev => [...prev, newCategory]);
    }
    const onEdit = (Category: Category)=>{
        setCategories(prev => {
            const  editCategory=prev.find(el=>el.id == Category.id);
            if (editCategory){
                editCategory.name= Category.name;
            }
            return[...prev];
        });
    }

    return (
        <div>
            <div>
                <h1>Категории</h1>
                <div
                style={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center'
                }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setShowCreateCaregory(true)}>
                        Добавить категорию
                    </Button>
                </div>
            </div>

            {showCreateCaregory && <Malahov_creat_categori_prefab
                open={showCreateCaregory}
                onClose={() => setShowCreateCaregory(false)}
                onCreate={(category) => onCreate(category)}
            />}

            {editedCategoru!==null&&<Malahov_Edit_categori_prefab
                open={editedCategoru!==null}
                onClose={()=>seteditedCategoru(null)}
                category={editedCategoru}
                onEdit={(category)=>onEdit(category)}
                />
            }

        <Box sx={{ height: '65vh', width: '100%' }}>
            <DataGrid
                rows={CategoryPage}
                columns={columns}                                
            />
        </Box>
    </div>
    )
}
export default CategoryPage;