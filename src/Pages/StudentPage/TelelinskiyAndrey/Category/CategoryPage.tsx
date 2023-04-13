import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { Category } from './models';
import TelelinskiyPopUp from "../../../../Components/Telelinskiy/TelelinskiyPopUp/TelelinskiyPopUP";

const CategoryPage=()=>{
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
            field:'',
            headerName:'',
            width:500,
            renderCell:(e:any)=>{
                return <div style={{display:'flex',gap:'1em'}}>
                    <Button
                    color={'primary'}
                    variant={'contained'}
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
        { id: 1,name: 'Category 1'},
        { id: 2,name: 'Category 2'},
        { id: 3,name: 'Category 3'},
        { id: 4,name: 'Category 4'},
        { id: 5,name: 'Category 5'},
        { id: 6,name: 'Category 6'},
        { id: 7,name: 'Category 7'},
        { id: 8,name: 'Category 8'},
        { id: 9,name: 'Category 9'},
    ]);
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
                    variant={'contained'}>
                        Добавить категорию
                    </Button>
                </div>
            </div>

            <TelelinskiyPopUp
                open={true}
                onClose={()=>{}}
                title={'создание категории'}
            >
            <div>
                создание категории
            </div>
            </TelelinskiyPopUp>
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