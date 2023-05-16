import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { DogonashevAxios } from '../../DogonashevPage';
import DogonashevPopUp, { IPopup } from '../../DogonshevPopUp/DogonashevPopUp';
import { Category } from '../model';


type Props = IPopup & {
    onCreate:(newCategory: Category)=>void;
}
export const DogonashevCreateCategoryPopUp =({open,onClose,onCreate}:Props)=>{

    const [categoryName, setCategoryName]=useState('')

    const onCreateClick=()=>{
        DogonashevAxios.post<{item:Category}>(
            'https://canstudy.ru/orderapi/category',
            {
                name: categoryName
            }
        ).then((response)=>{
            onCreate(response.data.item)
            onClose();
        })
    }

    function setShowCreateCategory(arg0: boolean): void {
        throw new Error('Function not implemented.');
    }

    return (<div>
        <DogonashevPopUp
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
        </DogonashevPopUp>
    </div>)
}