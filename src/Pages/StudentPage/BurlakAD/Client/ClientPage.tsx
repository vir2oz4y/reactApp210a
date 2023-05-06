import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { Client } from './models';
import BurlakPopup, { IPopup } from "../../../../Components/Burlak/BurlakPopup/BurlakPopup";
import { BurlakCreateClientPopup } from './Modals/BurlakCreateClientPopup';
import { BurlakEditClientPopup } from './Modals/BurlakEditClientPopup';
const ClientPage = () => {
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'sex',
            headerName: 'Sex',
        },
        {
            field: 'firstName',
            headerName: 'ClientFirstName',
            flex: 1,
        },
        {
            field: 'lastName',
            headerName: 'ClientLastName',
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
        },
        {
            field: 'phoneNumber',
            headerName: 'PhoneNumber',
            flex: 1,
        },
        {
            field: '',
            headerName: '',
            width: 290,
            renderCell: (e: any) => {
                return <div style={{ display: 'flex', gap: '1em' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setEditedClient(e.row)}
                    >
                        Edit
                    </Button>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onDeleteClick(e.row.id)}
                    >
                        delete
                    </Button>
                </div>
            },
        }
    ];

    const onDeleteClick = (id: number) => {
        setClient(prev =>
            prev.filter(el => el.id != id))
    }

    const [client, setClient] = useState<Client[]>([
        { id: 1, sex: 'male', firstName: 'Alexandr', lastName: 'Burlak', email: 'Sibstrin.ru', phoneNumber: '3' },
    ]);

    const [showCreateClient, setShowCreateClient] = useState(false);
    const [editedClient, setEditedClient] = useState<Client | null>(null);

    const onCreate = (newClient: Client) => {
        setClient(prev => [...prev, newClient]);

    }

    const onEdit = (client: Client) => {
        setClient(prev => {
            const editCategory = prev.find(el => el.id === client.id);

            if (editCategory) {
                editCategory.sex = client.sex;
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
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
            >
                <h1>
                    Client
                </h1>
                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setShowCreateClient(true)}>
                        Add a client
                    </Button>
                </div>
            </div>

            {showCreateClient && <BurlakCreateClientPopup
                open={showCreateClient}
                onClose={() => setShowCreateClient(false)}
                onCreate={(client) => onCreate(client)}

            />}

            {editedClient !== null && <BurlakEditClientPopup
                open={editedClient !== null}
                onClose={() => setEditedClient(null)}
                client={editedClient}
                onEdit={(client) => onEdit(client)}
            />}

            <Box sx={{ height: '100vh', width: '100%' }}>
                <DataGrid
                    rows={client}
                    columns={columns}
                />
            </Box>
        </div>

    );
}

export default ClientPage;