import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import  React, { useState } from 'react'
import SviridenkoDDD , {IPopup} from "../../../../../Components/Sviridenko/SviridenkoDDD/SviridenkoDDD";
import { Client } from '../models';
import {SviridenkoAxios} from "../../SviridenkoDimPage";



type Props = IPopup & {
    onEdit: (newClient: Client) => void;
    client: Client
}

const SviridenkoEditClient = ({open, onClose, client:clientEdit, onEdit}: Props) => {

    const [client, setClient] = useState(clientEdit)

    const onEditClick = () => {

        SviridenkoAxios.patch<{ item:Client }>('https://canstudy.ru/orderapi/Client',
            {
                item:{
                    ...client
                }
            })
            .then(res => {
                onEdit(res.data.item)
                onClose();
            })
    }

    return (
        <SviridenkoDDD
            title={'Изменение клиента'}
            open={open}
            onClose={() => onClose()}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em'
                }}
            >
                <FormControl fullWidth>
                    <InputLabel id="sex">Пол</InputLabel>
                    <Select
                        labelId="sex"
                        value={client.sex}
                        label="Пол"
                        onChange={(e)=>setClient(prev=>({...prev, sex:e.target.value as any}))}
                    >
                        <MenuItem value={0}>Женский</MenuItem>
                        <MenuItem value={1}>Мужской</MenuItem>
                    </Select>
                </FormControl>


                <TextField
                    label="Имя"
                    variant="standard"
                    fullWidth={true}
                    value={client.firstName}
                    onChange={e=>setClient(prev=>({...prev,  firstName:e.target.value}))}
                />

                <TextField
                    label="Фамилия"
                    variant="standard"
                    fullWidth={true}
                    value={client.lastName}
                    onChange={e=>setClient(prev=>({...prev,  lastName:e.target.value}))}
                />

                <TextField
                    label="Почта"
                    variant="standard"
                    fullWidth={true}
                    value={client.email}
                    onChange={e=>setClient(prev=>({...prev,  email:e.target.value}))}
                />

                <TextField
                    label="Телефон"
                    variant="standard"
                    fullWidth={true}
                    value={client.phoneNumber}
                    onChange={e=>setClient(prev=>({...prev,  phoneNumber:e.target.value}))}
                />

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onEditClick()}
                    >
                        Изменить
                    </Button>
                </div>

            </div>
        </SviridenkoDDD>
    );
};


export default SviridenkoEditClient;