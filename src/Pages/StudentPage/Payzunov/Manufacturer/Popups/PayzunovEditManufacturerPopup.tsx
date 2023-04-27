import React, {useState} from 'react';
import PayzunovPopup, {IPopup} from "../../../../../Components/Payzunov/PayzunovPopup/PayzunovPopup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Manufacturer} from "../model";

type Props = IPopup & {
    manufacturer: Manufacturer,
    onEdit: (newManufacturer: Manufacturer) => void;
}

const PayzunovEditManufacturerPopup = ({open, onClose, onEdit, manufacturer:manufacturerProps}:Props)=> {

    const [manufacturer, setManufacturer] = useState(manufacturerProps)

    const onEditClick = () => {
        onEdit(manufacturer);

        onClose();
    }

    return (
        <PayzunovPopup
            open ={open}
            onClose ={onClose}
            title={"Создание категории"}
        >
            <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
                <TextField
                    label="Имя категории"
                    variant="outlined"
                    value={manufacturer.name}
                    onChange={e => setManufacturer(prev=>({...prev, name: e.target.value}))}
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