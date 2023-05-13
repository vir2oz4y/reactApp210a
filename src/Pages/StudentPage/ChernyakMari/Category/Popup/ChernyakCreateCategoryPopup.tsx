import React, {useState} from 'react';
import { Button, TextField } from '@mui/material'
import ChernyakPopup, { IPopup } from "../../../../../Components/Chernyak/ChernyakPopup/ChernyakPopup";
import { Category } from '../model'
import {chernyakAxios} from "../../ChernyakM";

type Props = IPopup & {
    onCreate: (newCategory: Category) => void;
}

export const ChernyakCreateCategoryPopup = ({ open, onClose,onCreate }:Props) => {

    const [categoryName, setCategoryName]= useState('')
    const onCreateClick = () => {
        chernyakAxios.post<{item:Category}>('https://canstudy.ru/orderapi/category',
            {
                name: categoryName
            }
        ).then((response)=> {
            onCreate(response.data.item)
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
                        value={categoryName}
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
            </ChernyakPopup>
        </div>
    )
}