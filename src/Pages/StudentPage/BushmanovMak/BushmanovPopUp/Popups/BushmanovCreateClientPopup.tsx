import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Client } from '../../Client/model'
import BushmanovPopUp, { Ipopup } from '../BushmanovPopUp'

type Props = Ipopup & {
    onCreate: (newClient: Client) => void;
}

export const BushmanovCreateClientPagePopup = ({ open, onClose, onCreate }: Props) => {

    const [ClientSex, setClientSex] = useState('')
    const [ClientFirstName, setClientFirstName] = useState('')
    const [ClientLastName, setClientLastName] = useState('')
    const [ClientEmail, setClientEmail] = useState('')
    const [ClientPhoneNumber, setClientPhoneNumber] = useState('')

    const onCreateClick = () => {
        onCreate({
            id: Math.random(),
            sex: ClientSex,
            firstName: ClientFirstName,
            lastName: ClientLastName,
            email: ClientEmail,
            phoneNumber: ClientPhoneNumber
        })
        onClose();
    }

    return (
        <BushmanovPopUp
            open={open}
            onClose={onClose}
            title={"Create Client"}
        >

            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="Client Sex"
                    variant="standard"
                    value={ClientSex}
                    onChange={e => setClientSex(e.target.value)}
                />

                <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                    <TextField
                        label="Client First Name"
                        variant="standard"
                        value={ClientFirstName}
                        onChange={e => setClientFirstName(e.target.value)}
                    />

                    <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                        <TextField
                            label="Client Last Name"
                            variant="standard"
                            value={ClientLastName}
                            onChange={e => setClientLastName(e.target.value)}
                        />

                        <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                            <TextField
                                label="Client Email"
                                variant="standard"
                                value={ClientEmail}
                                onChange={e => setClientEmail(e.target.value)}
                            />

                            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                                <TextField
                                    label="Client Phone Number"
                                    variant="standard"
                                    value={ClientPhoneNumber}
                                    onChange={e => setClientPhoneNumber(e.target.value)}
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
                </div>
            </div>
        </BushmanovPopUp>
    )
}

