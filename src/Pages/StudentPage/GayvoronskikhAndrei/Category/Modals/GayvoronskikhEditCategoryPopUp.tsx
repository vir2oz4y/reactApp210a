import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import GayvoronskikhPopUp, { IPopUp } from '../../../../../Components/Gayvoronskikh/GayvoronskikhPopUp/GayvoronskikhPopUp'
import { GayvoronskikhAxios } from '../../GayvoronskikhAndrei'
import { Category } from '../model'

type Props = IPopUp & {
    category: Category,
    onEdit: (category: Category) => void;
}

export const GayvoronskikhEditCategoryPopUp = ({ open, onClose,onEdit,category:categoryProps}:Props) => {

    const [category, setCategory] = useState(categoryProps)
    const onEditClick = () => {

        GayvoronskikhAxios.patch<{ item: Category }>(
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