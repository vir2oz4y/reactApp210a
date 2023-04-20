import {Button, TextField } from '@mui/material';
import  React, { useState } from 'react'
import TelelinskiyPopUp, {IPopup} from "../../../../../Components/Telelinskiy/TelelinskiyPopUp/TelelinskiyPopUP";
import { Category } from '../models';


type Props = IPopup & {
    category:Category,
    onEdit:(category:Category)=>void;
}
export const TelelinskiyEditCategoryPopUp =({open,onClose,onEdit,category:categoryProps}:Props)=>{

    const [category, setCategory]=useState(categoryProps)

    const onEditClick=()=>{
        onEdit(category);

        onClose();
    }

    return (<div>
        <TelelinskiyPopUp
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
        </TelelinskiyPopUp>
    </div>)
}