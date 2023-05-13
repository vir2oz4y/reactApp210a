import { Button, IconButton } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Client } from './model';
import { chernyakAxios } from "../ChernyakM";
import ChernyakCreateClientPopup from "./Popup/ChernyakCreateClientPopup";
import ChernyakEditClientPopup from "./Popup/ChernyakEditClientPopup";
import Box from "@mui/material/Box";


const ClientPage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            flex: .3
        },
        {
            field: 'sex',
            headerName: 'Пол',
            flex: 1,
            editable: true,
        },
        {
            field: 'firstName',
            headerName: 'Имя',
            flex: 1,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Фамилия',
            flex: 1,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Почта',
            flex: 1,
            editable: true,
        },
        {
            field: 'phoneNumber',
            headerName: 'Номер телефона',
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

                    <Button color={'primary'}
                            variant={'contained'}
                            onClick={()=>OneDeleteClick(e.row.id)}
                    >
                        Delete
                    </Button>
                </div>
            },
        }

    ];

    const OneDeleteClick = (id:number) => {

        chernyakAxios.delete(`https://canstudy.ru/orderapi/client/${id}`)
            .then(() => {
                setClients(prev => prev.filter(el => el.id !== id)
                )
            })
    }
    const [clients, setClients] = useState<Client[]>([

    ])

    useEffect(() => {
        chernyakAxios.get<{ items: Client[] }>(
            'https://canstudy.ru/orderapi/client/list'
        )
            .then((response) => {
                setClients(response.data.items);
            })
    }, [])


    const [ShowCreateClient, setShowCreateClient] = useState(false);
    const [editedClient, setShowEditClient] = useState <Client|null>(null)

    const onCreate = (Client: Client) => {
        setClients(prev => [...prev, Client])
    }

    const onEdit = (Client: Client) => {
        setClients(prev => {
            const curClient = prev.find(el => el.id === Client.id)!;

            if (curClient) {
                curClient.firstName = Client.firstName;
                curClient.lastName = Client.lastName;
                curClient.phoneNumber = Client.phoneNumber;
                curClient.email = Client.email;
                curClient.sex = Client.sex;
            }

            return [...prev]
        })
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

            {ShowCreateClient && <ChernyakCreateClientPopup
                open={ShowCreateClient}
                onClose={() => setShowCreateClient(false)}
                onCreate={(Client) => onCreate(Client)}

            />}

            {editedClient !== null && <ChernyakEditClientPopup
                open={editedClient !== null}
                onClose={()=> setShowEditClient(null)}
                client={editedClient}
                onEdit={(Client)=>onEdit(Client)}
            />}

            <Box sx={{height: '70vh', width: '100%'}}>
                <DataGrid
                    rows={clients}
                    columns={columns}
                />
            </Box>
        </div>
    );
};
export default ClientPage;