import React, {useState} from 'react';
import PayzunovPopup, {IPopup} from "../../../../../Components/Payzunov/PayzunovPopup/PayzunovPopup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Manufacturer} from "../model";

type Props = IPopup & {
    onCreate: (newManufacturer: Manufacturer) => void;
}

const PayzunovCreateManufacturerPopup = ({open, onClose, onCreate}:Props) => {

    const [manufacturerName, setManufacturerName] = useState('')

    const onCrateClick = () => {
        onCreate({
            id: Math.random(),
            name: manufacturerName
        })
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
                    value={manufacturerName}
                    onChange={e => setManufacturerName(e.target.value)}
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