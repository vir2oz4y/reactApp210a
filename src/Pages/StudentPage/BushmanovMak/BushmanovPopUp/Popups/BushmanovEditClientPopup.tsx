import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Client } from '../../Client/model'
import BushmanovPopUp, { Ipopup } from '../BushmanovPopUp'

type Props = Ipopup & {
    Client: Client,

    onEdit: (Client: Client) => void;
}

export const BushmanovEditClientPagePopup = ({ open, onClose, onEdit, Client:ClientProps}: Props) => {

    const [Client, setClient] = useState(ClientProps)


    const onEditClick = () => {
        onEdit(Client);
        onClose();
    }

    return (
        <BushmanovPopUp
            open={open}
            onClose={onClose}
            title={"Edit Client"}
        >
            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="Client sex"
                    variant="standard"
                    value={Client.sex}
                    onChange={e => setClient(prev => ({
                        ...prev, sex: e.target.value
                    }))}
                />

            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="Client name"
                    variant="standard"
                    value={Client.firstName}
                    onChange={e => setClient(prev => ({
                        ...prev, firstName: e.target.value
                    }))}
                />

                <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                    <TextField
                        label="Client city"
                        variant="standard"
                        value={Client.lastName}
                        onChange={e => setClient(prev => ({
                            ...prev, lastName: e.target.value
                        }))}
                    />

                    <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                        <TextField
                            label="Client country"
                            variant="standard"
                            value={Client.email}
                            onChange={e => setClient(prev => ({
                                ...prev, email: e.target.value
                            }))}
                        />

                        <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                            <TextField
                                label="Client country"
                                variant="standard"
                                value={Client.phoneNumber}
                                onChange={e => setClient(prev => ({
                                    ...prev, phoneNumber: e.target.value
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
            </div>
            </div>
        </BushmanovPopUp>
    )
}

