import {Button, ListItemAvatarProps, TextField} from '@mui/material'
import React, { useState } from 'react'
import {Postavshiki} from "../model";
import JabrovPopUp,{ Ipopup } from "../../JabrovPopUp/JabrovPopUp";

type Props = Ipopup & {
    onCreate: (newManufacturer: Postavshiki) => void;
}

export const JabrovCreateManufacturerPopup = ({ open, onClose, onCreate }: Props) => {

    const [manufacturer, setManufacturer] = useState<Postavshiki>({
        id: Math.random(),
        city: "",
        country: "",
        name: ""
    })

    const onCreateClick = () => {
        onCreate(manufacturer)

        onClose();
    }

    return (
        <JabrovPopUp
            open={open}
            onClose={onClose}
            title={'Создание производителя'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>

                <TextField
                    label="Название"
                    variant="standard"
                    value={manufacturer.name}
                    onChange={e => setManufacturer(prev=>({...prev, name:e.target.value}))}
                />

                <TextField
                    label="Страна"
                    variant="standard"
                    value={manufacturer.country}
                    onChange={e => setManufacturer(prev=>({...prev, country:e.target.value}))}
                />


                <TextField
                    label="Город"
                    variant="standard"
                    value={manufacturer.city}
                    onChange={e => setManufacturer(prev=>({...prev, city:e.target.value}))}
                />




                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}
                    >
                        Create
                    </Button>

                </div>
            </div>
        </JabrovPopUp>
    )
}