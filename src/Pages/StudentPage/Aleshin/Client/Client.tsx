import React, {useEffect, useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { Client } from "./model";
import {AleshinCreateClientPopup} from "./Popups/AleshinCreateClientPopup";
import {AleshinEditClientPopup} from "./Popups/AleshinEditClientPopup";
import {aleshinAxios} from "../Aleshin";

const ClientPage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'sex',
            headerName: 'Пол',
            flex: 1
        },
        {
            field: 'firstName',
            headerName: 'Имя',
            flex: 1
        },
        {
            field: 'lastName',
            headerName: 'Фамилия',
            flex: 1
        },
        {
            field: 'email',
            headerName: 'Почта',
            flex: 1
        },
        {
            field: 'phoneNumber',
            headerName: 'Номер',
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

        aleshinAxios.delete(`https://canstudy.ru/orderapi/Client/${id}`)
            .then(response => {
                setClients(  prev =>
                    prev.filter(el => el.id !== id)
                )
            })
    }

    const [clients, setClients] = useState<Client[]>([])

    useEffect(() => {
        aleshinAxios.get<{ items: Client[] }>(
            'https://canstudy.ru/orderapi/Client/list'
        )
            .then((response) => {
                setClients(response.data.items)
            })
    },[])

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
                editClient.firstName = client.firstName;
                editClient.lastName = client.lastName;
                editClient.email = client.email;
                editClient.phoneNumber = client.phoneNumber;
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
                onEdit={(editedClient)=>onEdit(editedClient)}
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