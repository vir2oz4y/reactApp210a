import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Box} from "@mui/material";
import Button from "@mui/material/Button";
import {Client} from "./model";
import AnikeevaPopUp from "../AnikeevaPopUp/AnikeevaPopUp";
import { AnikeevaCreateClientPagePopup } from '../AnikeevaPopUp/popups/AnikeevaCreateClientPagePopup';
import { AnikeevaEditClientPagePopup } from '../AnikeevaPopUp/popups/AnikeevaEditClientPagePopup';



const ClientPage = () => {
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100,
            editable: true,
        },
        {
            field: 'sex',
            headerName: 'sex',
            width: 100,
            editable: true,
        },
        {
            field: 'firstName',
            headerName: 'first Name',
            flex:1,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'last Name',
            flex:1,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'email',
            flex:1,
            editable: true,
        },
        {
            field: 'phoneNumber',
            headerName: 'phone Number',
            flex:1,
            editable: true,
        },

        {
            field: '',
            headerName: '',
            width: 200,
            renderCell:(e:any) =>{
                return <div style={{display: 'flex', gap:'lem'}}>
                    <Button
                        color = {'primary'}
                        variant = {'contained'}
                        onClick = {()=>setShowEditClient(e.row)}>

                        EDIT
                    </Button>

                    <Button color ={'primary'} variant = {'contained'} onClick={()=>OneDeleteClick(e.row.id)}>
                        DELETE
                    </Button>
                </div>
            }
        },
    ];

    const OneDeleteClick = (id:number)=>{
        SetCategories(prev => prev.filter(el=>el.id!==id))
    }

    const [categories,SetCategories] = useState<Client[]>([
        { id: 1, sex: 1, firstName: 'Ivan', lastName: 'Ivanov', email: 'email@.com', phoneNumber: '79512345678'},
        { id: 2, sex: 2, firstName: 'Ivan', lastName: 'Ivanov', email: 'email@.com', phoneNumber: '79512345678'},
        { id: 3, sex: 3, firstName: 'Ivan', lastName: 'Ivanov', email: 'email@.com', phoneNumber: '79512345678'},
        { id: 4, sex: 4, firstName: 'Ivan', lastName: 'Ivanov', email: 'email@.com', phoneNumber: '79512345678'},
        { id: 5, sex: 5, firstName: 'Ivan', lastName: 'Ivanov', email: 'email@.com', phoneNumber: '79512345678'},
        { id: 6, sex: 6, firstName: 'Ivan', lastName: 'Ivanov', email: 'email@.com', phoneNumber: '79512345678'},])

    const [ShowCreateClient, setShowCreateClient] = useState(false);
    const [EditedClient, setShowEditClient] = useState<Client|null>(null);


    const onCreate = (newClient: Client) => {
        SetCategories(prev => [...prev, newClient]);
    }
    const onEdit = (Client: Client) => {
        SetCategories(prev => {
            const EditClient = prev.find(el => el.id === Client.id)


            if (EditClient) {
                EditClient.sex = Client.sex;
                EditClient.firstName = Client.firstName;
                EditClient.lastName =Client.lastName;
                EditClient.email =Client.email;
                EditClient.phoneNumber =Client.phoneNumber;
            }
            return [...prev]
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
                        onClick={() => setShowCreateClient(true)}>

                        Добавить клиента
                    </Button>
                </div>
            </div>
            <div>
                {ShowCreateClient && <AnikeevaCreateClientPagePopup
                    open={ShowCreateClient}
                    onClose={() => setShowCreateClient(false)}
                    onCreate={(Client) => onCreate(Client)}

                />}

                {EditedClient !== null && <AnikeevaEditClientPagePopup
                    open={EditedClient !== null}
                    onClose={()=>setShowEditClient(null)}
                    Client = {EditedClient}
                    onEdit={(Client)=>onEdit(Client)}
                />}

                <Box sx={{height: '70vh', width: '100%'}}>
                    <DataGrid
                        rows={categories}
                        columns={columns}
                    />
                </Box>
            </div>
        </div>
    );
};

export default ClientPage;


