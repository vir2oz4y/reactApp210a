import {Button, ListItemAvatarProps, TextField} from '@mui/material'
import React, {useState} from 'react'
import ChernyakPopup, { IPopup }from "../../../../../Components/Chernyak/ChernyakPopup/ChernyakPopup";
import {Manufacture} from "../model";

type Props = IPopup & {
    manufacture: Manufacture,
    onEdit: (newManufacture: Manufacture) => void;
}

export const ChernyakEditManufacturePopup = ({open, onClose, manufacture: manufactureProps, onEdit}: Props) => {

    const [manufacture, setManufacture] = useState<Manufacture>(manufactureProps)

    const onEditClick = () => {
        onEdit(manufacture)

        onClose();
    }

    return (
        <ChernyakPopup
            open={open}
            onClose={onClose}
            title={'Изменение производителя'}
        >
            <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>

                <TextField
                    label="Название"
                    variant="standard"
                    value={manufacture.name}
                    onChange={e => setManufacture(prev => ({...prev, name: e.target.value}))}
                />

                <TextField
                    label="Страна"
                    variant="standard"
                    value={manufacture.country}
                    onChange={e => setManufacture(prev => ({...prev, country: e.target.value}))}
                />


                <TextField
                    label="Город"
                    variant="standard"
                    value={manufacture.city}
                    onChange={e => setManufacture(prev => ({...prev, city: e.target.value}))}
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
        </ChernyakPopup>
    )
}