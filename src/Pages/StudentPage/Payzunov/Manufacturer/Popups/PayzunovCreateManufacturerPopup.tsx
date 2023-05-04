import React, {useState} from 'react';
import PayzunovPopup, {IPopup} from "../../../../../Components/Payzunov/PayzunovPopup/PayzunovPopup";
import TextField from "@mui/material/TextField";
import {Button, ListItemAvatarProps, } from "@mui/material";
import {Manufacturer} from "../model";

type Props = IPopup & {
    onCreate: (newManufacturer: Manufacturer) => void;
}

export const PayzunovCreateManufacturerPopup = ({open, onClose, onCreate}:Props) => {

    const [manufacturer, setManufacturer] = useState<Manufacturer>({
        id: Math.random(),
        city: "",
        country: "",
        name: ""
    })

    const onCrateClick = () => {
        onCreate(manufacturer)

        onClose();
    }

    return (
        <PayzunovPopup
            open ={open}
            onClose ={onClose}
            title={"Создание производителя"}
        >
            <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
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
                        color = {'primary'}
                        variant = {'contained'}
                        onClick={() => onCrateClick()}
                    >
                        Создать
                    </Button>

                </div>
            </div>
        </PayzunovPopup>
    );
};

export default PayzunovCreateManufacturerPopup;