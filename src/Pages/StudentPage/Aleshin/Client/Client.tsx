import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { Client } from "./model";
import AleshinPopup from '../../../../Components/Aleshin/AleshinPopup/AleshinPopup';
import {AleshinCreateClientPopup} from "./Popups/AleshinCreateClientPopup";
import {AleshinEditClientPopup} from "./Popups/AleshinEditClientPopup";

const ClientPage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'sex',
            headerName: 'Sex',
            flex: 1
        },
        {
            field: 'first name',
            headerName: 'First name',
            flex: 1
        },
        {
            field: 'last name',
            headerName: 'Last name',
            flex: 1
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1
        },
        {
            field: 'phonenumber',
            headerName: 'Phonenumber',
            flex: 1
        },
        {
            field: '',
            headerName: '',
            width: 300,
            renderCell: (e: any) => {
                return <div style={{ display: 'flex', gap:'1em' } }>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>setEditedClient(e.row)}
                    >
                        Редактировать
                    </Button>

                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onDeleteClick(e.row.id)}
                    >
                        Удалить
                    </Button>
                </div>
            },
        }
    ];


    const onDeleteClick = (id: number) => {
        setClients(  prev =>
            prev.filter(el => el.id !== id)
        )
    }

    const [clients, setClients] = useState<Client[]>([
        { id: 1, sex: 1, firstname: '51651651', lastname: 'ьасо', email: 'qwerty123@mail.ru', phonenumber: '+72283778800' },
        /*{ id: 1, name: 'Manufacture 1', city: 'City 1', country: 'Country 1' },
        { id: 1, name: 'Manufacture 1', city: 'City 1', country: 'Country 1' },
        { id: 1, name: 'Manufacture 1', city: 'City 1', country: 'Country 1' },
        { id: 1, name: 'Manufacture 1', city: 'City 1', country: 'Country 1' },
        { id: 1, name: 'Manufacture 1', city: 'City 1', country: 'Country 1' },
        { id: 1, name: 'Manufacture 1', city: 'City 1', country: 'Country 1' },
        { id: 1, name: 'Manufacture 1', city: 'City 1', country: 'Country 1' },*/
    ])

    const [showCreateClient, setCreateClient] = useState(false)
    const [editedClient, setEditedClient] = useState<Client|null>(null)

    const onCreate = (newClient: Client) => {
        setClients(prev=>[...prev, newClient]);
    }

    const onEdit = (client: Client) => {
        setClients(prev=> {
            const editClient = prev.find(el=>el.id === client.id)

            if (editClient){
                editClient.sex = client.sex;
                editClient.firstname = client.firstname;
                editClient.lastname = client.lastname;
                editClient.email = client.email;
                editClient.phonenumber = client.phonenumber;
            }

            return [...prev];
        });
    }

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <h1> Клиенты </h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick ={()=> setCreateClient(true)}
                    >
                        Добавить клиента
                    </Button>
                </div>
            </div>
            {showCreateClient && <AleshinCreateClientPopup
                open={showCreateClient}
                onClose={() => setCreateClient(false)}
                onCreate={(client) => onCreate(client)}
            />}

            {editedClient !== null && <AleshinEditClientPopup
                open={editedClient !== null}
                onClose={()=>setEditedClient(null)}
                client={editedClient}
                onEdit={(client)=>onEdit(client)}
            />}

            <Box sx={{ height: '70vh', width: '100%' }}>
                <DataGrid
                    rows={clients}
                    columns={columns}
                />
            </Box>
        </div>
    )
}

export default ClientPage;