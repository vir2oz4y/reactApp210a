import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { User } from '../../User/model'
import BushmanovPopUp, { Ipopup } from '../BushmanovPopUp'

type Props = Ipopup & {
    onCreate: (newUser: User) => void;
}

export const BushmanovCreateUserPagePopup = ({ open, onClose, onCreate }: Props) => {

    const [UserName, setUserName] = useState('')

    const onCreateClick = () => {
        onCreate({
            identifier: UserName,
            id: Math.random()
        })
        onClose();
    }

    return (
        <BushmanovPopUp
            open={open}
            onClose={onClose}
            title={"Create User"}
        >
            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="User name"
                    variant="standard"
                    value={UserName}
                    onChange={e => setUserName(e.target.value)}
                />

                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                            <Button
                                color={'primary'}
                                variant={'contained'}
                                onClick={() => onCreateClick()}
                            >
                                Create
                            </Button>
                        </div>
                    </div>
        </BushmanovPopUp>
    )
}

