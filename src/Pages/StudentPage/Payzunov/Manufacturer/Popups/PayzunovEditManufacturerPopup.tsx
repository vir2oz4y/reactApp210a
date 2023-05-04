import React, {useState} from 'react';
import PayzunovPopup, {IPopup} from "../../../../../Components/Payzunov/PayzunovPopup/PayzunovPopup";
import TextField from "@mui/material/TextField";
import {Button, ListItemAvatarProps} from "@mui/material";
import {Manufacturer} from "../model";

type Props = IPopup & {
    manufacturer: Manufacturer,
    onEdit: (newManufacturer: Manufacturer) => void;
}


export const PayzunovEditManufacturerPopup = ({open, onClose, manufacturer: manufacturerProps, onEdit}:Props)=> {

    const [manufacturer, setManufacturer] = useState<Manufacturer>
    (manufacturerProps)

    const onEditClick = () => {
        onEdit(manufacturer);

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
                    value={manufacturer.country}
                    onChange={e => setManufacturer(prev=>({...prev, country: e.target.value}))}
                />

                <TextField
                    label="Город"
                    variant="standard"
                    value={manufacturer.city}
                    onChange={e => setManufacturer(prev=>({...prev, city: e.target.value}))}
                />

                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button
                        color = {'primary'}
                        variant = {'contained'}
                        onClick={() => onEditClick()}
                    >
                        Изменить
                    </Button>

                </div>
            </div>
        </PayzunovPopup>
    );
};

export default PayzunovEditManufacturerPopup;