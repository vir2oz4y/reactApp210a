import {Button, ListItemAvatarProps, TextField} from '@mui/material'
import React, {useState} from 'react'
import {Manufacturer} from "../models";
import VishnyakPopup, {IPopup} from "../../../../../Components/Vishnyak/VishnyakPopup/VishnyakPopup";

type Props = IPopup & {
    manufacturer: Manufacturer,
    onEdit: (newManufacturer: Manufacturer) => void;
}

export const VishnyakEditManufacturerPopup = ({open, onClose, manufacturer: manufacturerProps, onEdit}: Props) => {

    const [manufacturer, setManufacturer] = useState<Manufacturer>(manufacturerProps)

    const onEditClick = () => {
        onEdit(manufacturer)

        onClose();
    }

    return (
        <VishnyakPopup
            open={open}
            onClose={onClose}
            title={'Изменение производителя'}
        >
            <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>

                <TextField
                    label="Название"
                    variant="standard"
                    value={manufacturer.name}
                    onChange={e => setManufacturer(prev => ({...prev, name: e.target.value}))}
                />

                <TextField
                    label="Страна"
                    variant="standard"
                    value={manufacturer.country}
                    onChange={e => setManufacturer(prev => ({...prev, country: e.target.value}))}
                />


                <TextField
                    label="Город"
                    variant="standard"
                    value={manufacturer.city}
                    onChange={e => setManufacturer(prev => ({...prev, city: e.target.value}))}
                />


                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onEditClick()}
                    >
                        Изменить
                    </Button>

                </div>
            </div>
        </VishnyakPopup>
    )
}