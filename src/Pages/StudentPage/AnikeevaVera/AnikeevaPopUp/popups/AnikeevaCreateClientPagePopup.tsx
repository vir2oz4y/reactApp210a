import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Client } from '../../Client/model'
import AnikeevaPopUp, { Ipopup } from '../AnikeevaPopUp'

type Props = Ipopup & {
    onCreate: (newClient: Client) => void;
}

export const AnikeevaCreateClientPagePopup = ({ open, onClose, onCreate }: Props) => {

    const [ClientFirstName, setClientFirstName] = useState('')
    const [ClientLastName, setClientLastName] = useState('')
    const [ClientEmail, setClientEmail] = useState('')
    const [ClientPhoneNumber, setClientPhoneNumber] = useState('')

    const onCreateClick = () => {
        onCreate({
            id: Math.random(),
            sex: Math.random(),
            firstName: ClientFirstName,
            lastName: ClientLastName,
            email: ClientEmail,
            phoneNumber: ClientPhoneNumber
        })
        onClose();
    }

    return (
        <AnikeevaPopUp
            open={open}
            onClose={onClose}
            title={"Create Client"}
        >
            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="Client name"
                    variant="standard"
                    value={ClientFirstName}
                    onChange={e => setClientFirstName(e.target.value)}
                /></div>

                <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                    <TextField
                        label="City"
                        variant="standard"
                        value={ClientLastName}
                        onChange={e => setClientLastName(e.target.value)}
                    /></div>

                    <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                        <TextField
                            label="Country"
                            variant="standard"
                            value={ClientEmail}
                            onChange={e => setClientEmail(e.target.value)}
                        /></div>

                        <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                            <TextField
                                label="Country"
                                variant="standard"
                                value={ClientPhoneNumber}
                                onChange={e => setClientPhoneNumber(e.target.value)}
                            /> </div>

                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                            <Button
                                color={'primary'}
                                variant={'contained'}
                                onClick={() => onCreateClick()}
                            >
                                Create
                            </Button>
                        </div>
        </AnikeevaPopUp>
    )
}

