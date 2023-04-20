import React, {useState} from "react";
import ChernyakPopup, { IPopup }from "../../../../../Components/Chernyak/ChernyakPopup/ChernyakPopup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField/TextField";
import { Category } from "../model";

type Props = IPopup & {
    onCreate: (newCategory: Category) => void;
}
export const ChernyakCreateCategoryPopup = ({open, onClose, onCreate}:Props) => {

    const [categoryName, setCategoryName] = useState('')
    const onCreateClick = () =>{
        onCreate({
            id: Math.random(),
            name: categoryName
            }
        )
        onClose();
    }


    return (
            <ChernyakPopup
                open={open}
                onClose={onClose}
                title={'Create category'}
            >
                <div style={{display: 'flex', flexDirection: 'column', gap: 'lem'}}>
                    <TextField
                        label="Category name"
                        variant="standard"
                    value={'CategoryName'}
                    onChange={e => setCategoryName(e.target.value)}

                    />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                            onClick ={() => onCreateClick()}
                        >
                            Добавить
                        </Button>
                    </div>
                </div>
            </ChernyakPopup>

    );
}