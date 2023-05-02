import {Button, TextField } from '@mui/material';
import  React, { useState } from 'react'
import TelelinskiyPopUp, {IPopup} from "../../../../../Components/Telelinskiy/TelelinskiyPopUp/TelelinskiyPopUP";
import { Manufacturer } from '../models';


type Props = IPopup & {
    manufacturer:Manufacturer,
    onEdit:(newManufacturer:Manufacturer)=>void;
}
export const TelelinskiyEditManufacturerPopUp =({open,onClose,onEdit,manufacturer:manufacturerProps}:Props)=>{

    const [manufacturer, setManufacturer]=useState<Manufacturer>(manufacturerProps)

    const onEditClick=()=>{
        onEdit(manufacturer);

        onClose();
    }

    return (<div>
        <TelelinskiyPopUp
            open={open}
            onClose={onClose}
            title={'Изменение Производителя'}
        >
            <div style={{display:'flex',flexDirection:'column',gap:'1em'}}>

                <TextField
                    label="Manufacturer name"
                    variant="standard"
                    value={manufacturer.name}
                    onChange={e=>setManufacturer(prev=>({...prev,name:e.target.value}))}

                />
                <TextField
                    label="Manufacturer city"
                    variant="standard"
                    value={manufacturer.city}
                    onChange={e=>setManufacturer(prev=>({...prev,name:e.target.value}))}

                />
                <TextField
                    label="Manufacturer country"
                    variant="standard"
                    value={manufacturer.country}
                    onChange={e=>setManufacturer(prev=>({...prev,name:e.target.value}))}

                />
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onEditClick()}
                    >
                        Edit
                    </Button>
                </div>
            </div>
        </TelelinskiyPopUp>
    </div>)
}