import {Button, TextField } from '@mui/material';
import  React, { useState } from 'react'
import TelelinskiyPopUp, {IPopup} from "../../../../../Components/Telelinskiy/TelelinskiyPopUp/TelelinskiyPopUP";
import { Manufacturer } from '../models';


type Props = IPopup & {
    onCreate:(newManufacturer: Manufacturer)=>void;
}
export const TelelinskiyCreateManufacturerPopUp =({open,onClose,onCreate}:Props)=>{

    const [manufacturerName, setManufacturerName,manufacturerCity, setManufacturerCity,manufacturerCountry, setManufacturerCountry]=useState('')

    const onCreateClick=()=>{
        onCreate({
            id: Math.random(),
            name: manufacturerName,
            city: manufacturerCity,
            country:manufacturerCountry
        })
        onClose();
    }

    function setShowCreateManufacturer(arg0: boolean): void {
        throw new Error('Function not implemented.');
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
                    value={manufacturerName}
                    onChange={e=>setManufacturerName(e.target.value)}

                />
                <TextField
                    label="city name"
                    variant="standard"
                    value={manufacturerName}
                    onChange={e=>setManufacturerCity(e.target.value)}

                />
                <TextField
                    label="country name"
                    variant="standard"
                    value={manufacturerName}
                    onChange={e=>setManufacturerCountry(e.target.value)}

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