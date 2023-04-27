import React, {useState} from "react";
import ChernyakPopup, { IPopup }from "../../../../../Components/Chernyak/ChernyakPopup/ChernyakPopup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField/TextField";
import { Category } from "../model";

type Props = IPopup & {
    category: Category,
    onEdit: (category: Category) => void;
}
export const ChernyakEditCategoryPopup = ({open, onClose, onEdit,category:categoryProps}:Props) => {

    const [category, setCategory] = useState(categoryProps)
    const onEditClick = () =>{
        onEdit(category)

        onClose();}



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
                    value={category.name}
                    onChange={e => setCategory(prev => ({
                        ...prev,
                        naem: e.target.value
                    }))}

                    />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                            onClick ={() => onEditClick()}
                        >
                            Edit
                        </Button>
                    </div>
                </div>
            </ChernyakPopup>

    );
}