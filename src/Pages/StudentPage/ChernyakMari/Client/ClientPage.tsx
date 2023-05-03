import React, {useState} from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Box, Button, dividerClasses} from '@mui/material';
import {Client} from "./model";
import {ChernyakCreateClientPopup} from "./Popup/ChernyakCreateClientPopup";
import {ChernyakEditClientPopup} from "./Popup/ChernyakEditManufacturePopup";



const ClientPage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: ' firstName',
            headerName: 'Имя',
            flex:1,
        },
        {
            field: 'lastName',
            headerName: 'Фамилия',
            flex:1,
        },
        {
            field: 'phoneNumber',
            headerName: 'Телефон',
            flex:1,
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
                        onClick={()=>setEditedClient(e.row)}
                    >
                        Edit
                    </Button>

                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onDeleteClick(e.row.id)}
                    >
                        Delete
                    </Button>
                </div>
            },
        }
    ];

    const onDeleteClick = (id: number) => {
        setClients(prev =>
            prev.filter(el => el.id !== id)
        )
    }

    const [clients, setClients] = useState<Client[]>([
        {id: 1, firstName: "Имя", lastName: "Фамилия", email:'почта', phoneNumber:'номер'},
    ])

    const [showCreateClient, setShowCreateClient] = useState(false);

    const [editedClient, setEditedClient] = useState<Client|null>(null);

    const onCreate = (newClient: Client) => {
        setClients(prev => [...prev, newClient]);
    }

    const onEdit = (client: Client) => {
        setClients(prev => {
            const editCategory = prev.find(el=>el.id === client.id);

            if (editCategory){
                editCategory.firstName = client.firstName;
                editCategory.lastName = client.lastName;
                editCategory.email = client.email;
                editCategory.phoneNumber = client.phoneNumber;

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
                <h1>Клиенты</h1>

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

            {showCreateClient && <ChernyakCreateClientPopup
                open={showCreateClient}
                onClose={() => setShowCreateClient(false)}
                onCreate={(client) => onCreate(client)}
            />}

            {editedClient !== null && <ChernyakEditClientPopup
                open={editedClient !== null}
                onClose={()=>setEditedClient(null)}
                client={editedClient}
                onEdit={(client)=>onEdit(client)}
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