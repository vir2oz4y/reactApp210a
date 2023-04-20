import React, {useState} from 'react';
import PayzunovPopup, {IPopup} from "../../../../../Components/Payzunov/PayzunovPopup/PayzunovPopup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Category} from "../model";

type Props = IPopup & {
    category: Category,
    onEdit: (newCategory: Category) => void;
}

const PayzunovEditCategoryPopup = ({open, onClose, onEdit, category:categoryProps}:Props)=> {

    const [category, setCategory] = useState(categoryProps)

    const onEditClick = () => {
        onEdit(category);

        onClose();
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
        </PayzunovPopup>
    );
};

export default PayzunovEditCategoryPopup;