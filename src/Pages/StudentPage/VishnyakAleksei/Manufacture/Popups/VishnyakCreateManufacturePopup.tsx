import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {Manufacturer} from "../models";
import VishnyakPopup, {IPopup} from "../../../../../Components/Vishnyak/VishnyakPopup/VishnyakPopup";
import {VishnyakAxios} from "../../VishnyakAlekseiPage";
type Props = IPopup & {
    onCreate: (newManufacturer: Manufacturer) => void;
}
const VishnyakCreateManufacturerPopup = ({open, onClose, onCreate}: Props) => {
    const createManufacturer = () => {
        VishnyakAxios.post<{ item: Manufacturer }>('https://canstudy.ru/orderapi/manufacturer',
            {
                name: manufacturer.name,
                city: manufacturer.city,
                country:manufacturer.country
            })
            .then(res => {
                onCreate(res.data.item)
            })
    }
    const [manufacturer, setManufacturer] = useState<Manufacturer>({
        id: 0,
        name: '',
        country: '',
        city: ''
    })
    const onCreateClick = () => {
        createManufacturer();
        onClose();
    }
    return (
        <VishnyakPopup
            title={'Создание производителя'}
            open={open}
            onClose={() => onClose()}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em'
                }}
            >
                <TextField
                    label="Название производителя"
                    variant="standard"
                    fullWidth={true}
                    value={manufacturer.name}
                    onChange={e => setManufacturer(prev => (
                        {...prev, name: e.target.value}
                    ))}
                />
                <TextField
                    label="Страна"
                    variant="standard"
                    fullWidth={true}
                    value={manufacturer.country}
                    onChange={e => setManufacturer(prev => (
                        {...prev, country: e.target.value}
                    ))}
                />
                <TextField
                    label="Город"
                    variant="standard"
                    fullWidth={true}
                    value={manufacturer.city}
                    onChange={e => setManufacturer(prev => (
                        {...prev, city: e.target.value}
                    ))}
                />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}
                    >
                        Создать
                    </Button>
                </div>
            </div>
        </VishnyakPopup>
    );
};
export default VishnyakCreateManufacturerPopup;