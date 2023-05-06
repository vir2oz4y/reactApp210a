import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import MalahovDY, { IPopup } from '../../../../../Components/Malahov/MalahovDY/MalahovDY'
import { MalahovAxios } from '../../MalahovDmitriy'
import { Category } from '../models'

type Props = IPopup & {
    onCreate: (newCategory: Category) => void;
}
export const Malahov_creat_categori_prefab = ({ open, onClose, onCreate }:Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () => {

        MalahovAxios.post<{ item: Category }>(
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
        <div>
            <MalahovDY
                open={open}
                onClose={onClose}
                title={'Creat category'}>
                <div style={{display:'flex',flexDirection:'column',gap:'1em'}}>
                    <TextField
                        label="category name"
                        variant="standard"
                        value={categoryName}
                        onChange={e => setCategoryName(e.target.value)}
                    />
                    <div style={{ display: 'flex', justifyContent:'center'}}>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                            onClick={() => onCreateClick()}
                        >
                            Category create
                        </Button>
                    </div>
                </div>
            </MalahovDY>
        </div>)
}