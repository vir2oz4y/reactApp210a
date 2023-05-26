import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import MuseichukDY, { IPopup } from "../../../../../Components/Museichuk/MuseichukDY/MuseichukDY";
import { MuseichukAxios } from '../../MuseichukIO'
import { Category } from '../models'

type Props = IPopup & {
    onCreate: (newCategory: Category) => void;
}

export const Museichuk_Create_Category_Popup = ({ open, onClose, onCreate }: Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () => {

        MuseichukAxios.post<{ item: Category }>(
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
        <MuseichukDY
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

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}
                    >
                        Create
                    </Button>

                </div>
            </div>
        </MuseichukDY>
    )
}