import {Button, TextField } from '@mui/material';
import  React, { useState } from 'react'
import TatarnikovPopUp, {IPopup} from "../../../../../Components/TatarnikovPopUp/TatarnikovPopUp";
import { Manufacturer } from '../models';
import {TatarnikovAxios} from "../../TatarnikovEgorPage";

type Props = IPopup & {
    manufacture: Manufacturer,

    onEdit: (Manufacture: Manufacturer) => void;
}

export const TatarnikovEditManufacturerPopUp = ({ open, onClose, onEdit, manufacture:ManufactureProps}: Props) => {

    const [Manufacturer, setManufacture] = useState(ManufactureProps)


    const onEditClick = () => {
        TatarnikovAxios.patch<{item: Manufacturer}>(
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
        <TatarnikovPopUp
            open={open}
            onClose={onClose}
            title={"Edit Manufacture"}
        >
            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="Manufacture name"
                    variant="standard"
                    value={Manufacturer.name}
                    onChange={e => setManufacture(prev => ({
                        ...prev, name: e.target.value
                    }))}
                />
                <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                    <TextField
                        label="Manufacture city"
                        variant="standard"
                        value={Manufacturer.city}
                        onChange={e => setManufacture(prev => ({
                            ...prev, city: e.target.value
                        }))}
                    />

                    <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                        <TextField
                            label="Manufacture country"
                            variant="standard"
                            value={Manufacturer.country}
                            onChange={e => setManufacture(prev => ({
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
        </TatarnikovPopUp>
    )
}