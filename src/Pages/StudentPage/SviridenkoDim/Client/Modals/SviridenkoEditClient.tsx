import {Button,TextField } from '@mui/material';
import  React, { useState } from 'react'
import TelelinskiyPopUp, {IPopup} from "../../../../../Components/Sviridenko/SviridenkoDDD/SviridenkoDDD";
import { Client } from '../models';
import {SviridenkoAxios} from "../../SviridenkoDimPage";
import {Category} from "../../Category/models";


type Props = IPopup & {
    client: Client,

    onEdit: (client: Client) => void;
}

export const TelelinskiyEditClientPopUp = ({ open, onClose, onEdit, client:ClientProps}: Props) => {

    const [client, setClient] = useState(ClientProps)


    const onEditClick = () => {
        SviridenkoAxios.patch<{item: Client}>(
            'https://canstudy.ru/orderapi/client',
            {
                item: {
                    ...client,
                    sex: parseInt(client.sex, 10)
                }
            }
        )
            .then((response) => {
                onEdit(response.data.item);
                onClose();
            })
    }

    return (
        <TelelinskiyPopUp
            open={open}
            onClose={onClose}
            title={"Edit Client"}
        >
            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="Client sex"
                    variant="standard"
                    value={client.sex}
                    onChange={e => setClient(prev => ({
                        ...prev, sex: e.target.value
                    }))}
                />

                <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                    <TextField
                        label="Client name"
                        variant="standard"
                        value={client.firstName}
                        onChange={e => setClient(prev => ({
                            ...prev, firstName: e.target.value
                        }))}
                    />

                    <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                        <TextField
                            label="Client city"
                            variant="standard"
                            value={client.lastName}
                            onChange={e => setClient(prev => ({
                                ...prev, lastName: e.target.value
                            }))}
                        />

                        <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                            <TextField
                                label="Client country"
                                variant="standard"
                                value={client.email}
                                onChange={e => setClient(prev => ({
                                    ...prev, email: e.target.value
                                }))}
                            />

                            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                                <TextField
                                    label="Client country"
                                    variant="standard"
                                    value={client.phoneNumber}
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
        </TelelinskiyPopUp>
    )
}