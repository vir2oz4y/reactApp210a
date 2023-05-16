import {Button, TextField } from '@mui/material';
import  React, { useState } from 'react'
import SviridenkoDdd , {IPopup} from "../../../../../Components/Sviridenko/SviridenkoDDD/SviridenkoDDD";
import { Category } from '../models';
import {SviridenkoAxios} from "../../SviridenkoDimPage";


type Props = IPopup & {
    onCreate:(newCategory: Category)=>void;
}
export const SviridenkoCreateCategory =({open,onClose,onCreate}:Props)=>{

    const [categoryName, setCategoryName]=useState('')

    const onCreateClick=()=>{
        SviridenkoAxios.post<{item:Category}>(
            'https://canstudy.ru/orderapi/category',
            {
                name: categoryName
            }
        ).then((response)=>{
            onCreate(response.data.item)
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
        </SviridenkoDdd>
    </div>)
}