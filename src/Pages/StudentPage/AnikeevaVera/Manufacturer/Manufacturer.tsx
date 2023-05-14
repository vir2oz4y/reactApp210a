import React, {useEffect, useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import AnikeevaPopUp from "../AnikeevaPopUp/AnikeevaPopUp";
import { AnikeevaCreateManufacturerPagePopup } from '../AnikeevaPopUp/Popups/AnikeevaCreateManufacturerPopup';
import { AnikeevaEditManufacturerPagePopup } from '../AnikeevaPopUp/Popups/AnikeevaEditManufacturePopup';
import {AnikeevaAxios} from "../AnikeevaVeraPage";
import { Manufacturer } from './model';


const ManufacturerPage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            flex: .3
        },
        {
            field: 'name',
            headerName: 'Manufacturer',
            flex: 1,
            editable: true,
        },
        {
            field: 'city',
            headerName: 'City',
            flex: 1,
            editable: true,
        },
        {
            field: 'country',
            headerName: 'Country',
            flex: 1,
            editable: true,
        },
        {
            field: '',
            headerName: '',
            width: 200,
            renderCell: (e: any) => {
                return <div style={{display: 'flex', gap: '1em'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick = {()=>setShowEditManufacturer(e.row)}
                    >
                        Edit
                    </Button>

                    <Button color={'primary'} variant={'contained'} onClick={()=>OneDeleteClick(e.row.id)}>
                        Delete
                    </Button>
                </div>
            },
        }

    ];

    const OneDeleteClick = (id: number) => {

        AnikeevaAxios.delete(`https://canstudy.ru/orderapi/Manufacturer/${id}`)
            .then(() => {
                setCategories(prev => prev.filter(el => el.id !== id)
                )
            })
    }
    const [categories, setCategories] = useState<Manufacturer[]>([

    ])

    useEffect(() => {
        AnikeevaAxios.get<{ items: Manufacturer[] }>(
            'https://canstudy.ru/orderapi/Manufacturer/list'
        )
            .then((response) => {
                setCategories(response.data.items);
            })
    },[])

    const [ShowCreateManufacturer, setShowCreateManufacturer] = useState(false);
    const [editedManufacturer, setShowEditManufacturer] = useState <Manufacturer|null>(null);



    const onCreate = (newManufacturer: Manufacturer) => {
        setCategories(prev => [...prev, newManufacturer]);
    }
    const onEdit = (Manufacturer: Manufacturer) => {
        setCategories(prev => {
            const editManufacturer = prev.find(el => el.id === Manufacturer.id)

            if(editManufacturer) {
                editManufacturer.name = Manufacturer.name;
                editManufacturer.city = Manufacturer.city;
                editManufacturer.country = Manufacturer.country;
            }
            return [...prev];
        });
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>
                    Производитель
                </h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setShowCreateManufacturer(true)}
                    >
                        Добавить производителя
                    </Button>
                </div>

            </div>

            {ShowCreateManufacturer && <AnikeevaCreateManufacturerPagePopup
                open={ShowCreateManufacturer}
                onClose={() => setShowCreateManufacturer(false)}
                onCreate={(Manufacturer) => onCreate(Manufacturer)}

            />}

            {editedManufacturer !== null && <AnikeevaEditManufacturerPagePopup
                open={editedManufacturer !== null}
                onClose={()=> setShowEditManufacturer(null)}
                Manufacturer={editedManufacturer}
                onEdit={(Manufacturer)=>onEdit(Manufacturer)}
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

export default ManufacturerPage;

