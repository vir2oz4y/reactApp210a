import {Button, ListItemAvatarProps, TextField} from '@mui/material'
import React, { useState } from 'react'
import KryuchkovPopup, { IPopup } from '../../../../../Components/Kryuchkov/KryuchkovPopup/KryuchkovPopup'
import {Manufacturer} from "../models";

type Props = IPopup & {
    onCreate: (newManufacturer: Manufacturer) => void;
}

export const KryuchkovCreateManufacturerPopup = ({ open, onClose, onCreate }: Props) => {

    const [manufacturer, setManufacturer] = useState<Manufacturer>({
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
        <KryuchkovPopup
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
        </KryuchkovPopup>
    )
}