import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import MalahovDY, { IPopup } from "../../../../../Components/Malahov/MalahovDY/MalahovDY";
import { MalahovAxios } from '../../MalahovDmitriy'
import { Category } from '../models'

type Props = IPopup & {
    category: Category,
    onEdit: (category: Category) => void;
}

export const MalahovEditCategoryPopup = ({ open, onClose, onEdit, category: categoryProps }: Props) => {

    const [category, setCategory] = useState(categoryProps)

    const onEditClick = () => {

        MalahovAxios.patch<{ item: Category }>(
            'https://canstudy.ru/orderapi/category',
            {
                item: category
            }
        ).then((response) => {
            onEdit(response.data.item);
            onClose();
        })
    }

    return (
        <MalahovDY
            open={open}
            onClose={onClose}
            title={'Edit category'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>

                <TextField
                    label="Category name"
                    variant="standard"
                    value={category.name}
                    onChange={e => setCategory(prev => ({
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
                        Edit
                    </Button>
                </div>
            </div>
        </MalahovDY>
    )
}