import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { JabrovAxios } from '../../JabrovPage'
import JabrovPopUp, { IPopup } from '../../JabrovPopUp/JabrovPopUp'
import { Category } from '../model'
//import { Category } from '../Category/model'



type Props = IPopup & {
    category:Category,
    onEdit: (category: Category) => void;

}

export const JabrovEditCategoryPopUp = ({ open, onClose, onEdit, category: categoryProps }: Props) => {
    const [category, setCategory] = useState(categoryProps)

    const onEditClick = () => {

        JabrovAxios.patch <{ item: Category }>(
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
        <JabrovPopUp
            open={open}
            onClose={onClose}
            title={"Createe Category"}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                <TextField
                    label="CategoryName"
                    variant="standard"
                    value={category.name}
                    onChange={e => setCategory(prev => ({ ...prev, name: e.target.value }))}
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
        </JabrovPopUp>
    )

}