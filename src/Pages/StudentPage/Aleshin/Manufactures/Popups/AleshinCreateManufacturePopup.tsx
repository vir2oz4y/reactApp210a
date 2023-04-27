import React, {useState} from 'react'
import AleshinPopup, {IPopup} from "../../../../../Components/Aleshin/AleshinPopup/AleshinPopup";
import { TextField, Button } from "@mui/material";
import {Manufacture} from "../model";

type Props = IPopup & {
    onCreate:(newManufacture: Manufacture) => void;
}
export const AleshinCreateManufacturePopup = ({open, onClose, onCreate}:Props) => {

    const [manufactureName, setManufactureName] = useState('')

    const onCreateClick = () => {
        onCreate({
            id: Math.random(),
            name: manufactureName,
        })
        onClose();
    }

    return (
        <AleshinPopup
            open={open}
            onClose={onClose}
            title={'Создать мануфактуру' }
        >
            <div style = {{display:'flex', flexDirection:'column', gap:'1em'}}>
                <TextField
                    label = "Имя мануфактуры"
                    variant="standard"
                    value={manufactureName}
                    onChange={e => setManufactureName(e.target.value)}
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