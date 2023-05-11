import { Button, TextField, textFieldClasses } from '@mui/material'
import React, { useState } from 'react'
import { sesAxios } from '../../SesNV'
import { Category } from '../model'
import SesPopUp, { IPopUp } from '../sesNV/Ses'

type Props = IPopUp & {
    onCreate: (newCategory: Category) => void;
}

export const SesCreatCategory = ({ open, onClose, onCreate }: Props) => {
    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () => {
        sesAxios.post<{ item: Category }>(
            'https://canstudy.ru/orderapi/category',
            {
                name: categoryName
            }
        ).then((response) => {

            onCreate(response.data.item)
            onClose();
        })
    }
    return (
        <SesPopUp
            open={open}
            onClose={onClose}
            title={'Create Category'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                <TextField
                    label="category name"
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
                        Create
                        </Button>
                </div>
            </div>
                </SesPopUp>

        )
}