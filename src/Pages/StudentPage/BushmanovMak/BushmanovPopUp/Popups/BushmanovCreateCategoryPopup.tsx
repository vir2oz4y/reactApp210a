import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { bushmanovAxios } from '../../BushmanovMakPage'
import { Category } from '../../Category/model'
import BushmanovPopUp, { Ipopup } from '../BushmanovPopUp'

type Props = Ipopup & {
    onCreate: (newCategory: Category) => void;
}

export const BushmanovCreateCategoryPagePopup = ({ open, onClose, onCreate }: Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () => {

        bushmanovAxios.post<{item: Category}>('https://canstudy.ru/orderapi/category',
            {
                name: categoryName
            }
        )
            .then((response) => {
                onCreate(response.data.item)
                onClose();
            })

        
    }

    return (
        <BushmanovPopUp
            open={open}
            onClose={onClose}
            title={"Create Category"}
        >
            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="Category name"
                    variant="standard"
                    value={categoryName}
                    onChange={e => setCategoryName(e.target.value)}
                />

                <div style = {{display: 'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}
                    >
                        Create
                    </Button>
                </div>
            </div>
        </BushmanovPopUp>
    )
}

