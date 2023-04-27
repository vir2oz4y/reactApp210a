import React, {useState} from 'react'
import AleshinPopup, {IPopup} from "../../../../../Components/Aleshin/AleshinPopup/AleshinPopup";
import { TextField, Button } from "@mui/material";
import {Manufacture} from "../model";

type Props = IPopup & {
    manufacture: Manufacture,
    onEdit:(manufacture: Manufacture) => void;
}
export const AleshinEditManufacturePopup = ({open, onClose, onEdit, manufacture:manufactureProps}:Props) => {

    const [manufacture, setManufacture] = useState(manufactureProps)

    const onEditClick = () => {
        onEdit(manufacture)
        onClose();
    }

    return (
        <AleshinPopup
            open={open}
            onClose={onClose}
            title={'Редактировать мануфакутру'}
        >
            <div style = {{display:'flex', flexDirection:'column', gap:'1em'}}>

                <TextField
                    label = "Имя мануфакутры"
                    variant="standard"
                    value={manufacture.name}
                    onChange={e => setManufacture(prev => ({...prev, name: e.target.value}))}
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