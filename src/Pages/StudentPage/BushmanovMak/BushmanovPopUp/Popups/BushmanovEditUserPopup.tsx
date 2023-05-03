import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { User } from '../../User/model'
import BushmanovPopUp, { Ipopup } from '../BushmanovPopUp'

type Props = Ipopup & {
    User: User,
    onEdit: (User: User) => void;
}

export const BushmanovEditUserPagePopup = ({ open, onClose, onEdit, User:UserProps}: Props) => {

    const [User, setUser] = useState(UserProps)

    const onEditClick = () => {
        onEdit(User);
        onClose();
    }

    return (
        <BushmanovPopUp
            open={open}
            onClose={onClose}
            title={"Edit User"}
        >
            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="User name"
                    variant="standard"
                    value={User.identifier}
                    onChange={e => setUser(prev => ({
                        ...prev, identifier: e.target.value
                    }))}
                />
                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                            <Button
                                color={'primary'}
                                variant={'contained'}
                                onClick={() => onEditClick()}
                            >
                                Edit
                            </Button>
                        </div>
                    </div>
        </BushmanovPopUp>
    )
}

