import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import {Kategory} from "./model";
import SviridenkoDDD from "../../../../Components/Sviridenko/SviridenkoDDD/SviridenkoDDD";
import Button from "@mui/material/Button";


const Kategoryproduct = () => {

    const columns: GridColDef[] = [

        {
            field: 'id',
            headerName: 'ID',
              width: 90,
        },
        {
            field: 'name',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {

            field: 'id',
            renderCell: (e: any) => {
                return <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                    >

                      Edit
                    </Button>

                    <Button
                       color={'primary'}
                        variant ={'contained'}
                        onClick={()=>OnDeleteClick(e.row.id)}
                        >
                        Delete
                    </Button>
                </div>
            },
        }
        
    ];

    const OnDeleteClick = (id:number)=>{
        setKategories(prev =>
            prev.filter(el=>el.id != id)
        )
    }

    const [kategories, setKategories]= useState<Kategory[]>([
        { id: 1, name: "Category 1" },
        { id: 2, name: "Category 2" },
        { id: 3, name: "Category 3" },
        { id: 4, name: "Category 4" },
        { id: 5, name: "Category 5" },
        { id: 6, name: "Category 6" },
        { id: 7, name: "Category 7" },

    ])


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
        variant = {'contained'}
                >
                Добавить категорию
        </Button>
        </div>
        </div>

            <SviridenkoDDD
                open={true}
                onClose={()=>{}}
                />

        <Box sx = {{height: '70vh', width: '100%'}}>
            <DataGrid
                rows={kategories}
                columns={columns}
            />
        
            </Box>
        </div>

    );
};

export default Kategoryproduct;
   