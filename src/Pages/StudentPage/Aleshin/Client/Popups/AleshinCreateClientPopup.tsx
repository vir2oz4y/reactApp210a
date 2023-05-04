import React, {useState} from 'react'
import AleshinPopup, {IPopup} from "../../../../../Components/Aleshin/AleshinPopup/AleshinPopup";
import { TextField, Button } from "@mui/material";
import {Client} from "../model";
import {Manufacture} from "../../Manufactures/model";

type Props = IPopup & {
    onCreate:(newClient: Client) => void;
}
export const AleshinCreateClientPopup = ({open, onClose, onCreate}:Props) => {

    const [client, setClient] = useState<Client>({
        id: Math.random(),
        sex: Math.random(),
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: ""
    })

    const onCreateClick = () => {
        onCreate(client)

        onClose();
    }

    return (
        <AleshinPopup
            open={open}
            onClose={onClose}
            title={'Создать клиента' }
        >
            <div style = {{display:'flex', flexDirection:'column', gap:'1em'}}>
                <TextField
                    label = "Имя клиента"
                    variant="standard"
                    value={client.firstname}
                    onChange={e => setClient(prev=>({...prev, firstname:e.target.value}))}
                />

                <TextField
                    label = "Фамилия клиента"
                    variant="standard"
                    value={client.lastname}
                    onChange={e => setClient(prev=>({...prev, lastname:e.target.value}))}
                />

                <TextField
                    label = "Почта клиента"
                    variant="standard"
                    value={client.email}
                    onChange={e => setClient(prev=>({...prev, email:e.target.value}))}
                />

                <TextField
                    label = "Телефон клиента"
                    variant="standard"
                    value={client.phonenumber}
                    onChange={e => setClient(prev=>({...prev, phonenumber:e.target.value}))}
                />
                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick ={() => onCreateClick()}
                    >
                        Создать
                    </Button>
                </div>
            </div>
        </AleshinPopup>
    )
}