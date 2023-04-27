import React, {useState} from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Box, Button, dividerClasses} from '@mui/material';
import MalahovDY, {IPopup} from "../../../../Components/Malahov/MalahovDY/MalahovDY";
import {Manufacturer} from "./models";
import {Malahov_Create_Manufacturer_Popup} from "./Popups/Malahov_Create_Manufacture_Popup";
import {Malahov_Edit_Manufacturer_Popup} from "./Popups/Malahov_Edit_Manufacture_Popup";

const ManufacturerPage = () => {

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
            headerName: 'Россия',
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

    const [manufacturies, setManufacturies] = useState<Manufacturer[]>([
        {id: 1, name: "Производитель 1", country:'rus', city:'nsk'},
    ])

    const [showCreateManufacture, setShowCreateManufacture] = useState(false);

    const [editedManufacture, setEditedManufacture] = useState<Manufacturer|null>(null);

    const onCreate = (newManufacturer: Manufacturer) => {
        setManufacturies(prev => [...prev, newManufacturer]);
    }

    const onEdit = (manufacturer: Manufacturer) => {
        setManufacturies(prev => {
            const editCategory = prev.find(el=>el.id === manufacturer.id);

            if (editCategory){
                editCategory.name = manufacturer.name;
                editCategory.country = manufacturer.country;
                editCategory.city = manufacturer.city;

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

            {showCreateManufacture && <Malahov_Create_Manufacturer_Popup
                open={showCreateManufacture}
                onClose={() => setShowCreateManufacture(false)}
                onCreate={(manufacture) => onCreate(manufacture)}
            />}

            {editedManufacture !== null && <Malahov_Edit_Manufacturer_Popup
                open={editedManufacture !== null}
                onClose={()=>setEditedManufacture(null)}
                manufacturer={editedManufacture}
                onEdit={(manufacturer)=>onEdit(manufacturer)}
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

export default ManufacturerPage;