import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import BurlakPopup, { IPopup } from '../../../../../Components/Burlak/BurlakPopup/BurlakPopup'
import { BurlakAxios } from '../../BurlakADPage'
import { Category } from '../model'

type Props = IPopup & {
    onCreate: (newCategory: Category) => void;
}

export const BurlakCreateCategoryPopup = ({ open, onClose, onCreate }: Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () => {

        BurlakAxios.post<{ item: Category }>(
            'https://canstudy.ru/orderapi/category',
            {
                name: categoryName
            }
        ).then((response) => {

            onCreate(response.data.item)
            onClose();
        })
    }

    return (
        <BurlakPopup
            open={open}
            onClose={onClose}
            title={'Create category'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>

                <TextField
                    label="Category name"
                    variant="standard"
                    value={categoryName}
                    onChange={e => setCategoryName(e.target.value)}
                />

                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}
                    >
                        Create
                    </Button>

                </div>
            </div>
        </BurlakPopup>
    )
}