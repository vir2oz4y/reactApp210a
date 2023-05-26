import React, { useState } from 'react';
import MuseichukDY, { IPopup } from "../../../../../Components/Museichuk/MuseichukDY/MuseichukDY";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Client } from "../models";
import { MuseichukAxios } from '../../MuseichukIO';

type Props = IPopup & {
    onEdit: (newClient: Client) => void;
    client: Client
}

const  MuseichukEditClientPopup = ({ open, onClose, client: clientEdit, onEdit }: Props) => {

    const [client, setClient] = useState(clientEdit)

    const onEditClick = () => {

        MuseichukAxios.patch<{ item: Client }>('https://canstudy.ru/orderapi/Client',
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
        <MuseichukDY
            title={'Changing the client'}
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
                    <InputLabel id="sex">ex</InputLabel>
                    <Select
                        labelId="sex"
                        value={client.sex}
                        label="sex"
                        onChange={(e) => setClient(prev => ({ ...prev, sex: e.target.value as any }))}
                    >
                        <MenuItem value={0}>Female</MenuItem>
                        <MenuItem value={1}>Male</MenuItem>
                    </Select>
                </FormControl>


                <TextField
                    label="FirstName"
                    variant="standard"
                    fullWidth={true}
                    value={client.firstName}
                    onChange={e => setClient(prev => ({ ...prev, firstName: e.target.value }))}
                />

                <TextField
                    label="LastName"
                    variant="standard"
                    fullWidth={true}
                    value={client.lastName}
                    onChange={e => setClient(prev => ({ ...prev, lastName: e.target.value }))}
                />

                <TextField
                    label="email"
                    variant="standard"
                    fullWidth={true}
                    value={client.email}
                    onChange={e => setClient(prev => ({ ...prev, email: e.target.value }))}
                />

                <TextField
                    label="phoneNumber"
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
                        To change
                    </Button>
                </div>

            </div>
        </MuseichukDY>
    );
};

export default  MuseichukEditClientPopup;