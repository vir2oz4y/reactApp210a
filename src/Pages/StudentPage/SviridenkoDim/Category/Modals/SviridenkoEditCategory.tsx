import {Button, TextField } from '@mui/material';
import  React, { useState } from 'react'
import SviridenkoDdd , {IPopup} from "../../../../../Components/Sviridenko/SviridenkoDDD/SviridenkoDDD";
import { Category } from '../models';
import {SviridenkoAxios} from "../../SviridenkoDimPage";


type Props = IPopup & {
    category:Category,
    onEdit:(category:Category)=>void;
}
export const SviridenkoEditCategory =({open,onClose,onEdit,category:categoryProps}:Props)=>{

    const [category, setCategory]=useState(categoryProps)

    const onEditClick=()=>{
        SviridenkoAxios.patch<{item:Category}>(
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
        <SviridenkoDdd
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
        </SviridenkoDdd>
    </div>)
}