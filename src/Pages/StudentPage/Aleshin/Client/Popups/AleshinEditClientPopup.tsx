import React, {useState} from 'react'
import AleshinPopup, {IPopup} from "../../../../../Components/Aleshin/AleshinPopup/AleshinPopup";
import { TextField, Button } from "@mui/material";
import {Client} from "../model";

type Props = IPopup & {
    client: Client,
    onEdit:(newClient: Client) => void;
}
export const AleshinEditClientPopup = ({open, onClose, onEdit, client:clientProps}:Props) => {

    const [client, setClient] = useState(clientProps)

    const onEditClick = () => {
        onEdit(client)
        onClose();
    }

    return (
        <AleshinPopup
            open={open}
            onClose={onClose}
            title={'Редактировать клиента'}
        >
            <div style = {{display:'flex', flexDirection:'column', gap:'1em'}}>

                <TextField
                    label = "Имя клиента"
                    variant="standard"
                    value={client.firstname}
                    onChange={e => setClient(prev => ({...prev, firstname: e.target.value}))}
                />

                <TextField
                    label = "Фамилия клиента"
                    variant="standard"
                    value={client.lastname}
                    onChange={e => setClient(prev => ({...prev, lastname: e.target.value}))}
                />

                <TextField
                    label = "Почта клиента"
                    variant="standard"
                    value={client.email}
                    onChange={e => setClient(prev => ({...prev, email: e.target.value}))}
                />

                <TextField
                    label = "Телефон клиента"
                    variant="standard"
                    value={client.phonenumber}
                    onChange={e => setClient(prev => ({...prev, phonenumber: e.target.value}))}
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

export default AleshinEditClientPopup;