import {Button, ListItemAvatarProps, TextField} from '@mui/material'
import React, { useState } from 'react'
import ChernyakPopup, { IPopup }from "../../../../../Components/Chernyak/ChernyakPopup/ChernyakPopup";
import { Client } from "../model";

type Props = IPopup & {
    onCreate: (newManufacture: Client) => void;
}

export const ChernyakCreateClientPopup = ({ open, onClose, onCreate }: Props) => {

    const [client, setClient] = useState<Client>({
        id: Math.random(),
        email: "",
        phoneNumber: "",
        firstName: "",
        lastName: "",
    })

    const onCreateClick = () => {
        onCreate(client)

        onClose();
    }

    return (
        <ChernyakPopup
            open={open}
            onClose={onClose}
            title={'Создание клиента'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>

                <TextField
                    label="Имя"
                    variant="standard"
                    value={client.firstName}
                    onChange={e => setClient(prev=>({...prev, firstName:e.target.value}))}
                />

                <TextField
                    label="Фамилия"
                    variant="standard"
                    value={client.lastName}
                    onChange={e => setClient(prev=>({...prev, lastName:e.target.value}))}
                />

                <TextField
                    label="Номер телефона"
                    variant="standard"
                    value={client.phoneNumber}
                    onChange={e => setClient(prev=>({...prev, phoneNumber:e.target.value}))}
                />


                <TextField
                    label="Почта"
                    variant="standard"
                    value={client.email}
                    onChange={e => setClient(prev=>({...prev, email:e.target.value}))}
                />




                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}
                    >
                        Create
                    </Button>

                </div>
            </div>
        </ChernyakPopup>
    );
}