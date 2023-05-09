import React, {useEffect, useState} from 'react';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import {Box, Button} from "@mui/material";
import {Manufacturer} from "./model";
import PayzunovCreateManufacturerPopup from "./Popups/PayzunovCreateManufacturerPopup";
import PayzunovEditManufacturerPopup  from "./Popups/PayzunovEditManufacturerPopup";
import {PayzunovAxios} from "../payzunov";

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
            headerName: 'Город',
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
        PayzunovAxios.delete(`https://canstudy.ru/orderapi/manufacturer/${id}`)
            .then(() => {
                setManufactureries(prev =>
                    prev.filter(el => el.id !== id)
                )
            })
    }

    const [manufactureries, setManufactureries] = useState<Manufacturer[]>([])

        useEffect(() => {
            PayzunovAxios.get<{ items: Manufacturer[] }>(
                'https://canstudy.ru/orderapi/manufacturer/list'
            )
                .then((response) => {
                    setManufactureries(response.data.items);
                })
        },[])

    const [showCreateManufacturer, setShowCreateManufacturer] = useState(false);

    const [editedManufacturer, setEditedManufacturer] = useState<Manufacturer|null>(null);


    const onCreate = (newManufacturer: Manufacturer) => {
        setManufactureries(prev=> [...prev, newManufacturer]);
    }

    const onEdit = (manufacturer: Manufacturer) => {
        setManufactureries(prev=>{
            const editManufacturer = prev.find(el=>el.id === manufacturer.id);

            editManufacturer.name = manufacturer.name;
            editManufacturer.country = manufacturer.country;
            editManufacturer.city = manufacturer.city;

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
                Manufacturer={editedManufacturer}
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