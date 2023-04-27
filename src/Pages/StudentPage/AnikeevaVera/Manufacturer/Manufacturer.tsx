import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Box} from "@mui/material";
import Button from "@mui/material/Button";
import {Manufacturer} from "./model";
import AnikeevaPopUp from "../AnikeevaPopUp/AnikeevaPopUp";
import { AnikeevaCreateManufacturerPagePopup } from '../AnikeevaPopUp/popups/AnikeevaCreateManufacturerPagePopup';
import {AnikeevaEditManufacturerPagePopup} from "../AnikeevaPopUp/popups/AnikeevaEditManufacturerPagePopup";



const ManufacturerPage = () => {
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100,
            editable: true,
        },
        {
            field: 'name',
            headerName: 'Manufacturer',
            flex:1,
            editable: true,
        },
        {
            field: 'city',
            headerName: 'City',
            flex:1,
            editable: true,
        },
        {
            field: 'country',
            headerName: 'Country',
            flex:1,
            editable: true,
        },
        {
            field: '',
            headerName: '',
            width: 200,
            renderCell:(e:any) =>{
                return <div style={{display: 'flex', gap:'lem'}}>
                    <Button
                        color = {'primary'}
                        variant = {'contained'}
                        onClick = {()=>setShowEditManufacturer(e.row)}>

                        EDIT
                    </Button>

                    <Button color ={'primary'} variant = {'contained'} onClick={()=>OneDeleteClick(e.row.id)}>
                        DELETE
                    </Button>
                </div>
            }
        },
    ];

    const OneDeleteClick = (id:number)=>{
        SetCategories(prev => prev.filter(el=>el.id!==id))
    }

    const [categories,SetCategories] = useState<Manufacturer[]>([
        { id: 1, name: 'Manufacturer 1', city: 'city',country: 'country' },
        { id: 2, name: 'Manufacturer 2', city: 'city',country: 'country' },
        { id: 3, name: 'Manufacturer 3', city: 'city',country: 'country'},
        { id: 4, name: 'Manufacturer 4', city: 'city',country: 'country'},
        { id: 5, name: 'Manufacturer 5', city: 'city',country: 'country'},
        { id: 6, name: 'Manufacturer 6', city: 'city',country: 'country'},])

    const [ShowCreateManufacturer, setShowCreateManufacturer] = useState(false);
    const [EditedManufacturer, setShowEditManufacturer] = useState<Manufacturer|null>(null);


    const onCreate = (newManufacturer: Manufacturer) => {
        SetCategories(prev => [...prev, newManufacturer]);
    }
    const onEdit = (Manufacturer: Manufacturer) => {
        SetCategories(prev => {
            const EditManufacturer = prev.find(el => el.id === Manufacturer.id)


            if (EditManufacturer) {
                EditManufacturer.name = Manufacturer.name;
                EditManufacturer.city = Manufacturer.city;
                EditManufacturer.country =Manufacturer.country;
            }
            return [...prev]
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
                        onClick={() => setShowCreateManufacturer(true)}>

                        Добавить поставщика
                    </Button>
                </div>
            </div>
            <div>
                {ShowCreateManufacturer && <AnikeevaCreateManufacturerPagePopup
                    open={ShowCreateManufacturer}
                    onClose={() => setShowCreateManufacturer(false)}
                    onCreate={(Manufacturer) => onCreate(Manufacturer)}

                />}

                {EditedManufacturer !== null && <AnikeevaEditManufacturerPagePopup
                    open={EditedManufacturer !== null}
                    onClose={()=>setShowEditManufacturer(null)}
                    Manufacturer = {EditedManufacturer}
                    onEdit={(Manufacturer)=>onEdit(Manufacturer)}
                />}

                <Box sx={{height: '70vh', width: '100%'}}>
                    <DataGrid
                        rows={categories}
                        columns={columns}
                    />
                </Box>
            </div>
        </div>
    );
};

export default ManufacturerPage;


