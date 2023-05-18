import {Button, TextField } from '@mui/material';
import  React, { useState } from 'react'
import TatarnikovPopUp, {IPopup} from "../../../../../Components/TatarnikovPopUp/TatarnikovPopUp";
import {Category} from "../models";
import {TatarnikovAxios} from "../../TatarnikovEgorPage";


type Props = IPopup & {
    category:Category,
    onEdit:(category:Category)=>void;
}
export const TatarnikovEditCategoryPopUp =({open,onClose,onEdit,category:categoryProps}:Props)=>{

    const [category, setCategory]=useState(categoryProps)

    const onEditClick=()=>{
        TatarnikovAxios.patch<{item:Category}>(
            'https://canstudy.ru/orderapi/category',
            {
                item: category
            }
        ).then((response)=>{
            onEdit(response.data.item);
            onClose();
        })
    }

    return (<div>
        <TatarnikovPopUp
            open={open}
            onClose={onClose}
            title={'создание категории'}
        >
            <div style={{display:'flex',flexDirection:'column',gap:'1em'}}>

                <TextField
                    label="Category name"
                    variant="standard"
                    value={category.name}
                    onChange={e=>setCategory(prev=>({...prev,name:e.target.value}))}

                />
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onEditClick()}
                    >
                        Edit
                    </Button>
                </div>
            </div>
        </TatarnikovPopUp>
    </div>)
}