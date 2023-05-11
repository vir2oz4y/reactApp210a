import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import GayvoronskikhPopUp, { IPopUp } from '../../../../../Components/Gayvoronskikh/GayvoronskikhPopUp/GayvoronskikhPopUp'
import { Manufacturer } from '../model'
import {GayvoronskikhAxios} from "../../GayvoronskikhAndrei";
import {Category} from "../../Category/model";

type Props = IPopUp & {

    onCreate: (newManufacturer: Manufacturer) => void;
}

export const GayvoronskikhCreateManufacturerPopUp = ({ open, onClose,onCreate }:Props) => {

    const [manufacturer, setManufacturer] = useState<Manufacturer>({
        id: Math.random(),
        city: "",
        country: "",
        name: ""
    })
    const onCreateClick = () => {
        GayvoronskikhAxios.post<{ item: Manufacturer }>('https://canstudy.ru/orderapi/manufacturer',
            {
                ...manufacturer
            }
        ).then((response) => {
            onCreate(response.data.item)
            onClose();
        })
    }
    return (
        <GayvoronskikhPopUp
            open={open}
            onClose={onClose}
            title={'Создание Мануфактуры'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>

                <TextField
                    label="Название"
                    variant="standard"
                    value={manufacturer.name}
                    onChange={e => setManufacturer(prev => ({ ...prev, name: e.target.value }))}
                />

                <TextField
                    label="Страна"
                    variant="standard"
                    value={manufacturer.country}
                    onChange={e => setManufacturer(prev => ({ ...prev, country: e.target.value }))}
                />


                <TextField
                    label="Город"
                    variant="standard"
                    value={manufacturer.city}
                    onChange={e => setManufacturer(prev => ({ ...prev, city: e.target.value }))}
                />




                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}
                    >
                        Create
                    </Button>

                </div>
            </div>
        </GayvoronskikhPopUp>
    )
}