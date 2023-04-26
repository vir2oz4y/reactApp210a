import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Category } from '../../Category/model'
import AnikeevaPopUp, { Ipopup } from '../AnikeevaPopUp'

type Props = Ipopup & {
    category: Category,
    onEdit: (category: Category) => void;
}

export const AnikeevaEditCategoryPagePopup = ({ open, onClose, onEdit, category:categoryProps }: Props) => {

    const [category, setCategory] = useState(categoryProps)

    const onEditClick = () => {
        onEdit(category);
        onClose();
    }

    return (
        <AnikeevaPopUp
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
        </AnikeevaPopUp>
    )
}
