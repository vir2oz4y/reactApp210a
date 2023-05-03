import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { Client } from './model';
import BushmanovPopUp from "../BushmanovPopUp/BushmanovPopUp";
import { BushmanovCreateClientPagePopup } from '../BushmanovPopUp/Popups/BushmanovCreateClientPopup';
import {BushmanovEditClientPagePopup} from "../BushmanovPopUp/Popups/BushmanovEditClientPopup";

const ClientPage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            flex: .3
        },
        {
            field: 'sex',
            headerName: 'Sex',
            flex: 1,
            editable: true,
        },
        {
            field: 'firstName',
            headerName: 'First name',
            flex: 1,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            flex: 1,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
            editable: true,
        },
        {
            field: 'phoneNumber',
            headerName: 'Phone number',
            flex: 1,
            editable: true,
        },
        {
            field: '',
            headerName: '',
            width: 200,
            renderCell: (e: any) => {
                return <div style={{display: 'flex', gap: '1em'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick = {()=>setShowEditClient(e.row)}
                    >
                        Edit
                    </Button>

                    <Button color={'primary'} variant={'contained'} onClick={()=>OneDeleteClick(e.row.id)}>
                        Delete
                    </Button>
                </div>
            },
        }

    ];

    const OneDeleteClick = (id:number) => {
        setCategories(prev => prev.filter(el=>el.id !== id)
        )
    }
    const [categories, setCategories] = useState<Client[]>([
        { id: 1, sex: "Male", firstName: "Jamal", lastName: "Gregory", email: "urMhouse@mail.ru", phoneNumber: "+13372281488"},
        { id: 2, sex: "Male", firstName: "Jamal", lastName: "Gregory", email: "urMhouse@mail.ru", phoneNumber: "+13372281488"},
        { id: 3, sex: "Male", firstName: "Jamal", lastName: "Gregory", email: "urMhouse@mail.ru", phoneNumber: "+13372281488"},
        { id: 4, sex: "Male", firstName: "Jamal", lastName: "Gregory", email: "urMhouse@mail.ru", phoneNumber: "+13372281488"},
        { id: 5, sex: "Male", firstName: "Jamal", lastName: "Gregory", email: "urMhouse@mail.ru", phoneNumber: "+13372281488"},
        { id: 6, sex: "Male", firstName: "Jamal", lastName: "Gregory", email: "urMhouse@mail.ru", phoneNumber: "+13372281488"},
        { id: 7, sex: "Male", firstName: "Jamal", lastName: "Gregory", email: "urMhouse@mail.ru", phoneNumber: "+13372281488"},
    ])

    const [ShowCreateClient, setShowCreateClient] = useState(false);
    const [editedClient, setShowEditClient] = useState <Client|null>(null);



    const onCreate = (newClient: Client) => {
        setCategories(prev => [...prev, newClient]);
    }
    const onEdit = (Client: Client) => {
        setCategories(prev => {
            const editClient = prev.find(el => el.id === Client.id)

            if(editClient) {
                editClient.sex = Client.sex;
                editClient.firstName = Client.firstName;
                editClient.lastName = Client.lastName;
                editClient.email = Client.email;
                editClient.phoneNumber = Client.phoneNumber;
            }
            return [...prev];
        });
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>
                    Клиенты
                </h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setShowCreateClient(true)}
                    >
                        Добавить клиента
                    </Button>
                </div>

            </div>

            {ShowCreateClient && <BushmanovCreateClientPagePopup
                open={ShowCreateClient}
                onClose={() => setShowCreateClient(false)}
                onCreate={(Client) => onCreate(Client)}

            />}

            {editedClient !== null && <BushmanovEditClientPagePopup
                open={editedClient !== null}
                onClose={()=> setShowEditClient(null)}
                Client={editedClient}
                onEdit={(Client)=>onEdit(Client)}
            />}

            <Box sx={{height: '70vh', width: '100%'}}>
                <DataGrid
                    rows={categories}
                    columns={columns}
                />
            </Box>
        </div>
    );
};

export default ClientPage;