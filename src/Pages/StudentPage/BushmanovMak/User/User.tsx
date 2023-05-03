import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { User } from './model';
import BushmanovPopUp from "../BushmanovPopUp/BushmanovPopUp";
import { BushmanovCreateUserPagePopup } from '../BushmanovPopUp/Popups/BushmanovCreateUserPopup';
import {BushmanovEditUserPagePopup} from "../BushmanovPopUp/Popups/BushmanovEditUserPopup";

const UserPage = () => {

    const columns: GridColDef[] = [
        {
            field: 'identifier',
            headerName: 'Identifier',
            flex: .3
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
                        onClick = {()=>setShowEditUser(e.row)}
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
    const [categories, setCategories] = useState<User[]>([
        { id: 1, identifier: "User 1"},
        { id: 2,identifier: "User 2"},
        { id: 3,identifier: "User 3"},
        { id: 4,identifier: "User 4"},
        { id: 5,identifier: "User 5"},
        { id: 6,identifier: "User 6"},
        { id: 7,identifier: "User 7"},
    ])

    const [ShowCreateUser, setShowCreateUser] = useState(false);
    const [editedUser, setShowEditUser] = useState <User|null>(null);



    const onCreate = (newUser: User) => {
        setCategories(prev => [...prev, newUser]);
    }
    const onEdit = (User: User) => {
        setCategories(prev => {
            const editUser = prev.find(el => el.id === User.id)

            if(editUser) {
                editUser.identifier= User.identifier;
            }
            return [...prev];
        });
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>
                    Пользователи
                </h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setShowCreateUser(true)}
                    >
                        Добавить пользователя
                    </Button>
                </div>

            </div>

            {ShowCreateUser && <BushmanovCreateUserPagePopup
                open={ShowCreateUser}
                onClose={() => setShowCreateUser(false)}
                onCreate={(User) => onCreate(User)}

            />}

            {editedUser !== null && <BushmanovEditUserPagePopup
                open={editedUser !== null}
                onClose={()=> setShowEditUser(null)}
                User={editedUser}
                onEdit={(User)=>onEdit(User)}
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

export default UserPage;