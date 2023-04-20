import { Button, TextField, textFieldClasses } from '@mui/material'
import React, { useState } from 'react'
import { Category } from '../model'
import SesPopUp, { IPopUp } from '../sesNV/Ses'

type Props = IPopUp & {
    onCreate: (newCategory:Category) => void;
}

export const SesCreatCategory = ({ open, onClose, onCreate }: Props) => {
    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () => {
        onCreate({
            id: Math.random(),
            name: categoryName
        })
    }
    return (

        <SesPopUp
            open={true}
            onClose={() => { }}
            title={'создание категории'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                        <TextField
                    label="imya category"
                    variant="standard"
                    value={categoryName}
                    onChange={e => setCategoryName(e.target.value)}
                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}
                    >
                        sozdan
                        </Button>
                </div>
            </div>
                </SesPopUp>

        )
}