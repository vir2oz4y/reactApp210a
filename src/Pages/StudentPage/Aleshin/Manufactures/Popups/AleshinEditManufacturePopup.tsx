import React, {useState} from 'react'
import AleshinPopup, {IPopup} from "../../../../../Components/Aleshin/AleshinPopup/AleshinPopup";
import { TextField, Button } from "@mui/material";
import {Manufacture} from "../model";
import {aleshinAxios} from "../../Aleshin";
import {Client} from "../../Client/model";

type Props = IPopup & {
    manufacture: Manufacture,
    onEdit:(newManufacture: Manufacture) => void;
}
export const AleshinEditManufacturePopup = ({open, onClose, onEdit, manufacture:manufactureProps}:Props) => {

    const [manufacture, setManufacture] = useState(manufactureProps)

    const onEditClick = () => {

        aleshinAxios.patch<{ item: Manufacture }>(
            'https://canstudy.ru/orderapi/Manufacturer',
            {
                item: manufacture
            }
        )
            .then((response) => {
                onEdit(response.data.item)
                onClose();
            })
    }

    return (
        <AleshinPopup
            open={open}
            onClose={onClose}
            title={'Редактировать мануфакутру'}
        >
            <div style = {{display:'flex', flexDirection:'column', gap:'1em'}}>

                <TextField
                    label = "Мануфакутра"
                    variant="standard"
                    value={manufacture.name}
                    onChange={e => setManufacture(prev => ({...prev, name: e.target.value}))}
                />

                <TextField
                    label = "Страна"
                    variant="standard"
                    value={manufacture.country}
                    onChange={e => setManufacture(prev => ({...prev, country: e.target.value}))}
                />

                <TextField
                    label = "Город"
                    variant="standard"
                    value={manufacture.city}
                    onChange={e => setManufacture(prev => ({...prev, city: e.target.value}))}
                />

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick ={() => onEditClick()}
                    >
                        Редактировать
                    </Button>
                </div>
            </div>
        </AleshinPopup>
    )
}

export default AleshinEditManufacturePopup;