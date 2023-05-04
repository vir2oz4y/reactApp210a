import React, {useState} from 'react';
import PayzunovPopup, {IPopup} from "../../../../../Components/Payzunov/PayzunovPopup/PayzunovPopup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Category} from "../model";
import {PayzunovAxios} from "../../payzunov";

type Props = IPopup & {
    onCreate: (newCategory: Category) => void;
}

const PayzunovCreateCategoryPopup = ({open, onClose, onCreate}:Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCrateClick = () => {

        PayzunovAxios.post<{ item: Category }>(
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
        <PayzunovPopup
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
        </PayzunovPopup>
    );
};

export default PayzunovCreateCategoryPopup;