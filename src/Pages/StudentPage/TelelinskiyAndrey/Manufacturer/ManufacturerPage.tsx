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
        },
        {
            field: 'name',
            headerName: 'Manufacturer',
            flex: 1,
        },
        {
            field: 'city',
            headerName: 'city name',
            flex: 1,
        },
        {
            field: 'country',
            headerName: 'country name',
            flex: 1,
        },
        {
            field:'',
            headerName:'',
            width: 250,
            renderCell:(e:any)=>{
                return <div style={{display:'flex',gap:'1em'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>setEditedManufacture(e.row)}
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
        setManufacturies(prev=>
            prev.filter(el=>el.id != id))
    }

    const [manufacturies,setManufacturies]=useState<Manufacturer[]>([
        { id: 1,name: 'Manufacturer 1', city: "Nsk", country: "RU"},
    ]);

    const [showCreateManufacture, setShowCreateManufacture]=useState(false);
    const [editedManufacture, setEditedManufacture] = useState<Manufacturer|null>(null);

    const onCreate =(newManufacturer:Manufacturer)=>{
        setManufacturies(prev=>[...prev,newManufacturer]);

    }

    const onEdit = (manufacturer: Manufacturer)=>{
        setManufacturies(prev=>{
            const editCategory = prev.find(el=>el.id === manufacturer.id);

            if (editCategory){
                editCategory.name = manufacturer.name;
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
                        onClick={()=>setShowCreateManufacture(true)}>
                        Добавить производителя
                    </Button>
                </div>
            </div>

            {showCreateManufacture && <TelelinskiyCreateManufacturerPopUp
                open={showCreateManufacture}
                onClose={ ()=> setShowCreateManufacture(false)}
                onCreate={(manufacture)=>onCreate(manufacture)}

            />}

            {editedManufacture !== null && <TelelinskiyEditManufacturerPopUp
                open={editedManufacture !==null}
                onClose={()=>setEditedManufacture(null)}
                manufacturer={editedManufacture}
                onEdit={(manufacturer)=>onEdit(manufacturer)}
            />}

            <Box sx={{height:'100vh',width:'100%'}}>
                <DataGrid
                    rows={manufacturies}
                    columns={columns}
                />
            </Box>
        </div>

    );
}

export default ManufacturerPage;