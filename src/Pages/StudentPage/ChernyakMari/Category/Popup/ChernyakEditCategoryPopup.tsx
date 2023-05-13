import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import ChernyakPopup, { IPopup } from "../../../../../Components/Chernyak/ChernyakPopup/ChernyakPopup";
import { Category } from '../model'
import {chernyakAxios} from "../../ChernyakM";

type Props = IPopup & {
    category: Category,
    onEdit: (category: Category) => void;
}

export const ChernyakEditCategoryPopup = ({ open, onClose,onEdit,category:categoryProps}:Props) => {

    const [category, setCategory] = useState(categoryProps)
    const onEditClick = () => {

        chernyakAxios.patch<{ item: Category }>(
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
            <ChernyakPopup
                open={open}
                onClose={onClose}
                title={'Создание категории'}
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
            </ChernyakPopup>
        </div>
    )
}