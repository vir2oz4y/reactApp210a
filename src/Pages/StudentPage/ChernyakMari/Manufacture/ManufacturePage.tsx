import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import ChernyakPopup from "../../../../Components/Chernyak/ChernyakPopup/ChernyakPopup";
import {Manufacture} from "./model"
import {ChernyakCreateManufacturePopup} from "./Popup/ChernyakCreateManufacturePopup";
import {ChernyakEditManufacturePopup} from "./Popup/ChernyakEditManufacturePopup";
const ManufacturePage = () => {
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'Name',
            headerName: 'First name',

        },
        {
            field: ' ',
            headerName: ' ',
            width: 200,
            renderCell: (e: any) => {
                return <div style={{ display: 'flex', gap: '1em' }}>
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
                        onClick={()=>onDeleteClick (e.row.id)}

                    >
                        delite
                    </Button>
                </div>
            }
        },
    ];

    const onDeleteClick= (id:number)=>{
        setManufacturers( prev => prev.filter (el => el.id !== id))
    }

    const [manufacturers, setManufacturers] = useState <Manufacture[]> ( [

        { id: 1, name: "category 1" },
        { id: 2, name: "category 2" },
        { id: 3, name: "category 3" },
        { id: 4, name: "category 4" },
        { id: 5, name: "category 5" },
        { id: 6, name: "category 6" },
        { id: 7, name: "category 7" },

    ])
    const[showCreateManufacture, setShowCreateManufacture] = useState(false);

    const[editedManufacture, setEditedManufacture] = useState<Manufacture|null>(null)
    const onCreate = (newCategory: Manufacture) =>{
        setManufacturers(prev => [...prev,newManufacture]);
    }

    const onEdit = (category: Manufacture) => {
        setManufacturers(prev => {
            const editManufacture = prev.find(el=>el.id === manufacture.id);

            if (editManufacture){
                editManufacture.name = manufacture.name
            }
            return [...prev]
        })
    }
    return (
        <div>
            <div style={{
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
                        onClick={()=>setShowCreateManufacture(true)}
                    >
                        Добавить производителя
                    </Button>
                </div>
            </div>
            {showCreateManufacture && <ChernyakCreateManufacturePopup
                open={showCreateManufacture}
                onClose={() => setShowCreateManufacture(false)}
                onCreate={(manufacture) => onCreate(manufacture)}/>}

            {editedManufacture !== null && <ChernyakEditManufacturePopup
                open={editedManufacture !== null}
                onClose={() => setEditedManufacture(null)}
                category = {editedManufacture}
                onEdit={(manufacture)=>onEdit(manufacture)}
            />}



            <Box sx={{height: '70vh', width: '100%'}}>
                <DataGrid
                    rows={manufacturers}
                    columns={columns}
                />
            </Box>
        </div>
    );

};
export default ManufacturePage;




