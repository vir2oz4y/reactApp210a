import React, {useState} from 'react'
import AleshinPopup, {IPopup} from "../../../../../Components/Aleshin/AleshinPopup/AleshinPopup";
import { TextField, Button } from "@mui/material";
import {Category} from "../model";
import {aleshinAxios} from "../../Aleshin";

type Props = IPopup & {
    category: Category,
    onEdit:(category: Category) => void;
}
export const AleshinEditCategoryPopup = ({open, onClose, onEdit, category:categoryProps}:Props) => {

    const [category, setCategory] = useState(categoryProps)

    const onEditClick = () => {

        aleshinAxios.patch<{ item: Category }>(
            'https://canstudy.ru/orderapi/Category',
            {
                item: category
            }
        )
            .then((response) => {
                onEdit(response.data.item)
                onClose();
            })
    }

    return (
        <AleshinPopup
            open={open}
            onClose={onClose}
            title={'Редактировать категорию'}
        >
            <div style = {{display:'flex', flexDirection:'column', gap:'1em'}}>

                <TextField
                    label = "Имя категории"
                    variant="standard"
                    value={category.name}
                    onChange={e => setCategory(prev => ({...prev, name: e.target.value}))}
                />

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick ={() => onEditClick()}
                    >
                        Редактировать
                    </Button>
                </div>
            </div>
        </AleshinPopup>
    )
}

export default AleshinEditCategoryPopup;