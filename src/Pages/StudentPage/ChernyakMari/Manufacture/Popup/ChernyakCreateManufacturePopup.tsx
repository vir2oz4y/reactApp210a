import React, {useState} from "react";
import ChernyakPopup, { IPopup }from "../../../../../Components/Chernyak/ChernyakPopup/ChernyakPopup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField/TextField";
import { Manufacture } from "../model";

type Props = IPopup & {
    onCreate: (newManufacture: Manufacture) => void;
}
export const ChernyakCreateManufacturePopup = ({open, onClose, onCreate}:Props) => {

    const [manufactureName, setManufactureName] = useState('')
    const onCreateClick = () =>{
        onCreate({
                id: Math.random(),
                name: manufactureName
            }
        )
        onClose();
    }


    return (
        <ChernyakPopup
            open={open}
            onClose={onClose}
            title={'Create manufacture'}
        >
            <div style={{display: 'flex', flexDirection: 'column', gap: 'lem'}}>
                <TextField
                    label="Manufacture name"
                    variant="standard"
                    value={manufactureName}
                    onChange={e => setManufactureName(e.target.value)}

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