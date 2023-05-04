import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Box, Button, dividerClasses} from "@mui/material";
import {Manufacturer} from "./model";
import PayzunovPopup from "../../../../Components/Payzunov/PayzunovPopup/PayzunovPopup";
import PayzunovCreateManufacturerPopup from "./Popups/PayzunovCreateManufacturerPopup";
import PayzunovEditManufacturerPopup  from "./Popups/PayzunovEditManufacturerPopup";
const ManufacturerPage = () => {

    const columns: GridColDef[] = [
        {   field: 'id',
            headerName: 'ID',
            width: 90,
        },

        {
            field: 'name',
            headerName: 'Название',
            flex: 1,
        },

        {
            field: 'country',
            headerName: 'Страна',
            flex: 1,
        },

        {
            field: 'city',
            headerName: 'Россия',
            flex: 1,
        },

        {
            field: '',
            headerName: '',
            width: 200,
            renderCell: (e:any)=> {
                return <div style={{display:'flex', gap:'1em'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>setEditedManufacturer(e.row)}
                    >
                        Edit
                    </Button>

                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onDeleteClick(e.row.id)}
                    >
                        Delete
                    </Button>
                </div>
            },
        }
    ];

    const onDeleteClick = (id: number) => {
        setManufactureries(prev =>
            prev.filter(el => el.id !== id)
        )
    }

    const [manufactureries, setManufactureries] = useState<Manufacturer[]>([
        { id: 1, name: "Производитель 1", country:"rus", city:"nsk"},
    ])

    const [showCreateManufacturer, setShowCreateManufacturer] = useState(false);

    const [editedManufacturer, setEditedManufacturer] = useState<Manufacturer|null>(null);


    const onCreate = (newManufacturer: Manufacturer) => {
        setManufactureries(prev=> [...prev, newManufacturer]);
    }

    const onEdit = (manufacturer: Manufacturer) => {
        setManufactureries(prev=>{
            const editManufacturer = prev.find(el=>el.id === manufacturer.id);

            if (editManufacturer){
                editManufacturer.name = manufacturer.name;
            }

            return[...prev];
        });
    }

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <h1>Производитель</h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=> setShowCreateManufacturer(true)}
                    >
                        Добавить производителя
                    </Button>
                </div>
            </div>

            {showCreateManufacturer && <PayzunovCreateManufacturerPopup
                open={showCreateManufacturer}
                onClose={() => setShowCreateManufacturer(false)}
                onCreate={(manufacturer) => onCreate(manufacturer)}
            />}

            {editedManufacturer !== null && <PayzunovEditManufacturerPopup
                open={editedManufacturer !== null}
                onClose={()=>setEditedManufacturer(null)}
                manufacturer={editedManufacturer}
                onEdit={(manufacturer)=>onEdit(manufacturer)}
            />}

            <Box sx={{ height: '70vh', width: '100%' }}>
                <DataGrid
                    rows={manufactureries}
                    columns={columns}
                />
            </Box>
        </div>
    );
};

export default ManufacturerPage;