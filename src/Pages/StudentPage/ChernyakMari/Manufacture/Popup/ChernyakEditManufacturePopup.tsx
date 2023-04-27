import React, {useState} from "react";
import ChernyakPopup, { IPopup }from "../../../../../Components/Chernyak/ChernyakPopup/ChernyakPopup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField/TextField";
import { Manufacture } from "../model";

type Props = IPopup & {
    category: Manufacture,
    onEdit: (manufacture: Manufacture) => void;
}
export const ChernyakEditManufacturePopup = ({open, onClose, onEdit,manufacture:manufactureProps}:Props) => {

    const [manufacture, setManufacture] = useState(manufactureProps)
    const onEditClick = () =>{
        onEdit(manufacture)

        onClose();}



    return (
        <ChernyakPopup
            open={open}
            onClose={onClose}
            title={'Create category'}
        >
            <div style={{display: 'flex', flexDirection: 'column', gap: 'lem'}}>
                <TextField
                    label="Manufacture name"
                    variant="standard"
                    value={manufacture.name}
                    onChange={e => setManufacture(prev => ({
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