import {Button, TextField } from '@mui/material';
import  React, { useState } from 'react'
import TelelinskiyPopUp, {IPopup} from "../../../../../Components/Telelinskiy/TelelinskiyPopUp/TelelinskiyPopUP";
import { Manufacturer } from '../models';


type Props = IPopup & {
    onCreate:(newManufacturer: Manufacturer)=>void;
}
export const TelelinskiyCreateManufacturerPopUp =({open,onClose,onCreate}:Props)=>{

    const [manufacturer, setManufacturer]=useState<Manufacturer>({
        id: Math.random(),
        city: "",
        country: "",
        name: ""
    })

    const onCreateClick=()=>{
        onCreate(manufacturer)
        onClose();
    }


    return (<div>
        <TelelinskiyPopUp
            open={open}
            onClose={onClose}
            title={'создание Производителя'}
        >
            <div style={{display:'flex',flexDirection:'column',gap:'1em'}}>

                <TextField
                    label="Manufacturer name"
                    variant="standard"
                    value={manufacturer.name}
                    onChange={e=>setManufacturer(prev=>({...prev, name:e.target.value}))}

                />
                <TextField
                    label="city name"
                    variant="standard"
                    value={manufacturer.city}
                    onChange={e=>setManufacturer(prev=>({...prev, name:e.target.value}))}

                />
                <TextField
                    label="country name"
                    variant="standard"
                    value={manufacturer.country}
                    onChange={e=>setManufacturer(prev=>({...prev, name:e.target.value}))}

                />
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onCreateClick()}
                    >
                        Create
                    </Button>
                </div>
            </div>
        </TelelinskiyPopUp>
    </div>)
}