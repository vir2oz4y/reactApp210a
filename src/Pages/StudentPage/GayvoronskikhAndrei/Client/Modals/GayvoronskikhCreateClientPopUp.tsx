import React, { useEffect, useState } from 'react';
import GayvoronskikhPopUp, { IPopUp } from '../../../../../Components/Gayvoronskikh/GayvoronskikhPopUp/GayvoronskikhPopUp'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Client } from "../model";
import axios from 'axios';
import { GayvoronskikhAxios } from "../../GayvoronskikhAndrei";

type Props = IPopUp & {
    onCreate: (newClient: Client) => void;
}

const GayvoronskikhCreateClientPopup = ({ open, onClose, onCreate }: Props) => {

    const createClient = () => {
        GayvoronskikhAxios.post<{ item: Client }>('https://canstudy.ru/orderapi/Client',
            {
                ...client
            })
            .then(res => {
                onCreate(res.data.item)
            })
    }


    const [client, setClient] = useState<Client>({
        sex: 0,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        id: 0,
    })

    const onCreateClick = () => {
        createClient();

        onClose();
    }

    return (
        <GayvoronskikhPopUp
            title={'Добавление клиента'}
            open={open}
            onClose={() => onClose()}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em',
                    paddingTop: '1em'
                }}
            >

                <FormControl fullWidth>
                    <InputLabel id="sex">���</InputLabel>
                    <Select
                        labelId="sex"
                        value={client.sex?.toString()}
                        label="пол"
                        onChange={(e) => setClient(prev => ({ ...prev, sex: e.target.value as any }))}
                    >
                        <MenuItem value={"0"}>мужской</MenuItem>
                        <MenuItem value={"1"}>женский</MenuItem>
                    </Select>
                </FormControl>


                <TextField
                    label="Имя"
                    variant="standard"
                    fullWidth={true}
                    value={client.firstName}
                    onChange={e => setClient(prev => ({ ...prev, firstName: e.target.value }))}
                />

                <TextField
                    label="Фамилия"
                    variant="standard"
                    fullWidth={true}
                    value={client.lastName}
                    onChange={e => setClient(prev => ({ ...prev, lastName: e.target.value }))}
                />

                <TextField
                    label="Почта"
                    variant="standard"
                    fullWidth={true}
                    value={client.email}
                    onChange={e => setClient(prev => ({ ...prev, email: e.target.value }))}
                />

                <TextField
                    label="Телефон"
                    variant="standard"
                    fullWidth={true}
                    value={client.phoneNumber}
                    onChange={e => setClient(prev => ({ ...prev, phoneNumber: e.target.value }))}
                />

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}
                    >
                        Добавить
                    </Button>
                </div>

            </div>
        </GayvoronskikhPopUp>
    );
};

export default GayvoronskikhCreateClientPopup;