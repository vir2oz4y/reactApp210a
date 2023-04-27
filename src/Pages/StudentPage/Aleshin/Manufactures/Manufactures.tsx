import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { Manufacture } from "./model";
import AleshinPopup from '../../../../Components/Aleshin/AleshinPopup/AleshinPopup';
import {AleshinCreateManufacturePopup} from "./Popups/AleshinCreateManufacturePopup";
import {AleshinEditManufacturePopup} from "./Popups/AleshinEditManufacturePopup";

const ManufacturePage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'name',
            headerName: 'First name',
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
        setManufactures(  prev =>
            prev.filter(el => el.id !== id)
        )
    }

    const [categories, setManufactures] = useState<Manufacture[]>([
        { id: 1, name: 'Manufacture 1' },
        { id: 1, name: 'Manufacture 1' },
        { id: 1, name: 'Manufacture 1' },
        { id: 1, name: 'Manufacture 1' },
        { id: 1, name: 'Manufacture 1' },
        { id: 1, name: 'Manufacture 1' },
        { id: 1, name: 'Manufacture 1' },
    ])

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
                        rows={categories}
                        columns={columns}
                    />
                </Box>
        </div>
    )
}

export default ManufacturePage;