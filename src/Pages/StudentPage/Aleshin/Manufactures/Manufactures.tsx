import React, {useEffect, useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { Manufacture } from "./model";
import {AleshinCreateManufacturePopup} from "./Popups/AleshinCreateManufacturePopup";
import {AleshinEditManufacturePopup} from "./Popups/AleshinEditManufacturePopup";
import {aleshinAxios} from "../Aleshin";

const ManufacturePage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
            field: 'country',
            headerName: 'Country',
            width: 150,
            editable: true,
        },
        {
            field: 'city',
            headerName: 'City',
            width: 150,
            editable: true,
        },
        {
            field: '',
            headerName: '',
            width: 300,
            renderCell: (e: any) => {
                return <div style={{ display: 'flex', gap:'1em' } }>
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
                        onClick={() => onDeleteClick(e.row.id)}
                    >
                        Удалить
                    </Button>
                </div>
            },
        }
    ];


    const onDeleteClick = (id: number) => {

        aleshinAxios.delete(`https://canstudy.ru/orderapi/Manufacturer/${id}`)
            .then(response => {
                setManufactures(  prev =>
                    prev.filter(el => el.id !== id)
                )
            })
    }

    const [manufactures, setManufactures] = useState<Manufacture[]>([])

    useEffect(() => {
        aleshinAxios.get<{ items: Manufacture[] }>(
            'https://canstudy.ru/orderapi/Manufacturer/list'
        )
            .then((response) => {
                setManufactures(response.data.items)
            })
    },[])

    const [showCreateManufacture, setCreateManufacture] = useState(false)
    const [editedManufacture, setEditedManufacture] = useState<Manufacture|null>(null)

    const onCreate = (newManufacture: Manufacture) => {
        setManufactures(prev=>[...prev, newManufacture]);
    }

    const onEdit = (manufacture: Manufacture) => {
        setManufactures(prev=> {
            const editManufacture = prev.find(el=>el.id === manufacture.id)

            if (editManufacture){
                editManufacture.name = manufacture.name;
                editManufacture.country = manufacture.country;
                editManufacture.city = manufacture.city;
            }

            return [...prev];
        });
    }

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
                >
                <h1> Мануфактуры </h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick ={()=> setCreateManufacture(true)}
                    >
                        Добавить мануфактуру
                    </Button>
                </div>
            </div>
                {showCreateManufacture && <AleshinCreateManufacturePopup
                    open={showCreateManufacture}
                    onClose={() => setCreateManufacture(false)}
                    onCreate={(manufacture) => onCreate(manufacture)}
                />}

                {editedManufacture !== null && <AleshinEditManufacturePopup
                    open={editedManufacture !== null}
                    onClose={()=>setEditedManufacture(null)}
                    manufacture={editedManufacture}
                    onEdit={(manufacture)=>onEdit(manufacture)}
                />}

                <Box sx={{ height: '70vh', width: '100%' }}>
                    <DataGrid
                        rows={manufactures}
                        columns={columns}
                    />
                </Box>
        </div>
    )
}

export default ManufacturePage;