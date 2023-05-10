import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import GayvoronskikhPopUp, { IPopUp } from '../../../../../Components/Gayvoronskikh/GayvoronskikhPopUp/GayvoronskikhPopUp'
import { Manufacturer } from '../model'

type Props = IPopUp & {
    manufacturer: Manufacturer,
    onEdit: (manufacturer: Manufacturer) => void;
}

export const GayvoronskikhEditManufacturerPopUp = ({ open, onClose,onEdit,manufacturer:manufacturerProps}:Props) => {

    const [manufacturer, setManufacturer] = useState(manufacturerProps)
    const onEditClick = () => {
        onEdit(manufacturer);
        onClose();
    }

    return (
        <div>
            <GayvoronskikhPopUp
            open={open}
            onClose={onClose}
            title={'Edit Manifacturer'}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>

                    <TextField
                        id="standard-basic"
                        label="Standard"
                        variant="standard"
                        value={manufacturer.name}
                        onChange={(e) => setManufacturer(prev => ({
                            ...prev,
                            name: e.target.value
                        }))}
                    />
                    <TextField
                        id="standard-basic"
                        label="Standard"
                        variant="standard"
                        value={manufacturer.city}
                        onChange={(e) => setManufacturer(prev => ({
                            ...prev,
                            city: e.target.value
                        }))}
                    />
                    <TextField
                        id="standard-basic"
                        label="Standard"
                        variant="standard"
                        value={manufacturer.country}
                        onChange={(e) => setManufacturer(prev => ({
                            ...prev,
                            country: e.target.value
                        }))}
                    />
                        <div style={{ display: 'flex', justifyContent:'center'}}>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                            onClick={()=>onEditClick()}
                        >
                                 Edit
                         </Button>
                        </div>
                </div>
        </GayvoronskikhPopUp>
    </div>
    )
}