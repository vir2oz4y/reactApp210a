import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import {useEffect, useState } from 'react';
import { Manufacturer } from './models';
import JabrovPopUp, {IPopup} from '../JabrovPopUp/JabrovPopUp';
import { JabrovCreateManufacturerPopUp } from './Modals/JabrovCreateManufacturerPopUp';
import { JabrovEditManufacturerPopUp } from './Modals/JabrovEditManufacturerPopUp';
import {JabrovAxios} from "../JabrovPage";

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

    const OneDeleteClick = (id: number) => {

        JabrovAxios.delete(`https://canstudy.ru/orderapi/Manufacturer/${id}`)
            .then(() => {
                setCategories(prev => prev.filter(el => el.id !== id)
                )
            })
    }
    const [categories, setCategories] = useState<Manufacturer[]>([

    ])

    useEffect(() => {
        JabrovAxios.get<{ items: Manufacturer[] }>(
            'https://canstudy.ru/orderapi/manufacturer/list'
        )
            .then((response) => {
                setCategories(response.data.items);
            })
    },[])

    const [ShowCreateManufacture, setShowCreateManufacture] = useState(false);
    const [editedManufacture, setShowEditManufacture] = useState <Manufacturer|null>(null);



    const onCreate = (newManufacture: Manufacturer) => {
        setCategories(prev => [...prev, newManufacture]);
    }
    const onEdit = (Manufacture: Manufacturer) => {
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
                    Производители
                </h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setShowCreateManufacture(true)}
                    >
                        Добавить Производителя
                    </Button>
                </div>

            </div>

            {ShowCreateManufacture && <JabrovCreateManufacturerPopUp
                open={ShowCreateManufacture}
                onClose={() => setShowCreateManufacture(false)}
                onCreate={(Manufacture) => onCreate(Manufacture)}

            />}

            {editedManufacture !== null && <JabrovEditManufacturerPopUp
                open={editedManufacture !== null}
                onClose={()=> setShowEditManufacture(null)}
                manufacture={editedManufacture}
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