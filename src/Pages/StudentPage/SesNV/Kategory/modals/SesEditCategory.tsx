import { Button, TextField, textFieldClasses } from '@mui/material'
import React, { useState } from 'react'
import { Category } from '../model'
import SesPopUp, { IPopUp } from '../sesNV/Ses'

type Props = IPopUp & {
    category: Category,
    onEdit: (category: Category) => void;
}

export const SesCreatCategory = ({ open, onClose, onEdit, category: categoryProps}: Props) => {
    const [category, setCategory] = useState(categoryProps)

    const onEditClick = () => {
        onEdit(category);
        onClose();
    }
    return (

        <SesPopUp
            open={true}
            onClose={() => { }}
            title={'edit'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                <TextField
                    label="imya category"
                    variant="standard"
                    value={category.name}
                    onChange={e => setCategory((prev:any) => ({
                        ...prev,
                        name: e.target.value
                    }))}
                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onEditClick()}
                    >
                        edit
                        </Button>
                </div>
            </div>
        </SesPopUp>

    )
}