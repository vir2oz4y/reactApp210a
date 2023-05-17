import {Button, TextField } from '@mui/material';
import  React, { useState } from 'react'
import SviridenkoDdd , {IPopup} from "../../../../../Components/Sviridenko/SviridenkoDDD/SviridenkoDDD";
import { Category } from '../models';
import {SviridenkoAxios} from "../../SviridenkoDimPage";


type Props = IPopup & {
    category: Category,
    onEdit: (newCategory: Category) => void;
}

const SviridenkoEditCategory = ({open, onClose, onEdit, category:categoryProps}:Props)=> {

    const [category, setCategory] = useState(categoryProps)

    const onEditClick = () => {

        SviridenkoAxios.patch<{item: Category}>(
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
        <SviridenkoDdd
            open ={open}
            onClose ={onClose}
            title={"Создание категории"}
        >
            <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
                <TextField
                    label="Имя категории"
                    variant="outlined"
                    value={category.name}
                    onChange={e => setCategory(prev=>({...prev, name: e.target.value}))}
                />

                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button
                        color = {'primary'}
                        variant = {'contained'}
                        onClick={() => onEditClick()}
                    >
                        Изменить
                    </Button>

                </div>
            </div>
        </SviridenkoDdd>
    );
};

export default SviridenkoEditCategory;