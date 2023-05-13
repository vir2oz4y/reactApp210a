import React, {useEffect, useState} from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Box, Button, dividerClasses} from '@mui/material';
import {Manufacture} from "./model";
import {ChernyakEditManufacturePopup} from "./Popup/ChernyakEditManufacturePopup";
import {chernyakAxios} from "../ChernyakM";
import ChernyakCreateManufacturePopup from "./Popup/ChernyakCreateManufacturePopup";



const ManufacturePage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
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
      chernyakAxios.delete(`https://canstudy.ru/orderapi/manufacturer/${id}`)
    .then(() => {
            setManufactureries(prev =>
                prev.filter(el => el.id !== id)
            )
        })
    }
    const [manufactureries, setManufactureries] = useState<Manufacture[]>([])

    useEffect(() => {
        chernyakAxios.get<{ items: Manufacture[] }>(
            'https://canstudy.ru/orderapi/manufacturer/list'
        )
            .then((response) => {
                setManufactureries(response.data.items);
            })
    },[])




    const [showCreateManufacture, setShowCreateManufacture] = useState(false);

    const [editedManufacture, setEditedManufacture] = useState<Manufacture|null>(null);

    const onCreate = (newManufacture: Manufacture) => {
        setManufactureries(prev => [...prev, newManufacture]);
    }

    const onEdit = (manufacture: Manufacture) => {
        setManufactureries(prev => {
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
                    rows={manufactureries}
                    columns={columns}
                />
            </Box>
        </div>


    );
};

export default ManufacturePage;