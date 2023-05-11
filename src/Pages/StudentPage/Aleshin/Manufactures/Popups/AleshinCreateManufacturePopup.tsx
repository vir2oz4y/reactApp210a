import React, {useState} from 'react'
import AleshinPopup, {IPopup} from "../../../../../Components/Aleshin/AleshinPopup/AleshinPopup";
import { TextField, Button } from "@mui/material";
import {Manufacture} from "../model";
import {aleshinAxios} from "../../Aleshin";
import {Client} from "../../Client/model";

type Props = IPopup & {
    onCreate:(newManufacture: Manufacture) => void;
}
export const AleshinCreateManufacturePopup = ({open, onClose, onCreate}:Props) => {

    const [manufacture, setManufacture] = useState<Manufacture>({
        id: 0,
        city: "",
        country: "",
        name: ""
    })

    const onCreateClick = () => {

        aleshinAxios.post<{ item: Manufacture }>(
            'https://canstudy.ru/orderapi/Manufacturer',
            {

                ...manufacture,
            }
        )
            .then((response) => {

                onCreate(response.data.item)
                onClose();

            })
    }

    return (
        <AleshinPopup
            open={open}
            onClose={onClose}
            title={'Создать мануфактуру' }
        >
            <div style = {{display:'flex', flexDirection:'column', gap:'1em'}}>

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

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick ={() => onCreateClick()}
                    >
                        Создать
                    </Button>
                </div>
            </div>
        </AleshinPopup>
    )
}