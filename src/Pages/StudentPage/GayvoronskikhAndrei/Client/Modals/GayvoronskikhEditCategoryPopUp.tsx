import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import GayvoronskikhPopUp, { IPopUp } from '../../../../../Components/Gayvoronskikh/GayvoronskikhPopUp/GayvoronskikhPopUp'
import { Category } from '../model'

type Props = IPopUp & {
    category: Category,
    onEdit: (category: Category) => void;
}

export const GayvoronskikhEditCategoryPopUp = ({ open, onClose,onEdit,category:categoryProps}:Props) => {

    const [category, setCategory] = useState(categoryProps)
    const onEditClick = () => {
        onEdit(category);
        onClose();
    }

    return (
        <div>
            <GayvoronskikhPopUp
            open={open}
            onClose={onClose}
            title={'Edit Category'}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>

                    <TextField
                        id="standard-basic"
                        label="Standard"
                        variant="standard"
                        value={category.name}
                        onChange={(e) => setCategory(prev => ({
                            ...prev,
                            name: e.target.value
                        }))}
                    />
                        <div style={{ display: 'flex', justifyContent:'center'}}>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                            onClick={()=>onEditClick()}
                        >
                                 Edit
                         </Button>
                        </div>
                </div>
        </GayvoronskikhPopUp>
    </div>
    )
}