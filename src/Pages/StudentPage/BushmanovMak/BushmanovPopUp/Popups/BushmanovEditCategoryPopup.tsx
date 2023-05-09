import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { bushmanovAxios } from '../../BushmanovMakPage'
import { Category } from '../../Category/model'
import BushmanovPopUp, { Ipopup } from '../BushmanovPopUp'

type Props = Ipopup & {
    category: Category,
    onEdit: (category: Category) => void;
}

export const BushmanovEditCategoryPagePopup = ({ open, onClose, onEdit, category:categoryProps }: Props) => {

    const [category, setCategory] = useState(categoryProps)

    const onEditClick = () => {

        bushmanovAxios.patch<{item: Category}>(
            'https://canstudy.ru/orderapi/category',
            {
                item: category
            }
        )
            .then((response) => {
                onEdit(response.data.item);
                onClose();
            })     
    }

    return (
        <BushmanovPopUp
            open={open}
            onClose={onClose}
            title={"Edit Category"}
        >
            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="Category name"
                    variant="standard"
                    value={category.name}
                    onChange={e => setCategory(prev => ({
                        ...prev, name: e.target.value
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
