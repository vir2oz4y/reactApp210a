import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import GayvoronskikhPopUp, { IPopUp } from '../../../../../Components/Gayvoronskikh/GayvoronskikhPopUp/GayvoronskikhPopUp'
import { GayvoronskikhAxios } from '../../GayvoronskikhAndrei'
import { Category } from '../model'

type Props = IPopUp & {
    onCreate: (newCategory: Category) => void;
}

export const GayvoronskikhCreateCategoryPopUp = ({ open, onClose,onCreate }:Props) => {

    const [CategoryName, setCategoryName]= useState('')
    const onCreateClick = () => {
        GayvoronskikhAxios.post<{item:Category}>('https://canstudy.ru/orderapi/category',
            {
                name: CategoryName
            }
        ).then((response)=> {
    onCreate(response.data.item)
    onClose();
    })
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