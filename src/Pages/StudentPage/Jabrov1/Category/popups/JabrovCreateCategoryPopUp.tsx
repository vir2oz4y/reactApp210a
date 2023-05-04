import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { JabrovAxios } from '../../JabrovPage';
import JabrovPopUp, { IPopup } from '../../JabrovPopUp/JabrovPopUp';
import { Category } from '../model';
//import { Category } from '../Category/model'



type Props = IPopup & {

    onCreate: (newCategory: Category) => void;

}

export const JabrovCreateCategoryPopUp = ({ open, onClose, onCreate }: Props) => {
    const [categoryName, setCategoryName] = useState('')

   

    const onCreateClick = () => {

        JabrovAxios.post<{ item: Category }>(
            'https://canstudy.ru/orderapi/category',
            {
                name: categoryName
            }
        ).then((response) => {
            onCreate(response.data.item)
            onClose();
        })
       
    }
    

    return(
        <JabrovPopUp
            open={open}
            onClose={onClose}
            title={"Createe Category"}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                <TextField
                    label="CategoryName"
                    variant="standard"
                    value={categoryName}
                    onChange={e => setCategoryName(e.target.value)}
                />

                
            

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onCreateClick()}
                    >
                        Create
                        </Button>
                    </div>
            </div>
        </JabrovPopUp>
    )
}