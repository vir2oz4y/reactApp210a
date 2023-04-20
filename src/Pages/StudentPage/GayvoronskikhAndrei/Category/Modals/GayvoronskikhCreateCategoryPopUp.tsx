import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import GayvoronskikhPopUp, { IPopUp } from '../../../../../Components/Gayvoronskikh/GayvoronskikhPopUp/GayvoronskikhPopUp'
import { Category } from '../model'

type Props = IPopUp & {
    onCreate: (newCategory: Category) => void;
}

export const GayvoronskikhCreateCategoryPopUp = ({ open, onClose,onCreate }:Props) => {

    const [CategoryName, setCategoryName]= useState('')
    const onCreateClick = () => {
        onCreate({
            id: Math.random(),
            name: CategoryName
        })
        onClose()
    }

    return (
        <div>
            <GayvoronskikhPopUp
            open={open}
            onClose={onClose}
            title={'Create Category'}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>

                    <TextField
                        id="standard-basic"
                        label="Standard"
                        variant="standard"
                        value={CategoryName}
                        onChange={(e)=>setCategoryName(e.target.value)}
                    />
                        <div style={{ display: 'flex', justifyContent:'center'}}>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                            onClick={()=>onCreateClick()}
                        >
                                 Create
                         </Button>
                        </div>
                </div>
        </GayvoronskikhPopUp>
    </div>
    )
}