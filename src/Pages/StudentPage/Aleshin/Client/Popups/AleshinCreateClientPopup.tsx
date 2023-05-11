import React, {useState} from 'react'
import AleshinPopup, {IPopup} from "../../../../../Components/Aleshin/AleshinPopup/AleshinPopup";
import {TextField, Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {Client} from "../model";
import {aleshinAxios} from "../../Aleshin";

type Props = IPopup & {
    onCreate:(newClient: Client) => void;
}
export const AleshinCreateClientPopup = ({open, onClose, onCreate}:Props) => {

    const [client, setClient] = useState<Client>({
        id: 0,
        sex: 0,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
    })

    const onCreateClick = () => {

        aleshinAxios.post<{ item: Client }>(
            'https://canstudy.ru/orderapi/client',
            {

                ...client,
                sex:parseInt(client.sex?.toString(), 10)
            }
        )
            .then((response) => {

                onCreate(response.data.item)
                onClose();

            })
    }

    return (
        <AleshinPopup
            open={open}
            onClose={() => onClose()}
            title={'Создать клиента' }
        >
            <div
                style = {{
                    display:'flex',
                    flexDirection:'column',
                    gap:'1em'
                }}
            >
                <FormControl fullWidth>
                    <InputLabel id="sex">Пол</InputLabel>
                    <Select
                        labelId="sex"
                        value={client.sex?.toString()}
                        label="Пол"
                        onChange={ e =>setClient(prev=>({...prev, sex:e.target.value as any}))}
                        >
                        <MenuItem value={"0"}>Женский</MenuItem>
                        <MenuItem value={"1"}>Мужской</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    label = "Имя клиента"
                    variant="standard"
                    value={client.firstName}
                    onChange={e => setClient(prev=>({...prev, firstName:e.target.value}))}
                />

                <TextField
                    label = "Фамилия клиента"
                    variant="standard"
                    value={client.lastName}
                    onChange={e => setClient(prev=>({...prev, lastName:e.target.value}))}
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
                    value={client.phoneNumber}
                    onChange={e => setClient(prev=>({...prev, phoneNumber:e.target.value}))}
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