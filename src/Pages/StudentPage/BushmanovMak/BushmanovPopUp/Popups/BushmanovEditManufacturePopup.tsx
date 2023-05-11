import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Manufacture } from '../../Manufacture/model'
import BushmanovPopUp, { Ipopup } from '../BushmanovPopUp'
import {bushmanovAxios} from "../../BushmanovMakPage";

type Props = Ipopup & {
    manufacture: Manufacture,

    onEdit: (Manufacture: Manufacture) => void;
}

export const BushmanovEditManufacturePagePopup = ({ open, onClose, onEdit, manufacture:ManufactureProps}: Props) => {

    const [Manufacture, setManufacture] = useState(ManufactureProps)


    const onEditClick = () => {
        bushmanovAxios.patch<{item: Manufacture}>(
            'https://canstudy.ru/orderapi/category',
            {
                item: Manufacture
            }
        )
            .then((response) => {
                onEdit(response.data.item);
                onClose();
            })
    }

    return (
        <BushmanovPopUp
            open={open}
            onClose={onClose}
            title={"Edit Manufacture"}
        >
            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="Manufacture name"
                    variant="standard"
                    value={Manufacture.name}
                    onChange={e => setManufacture(prev => ({
                        ...prev, name: e.target.value
                    }))}
                />
                <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                    <TextField
                        label="Manufacture city"
                        variant="standard"
                        value={Manufacture.city}
                        onChange={e => setManufacture(prev => ({
                            ...prev, city: e.target.value
                        }))}
                    />

                    <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                        <TextField
                            label="Manufacture country"
                            variant="standard"
                            value={Manufacture.country}
                            onChange={e => setManufacture(prev => ({
                                ...prev, country: e.target.value
                            }))}
                        />

                <div style = {{display: 'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onEditClick()}
                    >
                        Edit
                    </Button>
                </div>
            </div>
                </div>
            </div>
        </BushmanovPopUp>
    )
}

