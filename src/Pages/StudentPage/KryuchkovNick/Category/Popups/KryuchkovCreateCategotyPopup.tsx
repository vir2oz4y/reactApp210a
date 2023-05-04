import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import KryuchkovPopup, { IPopup } from '../../../../../Components/Kryuchkov/KryuchkovPopup/KryuchkovPopup'
import { kryuchkovAxios } from '../../KryuchkovNickPage'
import { Category } from '../model'

type Props = IPopup & {
    onCreate: (newCategory: Category) => void;
}

export const KryuchkovCreateCategoryPopup = ({ open, onClose, onCreate }: Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () => {

        kryuchkovAxios.post<{ item: Category }>(
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
        <KryuchkovPopup
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
        </KryuchkovPopup>
	)
}