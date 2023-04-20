import {Button, TextField } from '@mui/material';
import  React, { useState } from 'react'
import TelelinskiyPopUp, {IPopup} from "../../../../../Components/Telelinskiy/TelelinskiyPopUp/TelelinskiyPopUP";
import { Category } from '../models';


type Props = IPopup & {
 onCreate:(newCategory: Category)=>void;
}
export const TelelinskiyCreateCategoryPopUp =({open,onClose,onCreate}:Props)=>{

    const [categoryName, setCategoryName]=useState('')

    const onCreateClick=()=>{
        onCreate({
            id: Math.random(),
            name: categoryName
        })
        onClose();
    }

    function setShowCreateCategory(arg0: boolean): void {
        throw new Error('Function not implemented.');
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
                value={categoryName}
                onChange={e=>setCategoryName(e.target.value)}

            />
            <div style={{display:'flex',justifyContent:'center'}}>
                <Button
                color={'primary'}
                variant={'contained'}
                onClick={()=>onCreateClick()}
                >
                    Create
                </Button>
            </div>
        </div>
        </TelelinskiyPopUp>
    </div>)
}