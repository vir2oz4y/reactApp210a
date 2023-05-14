import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { AnikeevaAxios } from '../../AnikeevaVeraPage';
import { Category } from '../../Category/model';
import AnikeevaPopUp, { Ipopup } from '../AnikeevaPopUp';

type Props = Ipopup & {
    onCreate: (newCategory: Category) => void;
}

export const AnikeevaCreateCategoryPagePopup = ({ open, onClose, onCreate }: Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () => {

        AnikeevaAxios.post<{item: Category}>('https://canstudy.ru/orderapi/category',
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
        <AnikeevaPopUp
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
        </AnikeevaPopUp>
    )
}

