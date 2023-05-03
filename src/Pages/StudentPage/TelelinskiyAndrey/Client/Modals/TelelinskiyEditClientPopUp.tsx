import {Button, TextField } from '@mui/material';
import  React, { useState } from 'react'
import TelelinskiyPopUp, {IPopup} from "../../../../../Components/Telelinskiy/TelelinskiyPopUp/TelelinskiyPopUP";
import { Client } from '../models';


type Props = IPopup & {
    client:Client,
    onEdit:(newClient:Client)=>void;
}
export const TelelinskiyEditClientPopUp =({open,onClose,onEdit,client:clientProps}:Props)=>{

    const [client, setClient]=useState<Client>(clientProps)

    const onEditClick=()=>{
        onEdit(client);

        onClose();
    }

    return (<div>
        <TelelinskiyPopUp
            open={open}
            onClose={onClose}
            title={'Изменение Клиента'}
        >
            <div style={{display:'flex',flexDirection:'column',gap:'1em'}}>

                <TextField
                    label="Client sex"
                    variant="standard"
                    value={client.sex}
                    onChange={e=>setClient(prev=>({...prev,sex:e.target.value}))}

                />
                <TextField
                    label="Client First Name"
                    variant="standard"
                    value={client.firstName}
                    onChange={e=>setClient(prev=>({...prev,firstName:e.target.value}))}

                />
                <TextField
                    label="Client Last Name"
                    variant="standard"
                    value={client.lastName}
                    onChange={e=>setClient(prev=>({...prev,lastName:e.target.value}))}

                />
                <TextField
                    label="Client Email"
                    variant="standard"
                    value={client.email}
                    onChange={e=>setClient(prev=>({...prev,email:e.target.value}))}

                />
                <TextField
                    label="Client PhoneNumber"
                    variant="standard"
                    value={client.phoneNumber}
                    onChange={e=>setClient(prev=>({...prev,phoneNumber:e.target.value}))}

                />
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onEditClick()}
                    >
                        Edit
                    </Button>
                </div>
            </div>
        </TelelinskiyPopUp>
    </div>)
}