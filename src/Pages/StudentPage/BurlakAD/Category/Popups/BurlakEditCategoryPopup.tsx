import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import BurlakPopup, { IPopup } from '../../../../../Components/Burlak/BurlakPopup/BurlakPopup'
import { BurlakAxios } from '../../BurlakADPage'
import { Category } from '../model'

type Props = IPopup & {
    category: Category,
    onEdit: (category: Category) => void;
}

export const BurlakEditCategoryPopup = ({ open, onClose, onEdit, category:categoryProps }: Props) => {

    const [category, setCategory] = useState(categoryProps)

    const onEditClick = () => {

        BurlakAxios.patch<{item:Category}>(
            'https://canstudy.ru/orderapi/category',
            {
                item:category
            }
        ).then((response) => {
            onEdit(response.data.item);
            onClose();
        })
    }

    return (
        <BurlakPopup
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

                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onEditClick()}
                    >
                        Edit
                    </Button>
                </div>
            </div>
        </BurlakPopup>
    )
}