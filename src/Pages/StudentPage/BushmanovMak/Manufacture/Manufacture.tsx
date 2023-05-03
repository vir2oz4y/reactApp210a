import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { Manufacture } from './model';
import BushmanovPopUp from "../BushmanovPopUp/BushmanovPopUp";
import { BushmanovCreateManufacturePagePopup } from '../BushmanovPopUp/Popups/BushmanovCreateManufacturePopup';
import {BushmanovEditManufacturePagePopup} from "../BushmanovPopUp/Popups/BushmanovEditManufacturePopup";

const ManufacturePage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            flex: .3
        },
        {
            field: 'name',
            headerName: 'Manufacture',
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
                        onClick = {()=>setShowEditManufacture(e.row)}
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

    const OneDeleteClick = (id:number) => {
        setCategories(prev => prev.filter(el=>el.id !== id)
        )
    }
    const [categories, setCategories] = useState<Manufacture[]>([
        { id: 1, name: "Manufacture 1", city: "berlin", country: "ssha"},
        { id: 2, name: "Manufacture 2", city: "berlin", country: "ssha"},
        { id: 3, name: "Manufacture 3", city: "berlin", country: "ssha"},
        { id: 4, name: "Manufacture 4", city: "berlin", country: "ssha"},
        { id: 5, name: "Manufacture 5", city: "berlin", country: "ssha"},
        { id: 6, name: "Manufacture 6", city: "berlin", country: "ssha"},
        { id: 7, name: "Manufacture 7", city: "berlin", country: "ssha"},
    ])

    const [ShowCreateManufacture, setShowCreateManufacture] = useState(false);
    const [editedManufacture, setShowEditManufacture] = useState <Manufacture|null>(null);



    const onCreate = (newManufacture: Manufacture) => {
        setCategories(prev => [...prev, newManufacture]);
    }
    const onEdit = (Manufacture: Manufacture) => {
        setCategories(prev => {
            const editManufacture = prev.find(el => el.id === Manufacture.id)

            if(editManufacture) {
                editManufacture.name = Manufacture.name;
                editManufacture.city = Manufacture.city;
                editManufacture.country = Manufacture.country;
            }
            return [...prev];
        });
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>
                    Мануфактуры
                </h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setShowCreateManufacture(true)}
                    >
                        Добавить мануфактуру
                    </Button>
                </div>

            </div>

            {ShowCreateManufacture && <BushmanovCreateManufacturePagePopup
                open={ShowCreateManufacture}
                onClose={() => setShowCreateManufacture(false)}
                onCreate={(Manufacture) => onCreate(Manufacture)}

            />}

            {editedManufacture !== null && <BushmanovEditManufacturePagePopup
                open={editedManufacture !== null}
                onClose={()=> setShowEditManufacture(null)}
                manufacture={editedManufacture}
                onEdit={(Manufacture)=>onEdit(Manufacture)}
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

export default ManufacturePage;