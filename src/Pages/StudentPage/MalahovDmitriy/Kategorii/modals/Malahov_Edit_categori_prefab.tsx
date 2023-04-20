import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import MalahovDY, { IPopup } from '../../../../../Components/Malahov/MalahovDY/MalahovDY'
import { Categorii } from '../models'

type Props = IPopup & {
    category: Categorii,
    onEdit: (newCategory: Categorii) => void;
}
export const Malahov_Edit_categori_prefab = ({ open, onClose, onEdit, category: categoryProps }:Props) => {

    const [category, setCategory] = useState(categoryProps)

    const onEditClick = () => {
        onEdit(category);
        onClose();
    }
    return (
        <div>
            <MalahovDY
                open={open}
                onClose={onClose}
                title={'Edit category'}>
                <div style={{display:'flex',flexDirection:'column',gap:'1em'}}>
                    <TextField
                        label="category name"
                        variant="standard"
                        value={category.name}
                        onChange={e => setCategory(prev => ({
                            ...prev,
                            name: e.target.value
                        }))}
                    />
                    <div style={{ display: 'flex', justifyContent:'center'}}>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                            onClick={() => onEditClick()}
                        >
                            Edit
                        </Button>
                    </div>
                </div>
            </MalahovDY>
        </div>)
}