import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { Manufacturer } from './models';
import TelelinskiyPopUp from "../../../../Components/Telelinskiy/TelelinskiyPopUp/TelelinskiyPopUP";
import { TelelinskiyCreateManufacturerPopUp } from './Modals/TelelinskiyCreateManufacturerPopUp';
import { TelelinskiyEditManufacturerPopUp } from './Modals/TelelinskiyEditManufacturerPopUp';
const ManufacturerPage=()=>{
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'name',
            headerName: 'Manufacturer',
            width: 150,
            editable: true,
        },
        {
            field: 'city',
            headerName: 'city name',
            width: 150,
            editable: true,
        },
        {
            field: 'country',
            headerName: 'country name',
            width: 150,
            editable: true,
        },
        {
            field:'',
            headerName:'',
            width: 500,
            renderCell:(e:any)=>{
                return <div style={{display:'flex',gap:'1em'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>setEditedManufacturer(e.row)}
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
        setManufacturer(prev=>
            prev.filter(el=>el.id != id))
    }

    const [manufacturer,setManufacturer,setCity,setCountry]=useState<Manufacturer[]>([
        { id: 1,name: 'Manufacturer 1', city: "Nsk", country: "RU"},
    ]);

    const [showCreateManufacturer, setShowCreateManufacturer]=useState(false);
    const [editedManufacturer, setEditedManufacturer] = useState<Manufacturer|null>(null);

    const onCreate =(newManufacturer:Manufacturer)=>{
        setManufacturer(prev=>[...prev,newManufacturer]);

    }

    const onEdit = (manufacturer: Manufacturer)=>{
        setManufacturer(prev=>{
            const editManufacturer = prev.find(el=>el.id === manufacturer.id);

            if (editManufacturer){
                editManufacturer.name = manufacturer.name;
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
                    Производитель
                </h1>
                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>setShowCreateManufacturer(true)}>
                        Добавить производителя
                    </Button>
                </div>
            </div>

            {showCreateManufacturer && <TelelinskiyCreateManufacturerPopUp
                open={true}
                onClose={ ()=> setShowCreateManufacturer(false)}
                onCreate={(manufacturer)=>onCreate(manufacturer)}

            />}

            {editedManufacturer !== null && <TelelinskiyEditManufacturerPopUp
                open={editedManufacturer !==null}
                onClose={()=>setEditedManufacturer(null)}
                manufacturer={editedManufacturer}
                onEdit={(manufacturer)=>onEdit(manufacturer)}
            />}

            <Box sx={{height:'100vh',width:'100%'}}>
                <DataGrid
                    rows={manufacturer}
                    columns={columns}
                />
            </Box>
        </div>

    );
}

export default ManufacturerPage;