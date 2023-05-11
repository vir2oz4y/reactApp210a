import React, {useState} from 'react'
import AleshinPopup, {IPopup} from "../../../../../Components/Aleshin/AleshinPopup/AleshinPopup";
import { TextField, Button } from "@mui/material";
import {Category} from "../model";
import {aleshinAxios} from "../../Aleshin";

type Props = IPopup & {
    onCreate:(newCategory: Category) => void;
}
export const AleshinCreateCategoryPopup = ({open, onClose, onCreate}:Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () => {

        aleshinAxios.post<{ item: Category }>(
            'https://canstudy.ru/orderapi/Category',
            {
                name: categoryName
            }
        )
            .then((response) => {

                onCreate(response.data.item)
                onClose();

            })
    }

    return (
        <AleshinPopup
            open={open}
            onClose={onClose}
            title={'Создать категорию' }
        >
            <div style = {{display:'flex', flexDirection:'column', gap:'1em'}}>

                <TextField
                    label = "Имя категории"
                    variant="standard"
                    value={categoryName}
                    onChange={e => setCategoryName(e.target.value)}
                />

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick ={() => onCreateClick()}
                    >
                        Создать
                    </Button>
                </div>

            </div>
        </AleshinPopup>
    )
}