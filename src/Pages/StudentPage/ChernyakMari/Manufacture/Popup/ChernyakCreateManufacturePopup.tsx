import {Button, ListItemAvatarProps, TextField} from '@mui/material'
import React, { useState } from 'react'
import ChernyakPopup, { IPopup }from "../../../../../Components/Chernyak/ChernyakPopup/ChernyakPopup";
import { Manufacture } from "../model";

type Props = IPopup & {
    onCreate: (newManufacture: Manufacture) => void;
}

export const ChernyakCreateManufacturePopup = ({ open, onClose, onCreate }: Props) => {

    const [manufacture, setManufacture] = useState<Manufacture>({
        id: Math.random(),
        city: "",
        country: "",
        name: ""
    })

    const onCreateClick = () => {
        onCreate(manufacture)

        onClose();
    }

    return (
        <ChernyakPopup
            open={open}
            onClose={onClose}
            title={'Создание производителя'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>

                <TextField
                    label="Название"
                    variant="standard"
                    value={manufacture.name}
                    onChange={e => setManufacture(prev=>({...prev, name:e.target.value}))}
                />

                <TextField
                    label="Страна"
                    variant="standard"
                    value={manufacture.country}
                    onChange={e => setManufacture(prev=>({...prev, country:e.target.value}))}
                />


                <TextField
                    label="Город"
                    variant="standard"
                    value={manufacture.city}
                    onChange={e => setManufacture(prev=>({...prev, city:e.target.value}))}
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
        </ChernyakPopup>
    );
}