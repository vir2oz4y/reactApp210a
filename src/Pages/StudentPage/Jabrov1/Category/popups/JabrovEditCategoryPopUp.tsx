import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import JabrovPopUp, { Ipopup } from '../../JabrovPopUp/JabrovPopUp'
import { Category } from '../model'
//import { Category } from '../Category/model'



type Props = Ipopup & {
    category:Category,
    onEdit: (category: Category) => void;

}

export const JabrovEditCategoryPopUp = ({ open, onClose, onEdit, category: categoryProps }: Props) => {
    const [category, setCategory] = useState(categoryProps)

    const onEditClick = () => {
        onEdit(category);
        onClose();
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