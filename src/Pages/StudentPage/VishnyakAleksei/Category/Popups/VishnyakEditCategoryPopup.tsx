import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import VishnyakPopup, { IPopup } from '../../../../../Components/Vishnyak/VishnyakPopup/VishnyakPopup'
import { VishnyakAxios } from '../../VishnyakAlekseiPage'
import { Category } from '../model'

type Props = IPopup & {
    category: Category,
    onEdit: (category: Category) => void;
}

export const VishnyakEditCategoryPopup = ({ open, onClose, onEdit, category:categoryProps }: Props) => {

    const [category, setCategory] = useState(categoryProps)

    const onEditClick = () => {

        VishnyakAxios.patch<{item:Category}>(
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
        <VishnyakPopup
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
        </VishnyakPopup>
	)
}