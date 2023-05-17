import {Button, TextField } from '@mui/material';
import  React, { useState } from 'react'
import SviridenkoDdd , {IPopup} from "../../../../../Components/Sviridenko/SviridenkoDDD/SviridenkoDDD";
import { Category } from '../models';
import {SviridenkoAxios} from "../../SviridenkoDimPage";


type Props = IPopup & {
    onCreate: (newCategory: Category) => void;
}

const SviridenkoCreateCategory = ({open, onClose, onCreate}:Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCrateClick = () => {

        SviridenkoAxios.post<{ item: Category }>(
            "https://canstudy.ru/orderapi/category",
            {
                name: categoryName
            }
        ).then((response) => {

            onCreate(response.data.item)
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
                    value={categoryName}
                    onChange={e => setCategoryName(e.target.value)}
                />

                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button
                        color = {'primary'}
                        variant = {'contained'}
                        onClick={() => onCrateClick()}
                    >
                        Создать
                    </Button>

                </div>
            </div>
        </SviridenkoDdd>
    );
};

export default SviridenkoCreateCategory;