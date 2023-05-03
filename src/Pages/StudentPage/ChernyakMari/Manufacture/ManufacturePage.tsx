import React, {useState} from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Box, Button, dividerClasses} from '@mui/material';
import {Manufacture} from "./model";
import {ChernyakCreateManufacturePopup} from "./Popup/ChernyakCreateManufacturePopup";
import {ChernyakEditManufacturePopup} from "./Popup/ChernyakEditManufacturePopup";


const ManufacturePage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'name',
            headerName: 'Название',
            flex:1,
        },
        {
            field: 'country',
            headerName: 'Страна',
            flex:1,
        },
        {
            field: 'city',
            headerName: 'Город',
            flex:1,
        },
        {
            field: 'email',
            headerName: 'Почта',
            flex:1,
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
                        onClick={()=>setEditedManufacture(e.row)}
                    >
                        Edit
                    </Button>

                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onDeleteClick(e.row.id)}
                    >
                        Delete
                    </Button>
                </div>
            },
        }
    ];

    const onDeleteClick = (id: number) => {
        setManufacturies(prev =>
            prev.filter(el => el.id !== id)
        )
    }

    const [manufacturies, setManufacturies] = useState<Manufacture[]>([
        {id: 1, name: "Производитель 1", country:'rus', city:'nsk'},
    ])

    const [showCreateManufacture, setShowCreateManufacture] = useState(false);

    const [editedManufacture, setEditedManufacture] = useState<Manufacture|null>(null);

    const onCreate = (newManufacture: Manufacture) => {
        setManufacturies(prev => [...prev, newManufacture]);
    }

    const onEdit = (manufacture: Manufacture) => {
        setManufacturies(prev => {
            const editCategory = prev.find(el=>el.id === manufacture.id);

            if (editCategory){
                editCategory.name = manufacture.name;
                editCategory.country = manufacture.country;
                editCategory.city = manufacture.city;

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
                <h1>Производители</h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setShowCreateManufacture(true)}
                    >
                        Добавить производителя
                    </Button>
                </div>
            </div>

            {showCreateManufacture && <ChernyakCreateManufacturePopup
                open={showCreateManufacture}
                onClose={() => setShowCreateManufacture(false)}
                onCreate={(manufacture) => onCreate(manufacture)}
            />}

            {editedManufacture !== null && <ChernyakEditManufacturePopup
                open={editedManufacture !== null}
                onClose={()=>setEditedManufacture(null)}
                manufacture={editedManufacture}
                onEdit={(manufacture)=>onEdit(manufacture)}
            />}

            <Box sx={{height: '70vh', width: '100%'}}>
                <DataGrid
                    rows={manufacturies}
                    columns={columns}
                />
            </Box>
        </div>


    );
};

export default ManufacturePage;