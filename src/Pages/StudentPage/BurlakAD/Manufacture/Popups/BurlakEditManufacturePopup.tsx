import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {Manufacturer} from "../models";
import {BurlakAxios} from "../../BurlakADPage";
import BurlakPopup, {IPopup} from "../../../../../Components/Burlak/BurlakPopup/BurlakPopup";

type Props = IPopup & {
    onEdit: (newManufacturer: Manufacturer) => void;
    Manufacturer: Manufacturer
}
const BurlakEditManufacturerPopup = ({open, onClose, Manufacturer, onEdit}: Props) => {
    const [ManufacturerEdit, setManufacturerEdit] = useState(Manufacturer)
    const onEditClick = () => {
        BurlakAxios.patch<{ item:Manufacturer }>('https://canstudy.ru/orderapi/manufacturer',
            {
                item:{
                    id:ManufacturerEdit.id,
                    name:ManufacturerEdit.name,
                    city:ManufacturerEdit.city,
                    country:ManufacturerEdit.country,
                }
            })
            .then(res => {
                onEdit(ManufacturerEdit)
                onClose();
            })
    }
    return (
        <BurlakPopup
            title={'Создание категории'}
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
                    value={ManufacturerEdit.name}
                    onChange={e =>
                        setManufacturerEdit(prev => ({...prev, name: e.target.value}))
                    }
                />
                <TextField
                    label="Страна"
                    variant="standard"
                    fullWidth={true}
                    value={ManufacturerEdit.country}
                    onChange={e => setManufacturerEdit(prev => (
                        {...prev, country: e.target.value}
                    ))}
                />
                <TextField
                    label="Город"
                    variant="standard"
                    fullWidth={true}
                    value={ManufacturerEdit.city}
                    onChange={e => setManufacturerEdit(prev => (
                        {...prev, city: e.target.value}
                    ))}
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
        </BurlakPopup>
    );
};
export default BurlakEditManufacturerPopup;