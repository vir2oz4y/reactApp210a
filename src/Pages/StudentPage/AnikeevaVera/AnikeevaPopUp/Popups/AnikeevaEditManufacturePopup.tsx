import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Manufacturer } from '../../Manufacturer/model'
import AnikeevaPopUp, { Ipopup } from '../AnikeevaPopUp'
import {AnikeevaAxios} from "../../AnikeevaVeraPage";

type Props = Ipopup & {
    Manufacturer: Manufacturer,

    onEdit: (Manufacturer: Manufacturer) => void;
}

export const AnikeevaEditManufacturerPagePopup = ({ open, onClose, onEdit, Manufacturer:ManufacturerProps}: Props) => {

    const [Manufacturer, setManufacturer] = useState(ManufacturerProps)


    const onEditClick = () => {
        AnikeevaAxios.patch<{item: Manufacturer}>(
            'https://canstudy.ru/orderapi/category',
            {
                item: Manufacturer
            }
        )
            .then((response) => {
                onEdit(response.data.item);
                onClose();
            })
    }

    return (
        <AnikeevaPopUp
            open={open}
            onClose={onClose}
            title={"Edit Manufacturer"}
        >
            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="Manufacturer name"
                    variant="standard"
                    value={Manufacturer.name}
                    onChange={e => setManufacturer(prev => ({
                        ...prev, name: e.target.value
                    }))}
                />
                <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                    <TextField
                        label="Manufacturer city"
                        variant="standard"
                        value={Manufacturer.city}
                        onChange={e => setManufacturer(prev => ({
                            ...prev, city: e.target.value
                        }))}
                    />

                    <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                        <TextField
                            label="Manufacturer country"
                            variant="standard"
                            value={Manufacturer.country}
                            onChange={e => setManufacturer(prev => ({
                                ...prev, country: e.target.value
                            }))}
                        />

                <div style = {{display: 'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onEditClick()}
                    >
                        Edit
                    </Button>
                </div>
            </div>
                </div>
            </div>
        </AnikeevaPopUp>
    )
}

