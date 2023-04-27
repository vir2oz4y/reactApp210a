import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Manufacturer } from '../../Manufacturer/model'
import AnikeevaPopUp, { Ipopup } from '../AnikeevaPopUp'

type Props = Ipopup & {
    onCreate: (newManufacturer: Manufacturer) => void;
}

export const AnikeevaCreateManufacturerPagePopup = ({ open, onClose, onCreate }: Props) => {

    const [ManufacturerName, setManufacturerName] = useState('')
    const [ManufacturerCity, setManufacturerCity] = useState('')
    const [ManufacturerCountry, setManufacturerCountry] = useState('')

    const onCreateClick = () => {
        onCreate({
            id: Math.random(),
            name: ManufacturerName,
            city: ManufacturerCity,
            country: ManufacturerCountry
        })
        onClose();
    }

    return (
        <AnikeevaPopUp
            open={open}
            onClose={onClose}
            title={"Create Manufacturer"}
        >
            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="Manufacturer name"
                    variant="standard"
                    value={ManufacturerName}
                    onChange={e => setManufacturerName(e.target.value)}
                />

                <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                    <TextField
                        label="City"
                        variant="standard"
                        value={ManufacturerCity}
                        onChange={e => setManufacturerCity(e.target.value)}
                    />

                    <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                        <TextField
                            label="Country"
                            variant="standard"
                            value={ManufacturerCountry}
                            onChange={e => setManufacturerCountry(e.target.value)}
                        />

                <div style = {{display: 'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}
                    >
                        Create
                    </Button>
                </div>
            </div>
                </div>
                    </div>
        </AnikeevaPopUp>
    )
}

