import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Client } from "../model";
import { GayvoronskikhAxios } from "../../GayvoronskikhAndrei";
import GayvoronskikhPopUp, { IPopUp } from '../../../../../Components/Gayvoronskikh/GayvoronskikhPopUp/GayvoronskikhPopUp';

type Props = IPopUp & {
    onEdit: (newClient: Client) => void;
    client: Client
}

const GayvoronskikhEditClientPopup = ({ open, onClose, client: clientEdit, onEdit }: Props) => {

    const [client, setClient] = useState(clientEdit)

    const onEditClick = () => {

        GayvoronskikhAxios.patch<{ item: Client }>('https://canstudy.ru/orderapi/Client',
            {
                item: {
                    ...client
                }
            })
            .then(res => {
                onEdit(res.data.item)
                onClose();
            })
    }

    return (
        <GayvoronskikhPopUp
            title={'��������� �������'}
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
                    <InputLabel id="sex">пол</InputLabel>
                    <Select
                        labelId="sex"
                        value={client.sex}
                        label="���"
                        onChange={(e) => setClient(prev => ({ ...prev, sex: e.target.value as any }))}
                    >
                        <MenuItem value={0}>мужской</MenuItem>
                        <MenuItem value={1}>женский</MenuItem>
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
                        onClick={() => onEditClick()}
                    >
                        Изменить
                    </Button>
                </div>

            </div>
        </GayvoronskikhPopUp>
    );
};

export default GayvoronskikhEditClientPopup;